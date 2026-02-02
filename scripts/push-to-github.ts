import { createGitHubRepo } from '../server/github';
import { execSync } from 'child_process';

async function pushToGitHub() {
  const repoName = 'madformed-website';
  const description = 'MadforMed GmbH - Firmenwebsite für Beratung in Medizinalcannabis, Medizintechnik und KI-Enablement';
  
  console.log('Creating GitHub repository...');
  
  try {
    const result = await createGitHubRepo(repoName, description);
    console.log(`Repository created: ${result.repoUrl}`);
    
    console.log('Adding GitHub remote...');
    try {
      execSync('git remote remove origin', { stdio: 'inherit' });
    } catch (e) {
    }
    
    execSync(`git remote add origin ${result.cloneUrl}`, { stdio: 'inherit' });
    
    console.log('Pushing to GitHub...');
    execSync('git push -u origin main --force', { stdio: 'inherit' });
    
    console.log(`\nSuccess! Your project is now on GitHub:`);
    console.log(result.repoUrl);
    
  } catch (error: any) {
    if (error.message?.includes('name already exists')) {
      console.log('Repository already exists. Trying to push to existing repo...');
      try {
        execSync('git remote remove origin', { stdio: 'pipe' });
      } catch (e) {}
      execSync(`git remote add origin https://github.com/${error.owner || 'user'}/${repoName}.git`, { stdio: 'inherit' });
      execSync('git push -u origin main --force', { stdio: 'inherit' });
    } else {
      console.error('Error:', error.message || error);
    }
  }
}

pushToGitHub();
