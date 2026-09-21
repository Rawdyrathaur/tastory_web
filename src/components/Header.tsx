import { useState } from "react";
import { Star } from "lucide-react";
import { siteConfig } from "../config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-lockup" href="#top" aria-label="Tab Story home">
          <img
            className="brand-logo"
            src={siteConfig.assets.brandLogo}
            alt=""
            aria-hidden="true"
          />
          <span className="logo-word">Tab Story</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#showcase">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="header-actions">
          <a
            className="github-action"
            href={siteConfig.links.extensionRepoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Tab Story on GitHub"
          >
            <img className="github-mark" src="/brand/github.svg" alt="" aria-hidden="true" />
            <span>GitHub</span>
            <Star aria-hidden="true" size={13} fill="currentColor" strokeWidth={1.8} />
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#showcase" onClick={closeMenu}>Product</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a
            href={siteConfig.links.extensionRepoUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <img className="github-mark" src="/brand/github.svg" alt="" aria-hidden="true" />
            GitHub
            <Star aria-hidden="true" size={12} fill="currentColor" />
          </a>
          <a
            className="mobile-nav-cta"
            href={siteConfig.links.extensionStoreUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <img
              src={siteConfig.assets.chromeLogo}
              alt=""
              aria-hidden="true"
            />
            Add to Chrome →
          </a>
        </nav>
      )}
    </header>
  );
}
