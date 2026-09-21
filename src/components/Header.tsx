import { useState } from "react";
import { siteConfig } from "../config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label="Tab Story home">
          <span className="logo-mark" aria-hidden="true"><span /><span /></span>
          <span className="logo-word">Tab Story</span>
          <span className="logo-badge">PWA + Extension</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#product">Why Tab Story</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="header-actions">
          <a className="header-github" href={siteConfig.links.extensionRepoUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a className="button button-small button-primary" href={siteConfig.links.extensionStoreUrl} target="_blank" rel="noreferrer">
            Add to Chrome <span aria-hidden="true">→</span>
          </a>
          <button type="button" className="mobile-menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            <span /><span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#product" onClick={closeMenu}>Why Tab Story</a>
          <a href="#screenshots" onClick={closeMenu}>Screenshots</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href={siteConfig.links.extensionRepoUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>GitHub</a>
          <a className="mobile-nav-cta" href={siteConfig.links.extensionStoreUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Add to Chrome →</a>
        </nav>
      )}
    </header>
  );
}
