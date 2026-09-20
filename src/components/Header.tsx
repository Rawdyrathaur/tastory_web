import { useState } from "react";
import { siteConfig } from "../config/site";

export function Header() {
  const [open, setOpen] = useState(false);

  const extensionUrl =
    siteConfig.links.extensionStoreUrl || "#extension";

  return (
    <header className="site-header">
      <div className="container header-inner">

        <a
          className="logo"
          href="./"
          aria-label="Tab Story home"
        >
          <span className="logo-mark" aria-hidden="true">
            <span />
            <span />
          </span>

          <span className="logo-word">
            Tab Story
          </span>
        </a>

        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          <a href="#features">Features</a>
          <a href="#extension">Extension</a>
          <a href="#web-app">Web App</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="header-actions">

          <a
            className="sign-in"
            href="#signin"
          >
            Sign in
          </a>

          <a
            className="button button--small"
            href={extensionUrl}
          >
            Add to Chrome
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>

        </div>

      </div>

      {open && (
        <nav
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <a
            href="#features"
            onClick={() => setOpen(false)}
          >
            Features
          </a>

          <a
            href="#extension"
            onClick={() => setOpen(false)}
          >
            Extension
          </a>

          <a
            href="#web-app"
            onClick={() => setOpen(false)}
          >
            Web App
          </a>

          <a
            href="#pricing"
            onClick={() => setOpen(false)}
          >
            Pricing
          </a>

          <a
            href="#signin"
            onClick={() => setOpen(false)}
          >
            Sign in
          </a>
        </nav>
      )}
    </header>
  );
}
