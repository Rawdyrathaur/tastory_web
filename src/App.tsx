import { useState } from "react";
import type { ReactNode } from "react";
import { Header } from "./components/Header";
import { ProductHero } from "./components/ProductHero";
import { siteConfig } from "./config/site";

const features = [
  {
    number: "01",
    title: "Save without losing the context.",
    description:
      "Capture the page, keep the title and domain, and add a note when the link needs more context.",
    icon: "save",
  },
  {
    number: "02",
    title: "Turn a pile of tabs into a library.",
    description:
      "Use folders, tags, pins, search, and saved history to keep useful pages discoverable.",
    icon: "organize",
  },
  {
    number: "03",
    title: "Give future-you a reminder.",
    description:
      "Schedule saved pages for later review instead of relying on another forgotten browser tab.",
    icon: "schedule",
  },
  {
    number: "04",
    title: "Understand more with AI.",
    description:
      "Summarize selected pages and discuss them with AI using your own Gemini API key.",
    icon: "ai",
  },
];

const steps = [
  {
    number: "01",
    title: "Save",
    description:
      "Save the page you're looking at from the Tab Story side panel.",
  },
  {
    number: "02",
    title: "Shape it",
    description:
      "Add notes, tags, folders, and pins so the link has a reason to exist.",
  },
  {
    number: "03",
    title: "Return",
    description:
      "Schedule a reminder, search your library, or revisit the page when the timing is right.",
  },
];

const faqs = [
  {
    question: "Where does my Tab Story data live?",
    answer:
      "The extension is local by default. Your saved tabs, notes, folders, tags, and reminder state are stored in the browser. Optional integrations can send associated data to the service you explicitly enable.",
  },
  {
    question: "Does Tab Story send everything to AI?",
    answer:
      "No. AI features are opt-in. When you request a summary or discussion, the selected page content and your question are sent to Google using the Gemini API configuration you provide.",
  },
  {
    question: "Can I back up my library?",
    answer:
      "Yes. The extension can optionally back up supported library data to Google Drive. API keys are excluded from the backup flow.",
  },
  {
    question: "Can I create Google Calendar events?",
    answer:
      "Yes. Google Calendar integration is separate from Tab Story's local reminders, so a calendar event can be managed independently in Google Calendar.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "The current extension targets Chrome and requires Chrome 120 or newer.",
  },
  {
    question: "Will cross-device sync be available?",
    answer:
      "Cross-device synchronization is being designed as a separate hosted capability. The local-first extension remains the core product while the sync layer is built with explicit conflict and offline handling.",
  },
];

function SectionLabel({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <div className="section-label">
      {number ? <span>{number}</span> : <span className="section-label-mark" />}
      <strong>{children}</strong>
    </div>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    save: (
      <>
        <path d="M5 4h10l4 4v12H5z" />
        <path d="M9 4v5h6V4M9 15h6" />
      </>
    ),
    organize: (
      <>
        <path d="M4 7h16M4 12h16M4 17h10" />
      </>
    ),
    schedule: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 9h16M8 13h3M8 16h5" />
      </>
    ),
    ai: (
      <>
        <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
        <path d="M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z" />
      </>
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
        <section className="hero" id="product">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-mark">
                  <i />
                  <i />
                  <i />
                </span>
                {siteConfig.positioning.eyebrow}
              </div>

              <h1>
                Save it now.
                <br />
                <span>Return when it matters.</span>
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
                  Add to Chrome
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  className="button button-secondary button-large"
                  href="#product-preview"
                >
                  See the real product
                </a>
              </div>

              <div className="hero-meta">
                <span>
                  <b className="meta-dot" />
                  Available now
                </span>
                <span>Chrome 120+</span>
                <span>Local-first by default</span>
              </div>
            </div>

            <div className="hero-visual">
              <ProductHero />
            </div>
          </div>
        </section>

        <section className="signal-strip">
          <div className="container signal-grid">
            <div>
              <span className="signal-value">Save</span>
              <span className="signal-copy">the useful part</span>
            </div>
            <div>
              <span className="signal-value">Organize</span>
              <span className="signal-copy">without overthinking it</span>
            </div>
            <div>
              <span className="signal-value">Schedule</span>
              <span className="signal-copy">the moment to return</span>
            </div>
            <div>
              <span className="signal-value">Understand</span>
              <span className="signal-copy">with optional AI</span>
            </div>
          </div>
        </section>

        <section className="editorial-section" id="features">
          <div className="container editorial-grid">
            <div className="editorial-aside">
              <SectionLabel>Why Tab Story</SectionLabel>
              <p>
                Browsers are excellent at opening things. They are much less
                useful at helping you remember why you opened them.
              </p>
            </div>

            <div className="editorial-main">
              <h2>
                Your browser history shouldn't be the place where your best
                research disappears.
              </h2>
              <p>
                Tab Story gives saved pages a home, a little structure, and a
                reason to come back to them later.
              </p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>What you can do</SectionLabel>
              <h2>A small system for a very large web.</h2>
              <p>
                Everything is built around the simple act of saving something
                now and making it useful later.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.number}>
                  <div className="feature-top">
                    <span className="feature-number">{feature.number}</span>
                    <span className="feature-icon">
                      <FeatureIcon type={feature.icon} />
                    </span>
                  </div>

                  <div className="feature-body">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>

                  <span className="feature-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section" id="how-it-works">
          <div className="container workflow-grid">
            <div className="workflow-copy">
              <SectionLabel>How it works</SectionLabel>
              <h2>
                Fewer tabs.
                <br />
                More intention.
              </h2>
              <p>
                The workflow is deliberately simple: capture something useful,
                give it just enough structure, then let time work for you.
              </p>
              <a
                className="text-link"
                href={siteConfig.links.extensionStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                Install the extension
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="step-list">
              {steps.map((step, index) => (
                <article className="step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <span
                    className={`step-arrow ${
                      index === steps.length - 1 ? "muted" : ""
                    }`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-preview-section" id="product-preview">
          <div className="container">
            <div className="product-preview-heading">
              <div>
                <SectionLabel>Real product UI</SectionLabel>
                <h2>One product. Two surfaces.</h2>
              </div>
              <p>
                The marketing page now uses the actual interfaces instead of
                invented mockups, so visitors can see the product as it really
                looks.
              </p>
            </div>

            <div className="product-screenshot-grid">
              <figure className="product-shot-card extension-shot-card">
                <div className="product-shot-top">
                  <span>01</span>
                  <div>
                    <strong>Chrome extension</strong>
                    <span>Browser side panel</span>
                  </div>
                </div>
                <div className="product-shot-image">
                  <img
                    src={siteConfig.assets.extensionScreenshot}
                    alt="Actual Tab Story Chrome extension screenshot."
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  Save, search, organize, annotate, and schedule from the
                  extension.
                </figcaption>
              </figure>

              <figure className="product-shot-card pwa-shot-card">
                <div className="product-shot-top">
                  <span>02</span>
                  <div>
                    <strong>PWA / mobile</strong>
                    <span>Companion interface</span>
                  </div>
                </div>
                <div className="product-shot-image pwa-image">
                  <img
                    src={siteConfig.assets.pwaScreenshot}
                    alt="Actual Tab Story PWA screenshot showing the mobile library interface."
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  The companion interface keeps the same product language on a
                  smaller screen.
                </figcaption>
              </figure>
            </div>

            <div className="product-preview-footer">
              <span>Real screenshots. No placeholder product renders.</span>
              <a
                className="text-link"
                href={siteConfig.links.pwaRepoUrl}
                target="_blank"
                rel="noreferrer"
              >
                View PWA repository
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <div className="container privacy-grid">
            <div>
              <SectionLabel>Local-first</SectionLabel>
              <h2>Your library is yours first.</h2>
            </div>

            <div>
              <p>
                Tab Story is designed around local data by default. Optional
                integrations are explicit: AI requests use the account and API
                configuration you provide, and Google services are only used
                when you enable them.
              </p>
              <a
                className="text-link"
                href={siteConfig.links.privacyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Read the privacy policy
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading pricing-heading">
              <SectionLabel>Pricing</SectionLabel>
              <h2>Clear about what's available now.</h2>
              <p>
                The local-first extension is the foundation. Hosted
                synchronization is kept separate until that infrastructure is
                ready.
              </p>
            </div>

            <div className="pricing-grid">
              <article className="pricing-card featured">
                <div className="pricing-card-top">
                  <span className="plan-name">FREE</span>
                  <span className="plan-status">Available now</span>
                </div>

                <div className="price">
                  <span>{siteConfig.freePlan.price}</span>
                  <small>forever</small>
                </div>

                <p className="pricing-description">
                  {siteConfig.freePlan.description}
                </p>

                <div className="price-divider" />

                <ul>
                  {siteConfig.freePlan.features.map((item) => (
                    <li key={item}>
                      <span>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  className="button button-primary pricing-button"
                  href={siteConfig.links.extensionStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Add to Chrome
                  <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="pricing-card planned">
                <div className="pricing-card-top">
                  <span className="plan-name">HOSTED SYNC</span>
                  <span className="plan-status">Planned</span>
                </div>

                <div className="planned-price">Coming soon</div>

                <p className="pricing-description">
                  {siteConfig.plannedPlan.description}
                </p>

                <div className="price-divider" />

                <ul>
                  {siteConfig.plannedPlan.features.map((item) => (
                    <li key={item}>
                      <span>+</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  className="button button-secondary pricing-button"
                  href={siteConfig.links.extensionRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Follow development
                  <span aria-hidden="true">↗</span>
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
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article className="faq-item" key={faq.question}>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenFaq((current) =>
                          current === index ? -1 : index
                        )
                      }
                    >
                      <span>{faq.question}</span>
                      <span className="faq-plus">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <SectionLabel>Start with the browser</SectionLabel>

            <h2>
              Save the page.
              <br />
              Keep the reason.
            </h2>

            <p>
              Start with the local-first extension and build a library that
              makes your saved web useful again.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary button-large"
                href={siteConfig.links.extensionStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                Add to Chrome
                <span aria-hidden="true">↗</span>
              </a>

              <a
                className="button button-secondary button-large"
                href={siteConfig.links.supportUrl}
                target="_blank"
                rel="noreferrer"
              >
                Send feedback
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div>
            <a className="logo footer-logo" href="#top">
              <span className="logo-mark" aria-hidden="true">
                <span />
                <span />
              </span>
              <span className="logo-word">Tab Story</span>
            </a>

            <p>
              A calmer system for saving,
              <br />
              organizing, and returning to the web.
            </p>
          </div>

          <div className="footer-links">
            <a href="#product">Product</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#product-preview">Screenshots</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a
              href={siteConfig.links.extensionRepoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Extension
            </a>
            <a
              href={siteConfig.links.pwaRepoUrl}
              target="_blank"
              rel="noreferrer"
            >
              PWA
            </a>
            <a
              href={siteConfig.links.privacyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
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
