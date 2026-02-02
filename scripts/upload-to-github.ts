import { getUncachableGitHubClient } from '../server/github';
import * as fs from 'fs';
import * as path from 'path';

const REPO_OWNER = 'mfilkorn-stack';
const REPO_NAME = 'madformed-website';

const IGNORE_PATTERNS = [
  'node_modules',
  '.git',
  '.replit',
  '.cache',
  '.config',
  'dist',
  '.upm',
  'replit.nix',
  '.breakpoints',
  '.local',
  'scripts/upload-to-github.ts',
  'scripts/push-to-github.ts',
  'data/',
  'attached_assets/'
];

function shouldIgnore(filePath: string): boolean {
  return IGNORE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (shouldIgnore(fullPath)) return;
    
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function uploadToGitHub() {
  console.log('Getting GitHub client...');
  const octokit = await getUncachableGitHubClient();
  
  console.log('Initializing repository with README...');
  try {
    await octokit.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: 'README.md',
      message: 'Initial commit',
      content: Buffer.from('# MadforMed GmbH Website\n\nProfessionelle Website für MadforMed GmbH - Beratung für medizinisches Cannabis, Medizintechnik und KI-Enablement.').toString('base64')
    });
    console.log('Repository initialized');
  } catch (e: any) {
    if (!e.message?.includes('sha')) {
      console.log('README exists, continuing...');
    }
  }
  
  console.log('\nCollecting files...');
  const basePath = '/home/runner/workspace';
  const allFiles = getAllFiles(basePath);
  
  console.log(`Found ${allFiles.length} files to upload\n`);
  
  let uploaded = 0;
  let failed = 0;
  
  for (const filePath of allFiles) {
    const relativePath = path.relative(basePath, filePath);
    
    try {
      const content = fs.readFileSync(filePath);
      const base64Content = content.toString('base64');
      
      let sha: string | undefined;
      try {
        const { data: existing } = await octokit.repos.getContent({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: relativePath
        });
        if ('sha' in existing) {
          sha = existing.sha;
        }
      } catch (e) {
      }
      
      await octokit.repos.createOrUpdateFileContents({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: relativePath,
        message: `Add ${relativePath}`,
        content: base64Content,
        sha: sha
      });
      
      uploaded++;
      console.log(`✓ ${relativePath}`);
    } catch (error: any) {
      failed++;
      console.log(`✗ ${relativePath}: ${error.message?.substring(0, 50)}`);
    }
  }
  
  console.log(`\n✅ Upload complete!`);
  console.log(`   Uploaded: ${uploaded} files`);
  console.log(`   Failed: ${failed} files`);
  console.log(`\n   Repository: https://github.com/${REPO_OWNER}/${REPO_NAME}`);
}

uploadToGitHub().catch(console.error);
