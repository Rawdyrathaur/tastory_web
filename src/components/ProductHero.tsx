import { siteConfig } from "../config/site";

export function ProductHero() {
  return (
    <div className="hero-product" id="screenshots" aria-label="Tab Story product screenshots">
      <div className="hero-shot-stage">
        <figure className="hero-shot hero-shot-extension">
          <div className="hero-shot-bar"><span>Chrome extension</span><small>Real product UI</small></div>
          <div className="hero-shot-image">
            <img src={siteConfig.assets.extensionScreenshot} alt="Tab Story Chrome extension showing saved tabs, search, reminders, notes, and actions." fetchPriority="high" />
          </div>
        </figure>

        <figure className="hero-shot hero-shot-pwa">
          <div className="hero-shot-bar"><span>PWA</span><small>Companion</small></div>
          <div className="hero-shot-image">
            <img src={siteConfig.assets.pwaScreenshot} alt="Tab Story PWA showing the saved-tab library on a mobile-sized interface." />
          </div>
        </figure>
      </div>

      <div className="hero-shot-foot">
        <div><span className="hero-shot-dot" /><strong>One workflow. Two surfaces.</strong></div>
        <span>Real product UI, shown at a controlled scale.</span>
      </div>
    </div>
  );
}
