import { useState } from "react";
import type { ReactNode } from "react";
import { Header } from "./components/Header";
import { ProductHero } from "./components/ProductHero";
import { siteConfig } from "./config/site";


const features = [
  {
    label: "SAVE",
    title: "Never ask “why did I save this?”",
    description:
      "Keep the page, its context, and your own note together so the reason survives longer than the tab.",
    icon: "bookmark",
  },
  {
    label: "SCHEDULE",
    title: "Turn “later” into a real time.",
    description:
      "Schedule a page for a meeting, a weekend read, a follow-up, or anything else you know you will need again.",
    icon: "clock",
  },
  {
    label: "ORGANIZE",
    title: "Build a library around projects.",
    description:
      "Use collections, tags, pins, and search to keep useful pages connected to the work they belong to.",
    icon: "folder",
  },
];

const workflow = [
  ["01", "Save", "Capture the page before it disappears into history."],
  ["02", "Add intention", "Give it a note, a collection, a tag, or a reminder."],
  ["03", "Return", "Find it again when the page becomes useful."],
] as const;



const states = [
  ["Upcoming", "A page has a time to return."],
  ["Missed", "A reminder passed without a visit."],
  ["Completed", "The page served its purpose."],
  ["Archived", "Keep it out of the active queue."],
] as const;

const faqs = [
  ["Where does my Tab Story data live?", "The extension is local by default. Saved tabs, notes, folders, tags, and reminder state are stored in the browser. Optional integrations can send associated data to the service you explicitly enable."],
  ["Does Tab Story send everything to AI?", "No. AI features are opt-in. When you request a summary or discussion, the selected page content and your question are sent to Google using the Gemini API configuration you provide."],
  ["Can I back up my library?", "Yes. The extension can optionally back up supported library data to Google Drive. API keys are excluded from the backup flow."],
  ["What browsers are supported?", "The current extension targets Chrome and requires Chrome 120 or newer."],
  ["Is hosted sync available today?", "Not yet. Hosted synchronization is being designed as a separate capability. The local-first extension is the available product today."],
] as const;

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label-mark" />
      <strong>{children}</strong>
    </div>
  );
}

function Icon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    bookmark: <path d="M7 4h10v16l-5-3-5 3z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v5l3 2" />
      </>
    ),
    folder: (
      <path d="M3.5 7h6l1.8 2H20v9.5a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3 18.5V8.5A1.5 1.5 0 0 1 4.5 7Z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="app-shell" id="top">
      <Header />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">

              <h1>
                Save it now.
                <br />
                <span>Get reminded when it matters.</span>
              </h1>

              <p className="hero-description">
                {siteConfig.positioning.description}
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary button-large"
                  href={siteConfig.links.extensionStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                  className="brand-button-icon"
                  src={siteConfig.assets.chromeLogo}
                  alt=""
                  aria-hidden="true"
                />
                Add to Chrome <span aria-hidden="true">→</span>
                </a>
                <a className="button button-secondary button-large" href="#showcase">
                  See the product
                </a>
              </div>

              <div className="hero-meta">
                <span><b className="meta-dot" />Available now</span>
                <span>Chrome 120+</span>
                <span>Local-first by default</span>
              </div>
            </div>

            <div className="hero-visual">
              <ProductHero />
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>What matters</SectionLabel>
              <h2>Keep the saved web useful.</h2>
              <p>Three things do most of the work.</p>
            </div>

            <div className="feature-grid">
              {features.map((feature, index) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div className="feature-icon"><Icon type={feature.icon} /></div>
                  </div>
                  <span className="feature-label">{feature.label}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section">
          <div className="container workflow-grid">
            <div className="workflow-copy">
              <SectionLabel>How it works</SectionLabel>
              <h2>Save once. Add context. Return when it matters.</h2>
              <p>
                A short loop for the pages you already know you will want
                again.
              </p>
              <a
                className="text-link"
                href={siteConfig.links.extensionStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                Install Tab Story <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="workflow-list">
              {workflow.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="memory-section">
          <div className="container memory-grid">
            <div>
              <SectionLabel>Your web has a memory</SectionLabel>
              <h2>Know what you still care about.</h2>
              <p>
                A saved page can move through a simple timeline instead of
                vanishing into history.
              </p>
            </div>

            <div className="memory-states">
              {states.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase-section" id="showcase">
          <div className="container showcase-grid">
            <div className="showcase-copy">
              <SectionLabel>Browser + PWA</SectionLabel>
              <h2>Capture in Chrome. Review on a phone.</h2>
              <p>
                Use the extension where you browse, then open the companion
                PWA when a saved page deserves a smaller, focused screen.
              </p>

              <div className="showcase-points">
                <div><span>✓</span>Real product interfaces</div>
                <div><span>✓</span>One save-and-return idea</div>
                <div><span>✓</span>Mobile-friendly review surface</div>
              </div>

              <a
                className="button button-secondary"
                href={siteConfig.links.webAppUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open the PWA <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="showcase-visual">
              <figure className="showcase-phone">
                <div className="showcase-phone-screen">
                  <img
                    src={siteConfig.assets.pwaScreenshot}
                    alt="Tab Story PWA showing the Schedule view with reminders."
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section className="ai-section">
          <div className="container ai-grid">
            <div>
              <SectionLabel>Optional AI</SectionLabel>
              <h2>AI for the saved web, when you actually need it.</h2>
            </div>
            <div>
              <p>
                Summarize a selected page, discuss it, or make a large saved
                topic easier to understand using your own Gemini API key.
              </p>
              <p className="ai-note">
                AI is opt-in. It is not required for the core save, organize,
                and revisit workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="container">
            <div className="pricing-heading">
              <div>
                <SectionLabel>Pricing</SectionLabel>
                <h2>Start with the product that is available today.</h2>
              </div>
              <p>
                The local-first extension is available now. Hosted sync is a
                separate planned capability.
              </p>
            </div>

            <div className="pricing-grid">
              <article className="pricing-card pricing-card-primary">
                <div className="pricing-card-head">
                  <div>
                    <span className="plan-label">FREE</span>
                    <strong>Local-first</strong>
                  </div>
                  <span className="plan-status">Available now</span>
                </div>

                <div className="price-row"><span>$0</span><small>forever</small></div>
                <p>{siteConfig.freePlan.description}</p>

                <ul>
                  {siteConfig.freePlan.features.map((item) => (
                    <li key={item}><span>✓</span>{item}</li>
                  ))}
                </ul>

                <a
                  className="button button-primary pricing-button"
                  href={siteConfig.links.extensionStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                  className="brand-button-icon"
                  src={siteConfig.assets.chromeLogo}
                  alt=""
                  aria-hidden="true"
                />
                Add to Chrome <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="pricing-card pricing-card-secondary">
                <div className="pricing-card-head">
                  <div>
                    <span className="plan-label">HOSTED SYNC</span>
                    <strong>Account services</strong>
                  </div>
                  <span className="plan-status">Planned</span>
                </div>

                <div className="coming-price">Coming later</div>
                <p>{siteConfig.plannedPlan.description}</p>

                <ul>
                  {siteConfig.plannedPlan.features.map((item) => (
                    <li key={item}><span>+</span>{item}</li>
                  ))}
                </ul>

                <a
                  className="button button-secondary pricing-button"
                  href={siteConfig.links.extensionRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Follow development <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-heading">
              <SectionLabel>FAQ</SectionLabel>
              <h2>Useful answers before you install.</h2>
            </div>

            <div className="faq-list">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;

                return (
                  <article className="faq-item" key={question}>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenFaq((current) => current === index ? -1 : index)
                      }
                    >
                      <span>{question}</span>
                      <span className="faq-plus">{isOpen ? "−" : "+"}</span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>{answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div>            <a className="brand-lockup footer-lockup" href="#top" aria-label="Tab Story home">
              <img
                className="brand-logo"
                src={siteConfig.assets.brandLogo}
                alt=""
                aria-hidden="true"
              />
              <span className="logo-word">Tab Story</span>
            </a>
            <p>Save it now. Get reminded when it matters.</p>
          </div>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#showcase">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href={siteConfig.links.privacyUrl} target="_blank" rel="noreferrer">Privacy</a>
            <a href={siteConfig.links.extensionRepoUrl} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Tab Story</span>
          <span>Local-first by default.</span>
        </div>
      </footer>
    </div>
  );
}
