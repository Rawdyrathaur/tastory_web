import { siteConfig } from "../config/site";

export function ProductHero() {
  return (
    <div className="hero-product-showcase">
      <div className="screenshot-meta">
        <span className="screenshot-meta-dot" />
        <span>Chrome extension</span>
        <span className="screenshot-meta-muted">Real product UI</span>
      </div>

      <figure className="screenshot-frame screenshot-frame-hero">
        <div className="screenshot-frame-inner">
          <img
            src={siteConfig.assets.extensionScreenshot}
            alt="Tab Story Chrome extension showing the saved-tab library, search, reminders, notes, tags, and actions."
            fetchPriority="high"
          />
        </div>
      </figure>

      <div className="hero-shot-note">
        <strong>Save once. Come back with context.</strong>
        <span>Shown from the actual Tab Story extension interface.</span>
      </div>
    </div>
  );
}
