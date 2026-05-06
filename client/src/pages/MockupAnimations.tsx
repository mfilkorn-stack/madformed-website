import { useEffect, useRef } from "react";

export default function MockupAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".anim-fade-up, .anim-fade, .anim-slide-left, .anim-scale")
      .forEach((el) => observer.observe(el));

    function animateCounter(el: Element, target: number, suffix = "+", duration = 1500) {
      const start = performance.now();
      const update = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }

    const statsEl = document.getElementById("stats-section");
    if (statsEl) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const c1 = document.getElementById("c1");
              const c2 = document.getElementById("c2");
              const c3 = document.getElementById("c3");
              if (c1) animateCounter(c1, 10);
              if (c2) animateCounter(c2, 50);
              if (c3) animateCounter(c3, 4, "");
              statsObserver.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );
      statsObserver.observe(statsEl);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .anim-fade-up { opacity:0; transform:translateY(40px); transition:opacity .6s ease, transform .6s ease; }
        .anim-fade-up.visible { opacity:1; transform:translateY(0); }
        .anim-fade { opacity:0; transition:opacity .7s ease; }
        .anim-fade.visible { opacity:1; }
        .anim-slide-left { opacity:0; transform:translateX(-30px); transition:opacity .7s ease, transform .7s ease; }
        .anim-slide-left.visible { opacity:1; transform:translateX(0); }
        .anim-scale { opacity:0; transform:scale(.8); transition:opacity .5s ease, transform .5s ease; }
        .anim-scale.visible { opacity:1; transform:scale(1); }
        .md1 { transition-delay:.1s } .md2 { transition-delay:.2s } .md3 { transition-delay:.3s } .md4 { transition-delay:.4s }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .marquee-track { display:flex; width:max-content; animation:marquee 20s linear infinite; }
        .marquee-track:hover { animation-play-state:paused; }
        @keyframes glow-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(95,185,78,0)} 50%{box-shadow:0 0 30px 8px rgba(95,185,78,.25)} }
        .cta-glow { animation:glow-pulse 3s ease-in-out infinite; }
      `}</style>

      <div style={{ fontFamily: "Open Sans, sans-serif", background: "#f5f7f5" }}>

        {/* ── LEGENDE ── */}
        <div style={{ position:"fixed", bottom:24, right:24, background:"white", borderRadius:16, boxShadow:"0 8px 40px rgba(0,0,0,.15)", padding:20, maxWidth:260, border:"1px solid #eee", zIndex:9999, fontSize:13 }}>
          <p style={{ fontWeight:700, marginBottom:10, color:"#1a2332" }}>Animation-Mockup</p>
          <ul style={{ margin:0, padding:0, listStyle:"none", color:"#666", lineHeight:2 }}>
            <li>🟢 <b>Hero:</b> Text slides-in von links</li>
            <li>📊 <b>Stats-Bar:</b> Zähler-Animation (neu)</li>
            <li>⬆️ <b>Sektionen:</b> fade-in-up beim Scrollen</li>
            <li>🃏 <b>Cards:</b> gestaffelter Eingang</li>
            <li>🔄 <b>Logos:</b> Auto-Marquee (neu)</li>
            <li>✨ <b>CTA:</b> Glow-Puls + Gradient (neu)</li>
          </ul>
          <p style={{ fontSize:11, color:"#aaa", marginTop:10, paddingTop:10, borderTop:"1px solid #eee" }}>Scroll runter um Animationen zu sehen</p>
        </div>

        {/* ── HERO ── */}
        <section style={{ position:"relative", height:600, display:"flex", alignItems:"center", overflow:"hidden",
          background:"linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4) 60%, transparent), url(/images/hero-slide-2.jpg) center/cover no-repeat" }}>
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px", width:"100%" }}>
            <div style={{ maxWidth:640, display:"flex", flexDirection:"column", gap:20 }}>
              <div className="anim-slide-left visible" style={{ display:"flex", alignItems:"center", gap:12, transitionDelay:"0s" }}>
                <div style={{ width:48, height:48, borderRadius:12, background:"rgba(95,185,78,.2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ color:"#5FB94E", fontSize:22 }}>🌿</span>
                </div>
                <span style={{ fontSize:13, fontWeight:700, textTransform:"uppercase", letterSpacing:2, color:"#5FB94E" }}>Strategie & Compliance</span>
              </div>
              <h1 className="anim-slide-left visible" style={{ fontSize:52, fontWeight:800, color:"white", lineHeight:1.15, margin:0, transitionDelay:".15s" }}>
                Medizinisches Cannabis
              </h1>
              <p className="anim-slide-left visible" style={{ fontSize:20, color:"rgba(255,255,255,.8)", lineHeight:1.6, margin:0, transitionDelay:".3s" }}>
                Beratung für Markteintritt, Compliance und Wachstum in der Cannabis-Pharma-Branche.
              </p>
              <div className="anim-slide-left visible" style={{ display:"flex", gap:16, transitionDelay:".45s" }}>
                <button style={{ background:"#5FB94E", color:"white", padding:"14px 28px", borderRadius:10, border:"none", fontWeight:700, fontSize:15, cursor:"pointer" }}>Mehr erfahren →</button>
                <button style={{ background:"transparent", color:"white", padding:"14px 28px", borderRadius:10, border:"1px solid rgba(255,255,255,.3)", fontWeight:700, fontSize:15, cursor:"pointer" }}>Kontakt aufnehmen</button>
              </div>
            </div>
          </div>
          <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", gap:10 }}>
            {[0,1,2,3].map(i => <div key={i} style={{ width:12, height:12, borderRadius:"50%", background: i===0 ? "white" : "rgba(255,255,255,.4)" }} />)}
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section id="stats-section" style={{ background:"white", borderBottom:"1px solid #eee", padding:"32px 0" }}>
          <div style={{ maxWidth:900, margin:"0 auto", padding:"0 32px" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:32, textAlign:"center" }}>
              {[
                { id:"c1", color:"#5FB94E", label:"Jahre Erfahrung", delay:".1s" },
                { id:"c2", color:"#1E9BD9", label:"Projekte abgeschlossen", delay:".2s" },
                { id:"c3", color:"#1a2332", label:"Beratungsschwerpunkte", delay:".3s" },
              ].map(s => (
                <div key={s.id} className={`anim-fade-up`} style={{ transitionDelay: s.delay }}>
                  <div id={s.id} style={{ fontSize:42, fontWeight:800, color: s.color }}>0+</div>
                  <div style={{ fontSize:13, color:"#888", marginTop:4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section style={{ padding:"64px 0", background:"white" }}>
          <div style={{ maxWidth:800, margin:"0 auto", padding:"0 32px", textAlign:"center" }}>
            <h2 className="anim-fade-up" style={{ fontSize:30, fontWeight:800, color:"#1a2332", marginBottom:24 }}>Ihr Partner für medizinische Märkte & KI</h2>
            <p className="anim-fade-up md1" style={{ fontSize:17, color:"#555", lineHeight:1.8, marginBottom:32 }}>
              MadforMed GmbH ist eine spezialisierte B2B-Beratungsgesellschaft mit Sitz in Leverkusen. Wir begleiten Unternehmen in den Bereichen medizinisches Cannabis, Medizintechnik und Medizinalhandel.
            </p>
            <div className="anim-fade-up md2" style={{ display:"flex", justifyContent:"center", gap:32 }}>
              <a href="/leistungen" style={{ color:"#5FB94E", fontWeight:700, textDecoration:"none" }}>Alle Leistungen →</a>
              <a href="/ueber-uns" style={{ color:"#1E9BD9", fontWeight:700, textDecoration:"none" }}>Über uns →</a>
              <a href="/kontakt" style={{ color:"#555", fontWeight:700, textDecoration:"none" }}>Kontakt →</a>
            </div>
          </div>
        </section>

        {/* ── SERVICE CARDS ── */}
        <section style={{ padding:"80px 0", background:"white" }}>
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
            <div className="anim-fade-up" style={{ textAlign:"center", marginBottom:48 }}>
              <p style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:2, color:"#5FB94E", marginBottom:8 }}>Unsere Beratungsschwerpunkte</p>
              <h2 style={{ fontSize:30, fontWeight:800, color:"#1a2332", margin:0 }}>Vier Säulen für Ihren Erfolg</h2>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:24 }}>
              {[
                { icon:"🌿", color:"#5FB94E", border:"rgba(95,185,78,.3)", title:"Medizinisches Cannabis", desc:"Strategische und operative Beratung für Hersteller, Importeure und Großhändler.", delay:".1s" },
                { icon:"🧠", color:"#1E9BD9", border:"rgba(95,185,78,.3)", title:"KI-Enablement", desc:"Copilot & ChatGPT Workshops und Prompt-Playbooks für Vertriebsteams.", delay:".2s", badge:"Neu" },
                { icon:"🖥️", color:"#1E9BD9", border:"rgba(30,155,217,.3)", title:"Medizintechnik", desc:"Go-to-Market-Strategie und Sales Enablement für Medizintechnik-Unternehmen.", delay:".3s" },
                { icon:"🛒", color:"#1E9BD9", border:"rgba(30,155,217,.3)", title:"Medizinalhandel", desc:"Vertriebsstrategie und Key Account Management für Distributoren.", delay:".4s" },
              ].map((card, i) => (
                <div key={i} className="anim-fade-up" style={{ transitionDelay: card.delay, position:"relative", padding:24, background:"white", border:`2px solid ${card.border}`, borderRadius:16, cursor:"pointer" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:4, borderRadius:"16px 16px 0 0", background: i===1 ? "linear-gradient(to right,#5FB94E,#1E9BD9)" : `linear-gradient(to right,${card.color},${card.color}80)` }} />
                  {card.badge && <div style={{ position:"absolute", top:12, right:12, padding:"2px 10px", background:"rgba(30,155,217,.1)", color:"#1E9BD9", fontSize:11, fontWeight:700, borderRadius:20 }}>{card.badge}</div>}
                  <div className="anim-scale" style={{ transitionDelay: card.delay, width:56, height:56, borderRadius:16, background:`${card.color}18`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, fontSize:24 }}>{card.icon}</div>
                  <h3 style={{ fontWeight:800, color:"#1a2332", marginBottom:12, fontSize:16 }}>{card.title}</h3>
                  <p style={{ fontSize:13, color:"#666", lineHeight:1.7, marginBottom:20 }}>{card.desc}</p>
                  <span style={{ color: card.color, fontWeight:700, fontSize:13 }}>Mehr erfahren →</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section style={{ padding:"80px 0", background:"#f5f7f5" }}>
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
            <div className="anim-fade-up" style={{ textAlign:"center", marginBottom:48 }}>
              <p style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:2, color:"#5FB94E", marginBottom:8 }}>Was uns auszeichnet</p>
              <h2 style={{ fontSize:30, fontWeight:800, color:"#1a2332", margin:0 }}>Warum MadforMed</h2>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:24 }}>
              {[
                { icon:"🛡️", grad:"#5FB94E,rgba(95,185,78,.8)", title:"Compliance-First", desc:"Höchste regulatorische Standards. Alle Prozesse GMP/GDP-konform.", delay:".1s" },
                { icon:"⚡", grad:"#1E9BD9,rgba(30,155,217,.8)", title:"Ergebnisorientiert", desc:"Klare Meilensteine, messbare Ergebnisse, transparente Kommunikation.", delay:".2s" },
                { icon:"🔥", grad:"#5FB94E,#1E9BD9", title:"Branchenexpertise", desc:"Tiefes Verständnis der Cannabis- und Medizintechnikmärkte.", delay:".3s" },
                { icon:"👥", grad:"#1E9BD9,#5FB94E", title:"Netzwerk", desc:"Zugang zu relevanten Kontakten in der Branche und Behörden.", delay:".4s" },
              ].map((b, i) => (
                <div key={i} className="anim-fade-up" style={{ transitionDelay: b.delay, background:"white", padding:32, borderRadius:20, border:"2px solid transparent", transition:"border-color .3s, box-shadow .3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#5FB94E40"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "transparent"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                  <div className="anim-scale" style={{ transitionDelay: b.delay, width:56, height:56, borderRadius:14, background:`linear-gradient(135deg,${b.grad})`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, fontSize:24, boxShadow:"0 4px 14px rgba(0,0,0,.15)" }}>{b.icon}</div>
                  <h3 style={{ fontWeight:800, color:"#1a2332", marginBottom:8, fontSize:16 }}>{b.title}</h3>
                  <p style={{ fontSize:13, color:"#666", lineHeight:1.7, margin:0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section style={{ padding:"80px 0", background:"#1a2332", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, opacity:.1, pointerEvents:"none" }}>
            <div style={{ position:"absolute", top:0, left:0, width:384, height:384, borderRadius:"50%", background:"#5FB94E", filter:"blur(80px)", transform:"translate(-50%,-50%)" }} />
            <div style={{ position:"absolute", bottom:0, right:0, width:384, height:384, borderRadius:"50%", background:"#1E9BD9", filter:"blur(80px)", transform:"translate(50%,50%)" }} />
          </div>
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px", position:"relative", zIndex:1 }}>
            <div className="anim-fade" style={{ textAlign:"center", marginBottom:48 }}>
              <p style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:2, color:"#5FB94E", marginBottom:8 }}>Strukturiert & Transparent</p>
              <h2 style={{ fontSize:30, fontWeight:800, color:"white", margin:0 }}>Unsere Arbeitsweise</h2>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:32, position:"relative" }}>
              <div className="anim-fade md3" style={{ position:"absolute", top:88, left:"22%", right:"22%", height:2, background:"linear-gradient(to right,#5FB94E,#1E9BD9)", opacity:.3 }} />
              {[
                { icon:"🔍", grad:"#5FB94E,rgba(95,185,78,.8)", step:1, stepColor:"#5FB94E", title:"Analyse", desc:"Umfassende Bestandsaufnahme Ihrer Situation, Herausforderungen und Ziele.", delay:".1s" },
                { icon:"💡", grad:"#5FB94E,#1E9BD9", step:2, stepColor:"#1E9BD9", title:"Strategie", desc:"Entwicklung maßgeschneiderter Lösungen und eines konkreten Aktionsplans.", delay:".2s" },
                { icon:"📈", grad:"#1E9BD9,rgba(30,155,217,.8)", step:3, stepColor:"#1E9BD9", title:"Umsetzung", desc:"Hands-on Begleitung bei der Ausführung der Strategie und Zielerreichung.", delay:".3s" },
              ].map((s, i) => (
                <div key={i} className="anim-fade-up" style={{ transitionDelay: s.delay }}>
                  <div style={{ background:"rgba(255,255,255,.05)", backdropFilter:"blur(8px)", padding:32, borderRadius:20, border:"1px solid rgba(255,255,255,.1)", textAlign:"center", height:"100%", boxSizing:"border-box" }}>
                    <div style={{ width:64, height:64, borderRadius:20, background:`linear-gradient(135deg,${s.grad})`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", fontSize:28, boxShadow:"0 4px 20px rgba(0,0,0,.3)" }}>{s.icon}</div>
                    <span style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:2, color: s.stepColor }}>Schritt {s.step}</span>
                    <h3 style={{ fontSize:20, fontWeight:800, color:"white", margin:"8px 0 16px" }}>{s.title}</h3>
                    <p style={{ color:"rgba(255,255,255,.7)", lineHeight:1.7, margin:0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOGO MARQUEE ── */}
        <section style={{ padding:"64px 0", background:"white", overflow:"hidden" }}>
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px 40px", textAlign:"center" }}>
            <div className="anim-fade-up">
              <p style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:2, color:"#5FB94E", marginBottom:8 }}>Branchenexpertise</p>
              <h2 style={{ fontSize:30, fontWeight:800, color:"#1a2332", margin:0 }}>Erfahrung aus führenden Unternehmen</h2>
            </div>
          </div>
          <div style={{ position:"relative", overflow:"hidden" }}>
            <div className="marquee-track">
              {["Stryker","Synthes","Arthrex","B.Braun","Zimmer","Medtronic","Johnson & Johnson","Smith & Nephew",
                "Stryker","Synthes","Arthrex","B.Braun","Zimmer","Medtronic","Johnson & Johnson","Smith & Nephew"].map((name, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"center", width:160, height:64, background:"#f8f9f8", borderRadius:12, border:"1px solid #eee", margin:"0 24px", color:"#999", fontWeight:700, fontSize:13, flexShrink:0 }}>{name}</div>
              ))}
            </div>
            <div style={{ position:"absolute", inset:"0 auto 0 0", width:96, background:"linear-gradient(to right,white,transparent)", pointerEvents:"none" }} />
            <div style={{ position:"absolute", inset:"0 0 0 auto", width:96, background:"linear-gradient(to left,white,transparent)", pointerEvents:"none" }} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding:"80px 0", background:"#1a2332", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:300, borderRadius:"50%", background:"linear-gradient(to right,#5FB94E,#1E9BD9)", filter:"blur(80px)", opacity:.2, pointerEvents:"none" }} />
          <div style={{ maxWidth:800, margin:"0 auto", padding:"0 32px", textAlign:"center", position:"relative", zIndex:1 }}>
            <h2 className="anim-fade-up" style={{ fontSize:30, fontWeight:800, color:"white", marginBottom:16 }}>Projekt besprechen</h2>
            <p className="anim-fade-up md1" style={{ fontSize:17, color:"rgba(255,255,255,.6)", marginBottom:32, lineHeight:1.7 }}>Lassen Sie uns gemeinsam Ihre Herausforderungen analysieren und Lösungen entwickeln.</p>
            <div className="anim-fade-up md2">
              <button className="cta-glow" style={{ background:"linear-gradient(to right,#5FB94E,#1E9BD9)", color:"white", padding:"16px 40px", borderRadius:14, border:"none", fontWeight:700, fontSize:17, cursor:"pointer", display:"inline-flex", alignItems:"center", gap:12 }}>
                Kontakt aufnehmen <span>→</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
