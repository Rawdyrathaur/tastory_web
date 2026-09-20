function Icon({
  type,
}: {
  type: "search" | "plus" | "clock" | "note" | "spark";
}) {
  if (type === "search") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </svg>
    );
  }

  if (type === "plus") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    );
  }

  if (type === "note") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h8l3 3v13H7z" />
        <path d="M15 4v4h4M10 12h5M10 16h4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
    </svg>
  );
}

function ResourceRow({
  domain,
  title,
  tag,
  state,
}: {
  domain: string;
  title: string;
  tag: string;
  state?: "saved" | "scheduled";
}) {
  return (
    <article className="resource-row">
      <div className="resource-favicon">
        {domain.slice(0, 1).toUpperCase()}
      </div>

      <div className="resource-copy">
        <strong>{title}</strong>
        <span>{domain}</span>
      </div>

      <div className="resource-side">
        <span className="resource-tag">{tag}</span>

        {state === "scheduled" ? (
          <span className="resource-time">
            <Icon type="clock" />
            Tomorrow
          </span>
        ) : (
          <span className="resource-state">Saved</span>
        )}
      </div>
    </article>
  );
}

export function ProductHero() {
  return (
    <div className="product-stage" aria-label="Tab Story product preview">
      <div className="product-window extension-preview">
        <div className="preview-topbar">
          <div className="preview-brand">
            <div className="preview-brand-mark">T</div>

            <div>
              <strong>Tab Story</strong>
              <span>Library</span>
            </div>
          </div>

          <div className="preview-actions">
            <button type="button" aria-label="Search">
              <Icon type="search" />
            </button>

            <button
              type="button"
              className="preview-add"
              aria-label="Save current tab"
            >
              <Icon type="plus" />
            </button>
          </div>
        </div>

        <div className="preview-content">
          <div className="preview-intro">
            <div>
              <span className="preview-kicker">YOUR LIBRARY</span>
              <h3>Research</h3>
            </div>

            <span className="preview-count">12 saved</span>
          </div>

          <div className="preview-search">
            <Icon type="search" />
            <span>Search saved pages</span>
            <kbd>⌘K</kbd>
          </div>

          <div className="preview-filters">
            <span className="filter-active">All</span>
            <span>Unread</span>
            <span>Scheduled</span>
            <span>Pinned</span>
          </div>

          <div className="resource-list">
            <ResourceRow
              domain="developer.mozilla.org"
              title="Building interfaces that stay understandable"
              tag="research"
            />

            <ResourceRow
              domain="readwise.io"
              title="A better workflow for reading later"
              tag="read later"
              state="scheduled"
            />

            <ResourceRow
              domain="webkit.org"
              title="Designing for the browser as a workspace"
              tag="product"
            />
          </div>

          <div className="preview-footer-line">
            <span className="sync-indicator" />
            Local library ready
          </div>
        </div>
      </div>

      <div className="product-window companion-preview">
        <div className="companion-top">
          <div>
            <span className="preview-kicker">REVIEW</span>
            <strong>Come back to it.</strong>
          </div>

          <div className="companion-avatar">M</div>
        </div>

        <div className="companion-card">
          <div className="companion-card-icon">
            <Icon type="clock" />
          </div>

          <div>
            <span>UPCOMING</span>
            <strong>Design review</strong>
            <small>Tomorrow · 9:00 AM</small>
          </div>
        </div>

        <div className="companion-card">
          <div className="companion-card-icon accent">
            <Icon type="spark" />
          </div>

          <div>
            <span>AI</span>
            <strong>Discuss this page</strong>
            <small>Ask a question about a saved resource</small>
          </div>
        </div>

        <div className="companion-stat-row">
          <div>
            <span>12</span>
            <small>saved</small>
          </div>

          <div>
            <span>04</span>
            <small>scheduled</small>
          </div>

          <div>
            <span>08</span>
            <small>tagged</small>
          </div>
        </div>
      </div>

      <div className="stage-label">
        <span className="stage-label-dot" />
        Product preview
        <span>Extension + companion workflow</span>
      </div>
    </div>
  );
}
