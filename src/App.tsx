import { useState } from "react";
import type { ReactNode } from "react";
import { Header } from "./components/Header";
import { ProductHero } from "./components/ProductHero";
import { siteConfig } from "./config/site";

const benefits = [
  ["Save instantly", "Keep useful pages before the tab gets lost."],
  ["Organize easily", "Folders, tags, pins, and notes in one place."],
  ["Set reminders", "Choose when a saved page deserves your attention."],
  ["Browser + PWA", "The same calm product language on both surfaces."],
] as const;

const features = [
  { title: "Save the page, keep the reason.", description: "Capture the page, title, domain, and your own note instead of relying on browser history to remember the context.", icon: "bookmark" },
  { title: "Turn open tabs into a library.", description: "Search saved pages and keep them organized with folders, tags, pins, and a focused history view.", icon: "folder" },
  { title: "Come back at the right time.", description: "Schedule a saved page for later review and keep the reminder workflow local in the browser.", icon: "clock" },
  { title: "Use AI when you need it.", description: "Summarize selected page content and discuss a saved resource using your own Gemini API key.", icon: "spark" },
];

const faqs = [
  ["Where does my Tab Story data live?", "The extension is local by default. Your saved tabs, notes, folders, tags, and reminder state are stored in the browser. Optional integrations can send associated data to the service you explicitly enable."],
  ["Does Tab Story send everything to AI?", "No. AI features are opt-in. When you request a summary or discussion, the selected page content and your question are sent to Google using the Gemini API configuration you provide."],
  ["Can I back up my library?", "Yes. The extension can optionally back up supported library data to Google Drive. API keys are excluded from the backup flow."],
  ["What browsers are supported?", "The current extension targets Chrome and requires Chrome 120 or newer."],
  ["Is hosted sync available today?", "Not yet. Hosted synchronization is being designed as a separate capability. The local-first extension is the available product today."],
] as const;

function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="section-label"><span className="section-label-mark" /><strong>{children}</strong></div>;
}

function FeatureIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    bookmark: <path d="M7 4h10v16l-5-3-5 3z" />,
    folder: <path d="M3.5 7h6l1.8 2H20v9.5a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3 18.5V8.5A1.5 1.5 0 0 1 4.5 7Z" />,
    clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5v5l3 2" /></>,
    spark: <><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" /><path d="m18.5 15 .8 2.7 2.7.8-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8z" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="app-shell" id="top">
      <Header />

      <main>
        <section className="hero" id="product">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-mark"><i /><i /><i /></span>{siteConfig.positioning.eyebrow}</div>
              <h1>Save, organize,<br /><span>and revisit the web.</span></h1>
              <p className="hero-description">{siteConfig.positioning.description}</p>

              <div className="hero-actions">
                <a className="button button-primary button-large" href={siteConfig.links.extensionStoreUrl} target="_blank" rel="noreferrer">Add to Chrome <span aria-hidden="true">→</span></a>
                <a className="button button-secondary button-large" href={siteConfig.links.pwaRepoUrl} target="_blank" rel="noreferrer">Explore the PWA <span aria-hidden="true">↗</span></a>
              </div>

              <div className="hero-meta"><span><b className="meta-dot" />Available now</span><span>Chrome 120+</span><span>Local-first by default</span></div>

              <div className="hero-mini-proof">
                <span>Capture</span><i /><span>Organize</span><i /><span>Return</span>
              </div>
            </div>

            <div className="hero-visual"><ProductHero /></div>
          </div>
        </section>

        <section className="benefit-strip" aria-label="Key product benefits">
          <div className="container benefit-grid">
            {benefits.map(([title, description], index) => (
              <article className="benefit-item" key={title}>
                <span className="benefit-number">{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{title}</strong><p>{description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section">
          <div className="container story-grid">
            <div className="story-aside"><SectionLabel>Why Tab Story</SectionLabel><p>The browser is great at opening things. It is much less useful at helping you remember why they mattered.</p></div>
            <div className="story-main"><h2>Your saved web should feel like a library, not a pile of tabs.</h2><p>Tab Story gives saved pages a place, a little structure, and a clear moment to return to them.</p></div>
          </div>
        </section>

        <section className="feature-section" id="features">
          <div className="container">
            <div className="feature-heading"><div><SectionLabel>Core workflow</SectionLabel><h2>Simple enough to use every day.</h2></div><p>Every part supports one idea: make the web you save useful again.</p></div>
            <div className="feature-grid">
              {features.map((feature, index) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-card-top"><span>{String(index + 1).padStart(2, "0")}</span><div className="feature-icon"><FeatureIcon type={feature.icon} /></div></div>
                  <div className="feature-card-body"><h3>{feature.title}</h3><p>{feature.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section">
          <div className="container workflow-grid">
            <div><SectionLabel>Built around return</SectionLabel><h2>Save it once.<br />Find it when it matters.</h2><p className="workflow-lead">Search your saved library, add context, pin important pages, and schedule the moment you want to come back.</p><a className="text-link" href={siteConfig.links.extensionStoreUrl} target="_blank" rel="noreferrer">Install Tab Story <span aria-hidden="true">→</span></a></div>
            <div className="workflow-list">
              <article><span>01</span><div><strong>Capture</strong><p>Save the page you are looking at before the context disappears.</p></div></article>
              <article><span>02</span><div><strong>Shape</strong><p>Add notes, tags, folders, and pins so the link has a purpose.</p></div></article>
              <article><span>03</span><div><strong>Return</strong><p>Search it later or schedule a reminder for when you need it.</p></div></article>
            </div>
          </div>
        </section>

        <section className="companion-section">
          <div className="container companion-grid">
            <div><SectionLabel>Extension + PWA</SectionLabel><h2>Two surfaces. One simple workflow.</h2><p>The Chrome extension is the primary capture point. The PWA companion gives the saved-library experience a mobile-sized surface.</p><div className="companion-actions"><a className="button button-secondary" href={siteConfig.links.pwaRepoUrl} target="_blank" rel="noreferrer">Explore the PWA <span aria-hidden="true">↗</span></a></div></div>
            <div className="companion-proof"><div className="companion-proof-row"><span>01</span><div><strong>Chrome extension</strong><small>Capture and organize from the browser.</small></div></div><div className="companion-proof-row"><span>02</span><div><strong>PWA companion</strong><small>Review the same product idea on a smaller surface.</small></div></div><div className="companion-proof-note">Both real interfaces are shown together in the hero.</div></div>
          </div>
        </section>

        <section className="privacy-section"><div className="container privacy-grid"><div><SectionLabel>Local-first</SectionLabel><h2>Your library is yours first.</h2></div><div className="privacy-copy"><p>Saved tabs, notes, folders, tags, and reminder state live in the browser by default. AI and Google integrations are optional and only use the data associated with the action you explicitly enable.</p><a className="text-link" href={siteConfig.links.privacyUrl} target="_blank" rel="noreferrer">Read the privacy policy <span aria-hidden="true">↗</span></a></div></div></section>

        <section className="pricing-section" id="pricing"><div className="container"><div className="pricing-heading"><div><SectionLabel>Pricing</SectionLabel><h2>Clear about what is available today.</h2></div><p>No invented paid tier. The local-first experience is available now; hosted sync is still being designed.</p></div><div className="pricing-grid">
          <article className="pricing-card pricing-card-primary"><div className="pricing-card-head"><div><span className="plan-label">FREE</span><strong>Local-first</strong></div><span className="plan-status">Available now</span></div><div className="price-row"><span>$0</span><small>forever</small></div><p>{siteConfig.freePlan.description}</p><ul>{siteConfig.freePlan.features.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul><a className="button button-primary pricing-button" href={siteConfig.links.extensionStoreUrl} target="_blank" rel="noreferrer">Add to Chrome <span aria-hidden="true">→</span></a></article>
          <article className="pricing-card pricing-card-secondary"><div className="pricing-card-head"><div><span className="plan-label">HOSTED SYNC</span><strong>Account services</strong></div><span className="plan-status">Planned</span></div><div className="coming-price">Coming later</div><p>{siteConfig.plannedPlan.description}</p><ul>{siteConfig.plannedPlan.features.map(item => <li key={item}><span>+</span>{item}</li>)}</ul><a className="button button-secondary pricing-button" href={siteConfig.links.extensionRepoUrl} target="_blank" rel="noreferrer">Follow development <span aria-hidden="true">↗</span></a></article>
        </div></div></section>

        <section className="faq-section" id="faq"><div className="container faq-grid"><div className="faq-heading"><SectionLabel>FAQ</SectionLabel><h2>Useful answers before you install.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <article className="faq-item" key={question}><button type="button" className="faq-question" aria-expanded={isOpen} onClick={() => setOpenFaq(current => current === index ? -1 : index)}><span>{question}</span><span className="faq-plus">{isOpen ? "−" : "+"}</span></button>{isOpen && <div className="faq-answer"><p>{answer}</p></div>}</article>; })}</div></div></section>

        <section className="final-cta"><div className="container final-cta-inner"><SectionLabel>Start with the browser</SectionLabel><h2>Save the page.<br />Keep the reason.</h2><p>Start with the local-first Chrome extension and build a saved web you can actually return to.</p><div className="final-actions"><a className="button button-primary button-large" href={siteConfig.links.extensionStoreUrl} target="_blank" rel="noreferrer">Add to Chrome <span aria-hidden="true">→</span></a><a className="button button-secondary button-large" href={siteConfig.links.supportUrl} target="_blank" rel="noreferrer">Send feedback <span aria-hidden="true">↗</span></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div><a className="logo footer-logo" href="#top"><span className="logo-mark" aria-hidden="true"><span /><span /></span><span className="logo-word">Tab Story</span></a><p>A better way to keep the web you want to return to.</p></div><div className="footer-links"><a href="#features">Features</a><a href="#screenshots">Screenshots</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><a href={siteConfig.links.privacyUrl} target="_blank" rel="noreferrer">Privacy</a><a href={siteConfig.links.extensionRepoUrl} target="_blank" rel="noreferrer">GitHub</a></div></div><div className="container footer-bottom"><span>© 2026 Tab Story</span><span>Local-first by default.</span></div></footer>
    </div>
  );
}
