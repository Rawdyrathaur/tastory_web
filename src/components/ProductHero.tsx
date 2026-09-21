import { siteConfig } from "../config/site";

export function ProductHero() {
  return (
    <div className="hero-product" id="screenshots">
      <div className="hero-product-stage">
        <figure className="hero-product-shot hero-product-shot-extension">
          <div className="hero-product-media">
            <img
              src={siteConfig.assets.extensionScreenshot}
              alt="Tab Story Chrome extension showing saved tabs, search, reminders, notes, and actions."
              fetchPriority="high"
            />
          </div>
        </figure>

        <figure className="hero-product-phone" aria-label="Tab Story PWA preview">
          <div className="hero-phone-shell">
            <div className="hero-phone-screen">
              <img
                src={siteConfig.assets.pwaScreenshot}
                alt="Tab Story PWA showing the saved-tab library on a mobile screen."
              />
            </div>
          </div>
        </figure>
      </div>

      <div className="hero-product-caption">
        <span>Chrome extension</span>
        <span>PWA companion</span>
      </div>
    </div>
  );
}
