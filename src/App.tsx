import { Header } from "./components/Header";
import { ProductHero } from "./components/ProductHero";
import { siteConfig } from "./config/site";

export default function App() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <section className="hero">
          <div className="container hero-grid">

            <div className="hero-copy">

              <div className="hero-eyebrow">
                <span className="eyebrow-symbol">
                  <span />
                  <span />
                  <span />
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
                  href={
                    siteConfig.links.extensionStoreUrl ||
                    "#extension"
                  }
                  className="button button-primary"
                >
                  Add to Chrome

                  <span
                    className="button-icon"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>

                <a
                  href={
                    siteConfig.links.webAppUrl ||
                    "#web-app"
                  }
                  className="button button-secondary"
                >
                  Open the Web App
                </a>

              </div>

              <div className="hero-note">
                <span className="hero-note-check">
                  ✓
                </span>

                <span>
                  Start free
                </span>

                <span className="hero-note-separator" />

                <span>
                  No credit card required
                </span>
              </div>

            </div>

            <div className="hero-visual">
              <ProductHero />
            </div>

          </div>
        </section>


        <section
          className="promise-section"
          aria-label="Tab Story benefits"
        >
          <div className="container promise-grid">

            {siteConfig.promises.map(
              (promise, index) => (
                <div
                  className="promise"
                  key={promise}
                >

                  <span className="promise-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>
                    {promise}
                  </span>

                </div>
              )
            )}

          </div>
        </section>


        <section
          id="features"
          className="intro-section"
        >
          <div className="container intro-inner">

            <div className="intro-label">
              A calmer browsing workflow.
            </div>

            <h2>
              Your saved web,
              <br />
              finally has a place.
            </h2>

            <p>
              Tab Story brings saving, organization,
              scheduling, reminders, reading, and context
              together instead of leaving everything inside
              an overcrowded browser.
            </p>

          </div>
        </section>


        <section id="extension" />
        <section id="web-app" />
        <section id="pricing" />
        <section id="signin" />
      </main>


      <footer className="site-footer">
        <div className="container footer-inner">

          <span>
            © 2026 {siteConfig.productName}
          </span>

          <span>
            Built around your saved web.
          </span>

        </div>
      </footer>
    </div>
  );
}
