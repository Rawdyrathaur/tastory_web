type SavedItemProps = {
  domain: string;
  title: string;
  note?: string;
  tag: string;
  status: string;
  state?: "normal" | "scheduled" | "missed";
};

function SavedItem({
  domain,
  title,
  note,
  tag,
  status,
  state = "normal"
}: SavedItemProps) {
  return (
    <article className={`saved-item saved-item-${state}`}>

      <div className="saved-item-header">

        <div className="saved-favicon">
          {domain.charAt(0).toUpperCase()}
        </div>

        <div className="saved-domain">
          <strong>{domain}</strong>
          <span>{domain}.com</span>
        </div>

        <button
          type="button"
          className="item-menu"
          aria-label={`More options for ${title}`}
        >
          <span />
          <span />
          <span />
        </button>

      </div>


      <div className="saved-title">
        {title}
      </div>


      {note && (
        <div className="saved-note">
          {note}
        </div>
      )}


      <div className="saved-bottom">

        <div className="saved-meta">

          <span className="saved-tag">
            {tag}
          </span>

          <span className={`saved-status status-${state}`}>
            <span className="status-point" />
            {status}
          </span>

        </div>

        <span className="open-link">
          Open
        </span>

      </div>

    </article>
  );
}


export function ProductHero() {
  return (
    <div className="product-composition">

      <div className="extension-window">

        <div className="window-header">

          <div className="window-brand">

            <div className="window-logo">
              T
            </div>

            <div className="window-brand-text">

              <strong>
                Tab Story
              </strong>

              <span>
                Library
              </span>

            </div>

          </div>


          <div className="window-actions">

            <button
              type="button"
              className="window-icon-button"
              aria-label="Search"
            >
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 12l4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="window-add-button"
              aria-label="Save current tab"
            >
              +
            </button>

          </div>

        </div>


        <div className="window-content">

          <div className="window-summary">

            <div>

              <span>
                SAVED TODAY
              </span>

              <strong>
                12 tabs
              </strong>

            </div>

            <div className="sync-pill">
              <span />
              Synced
            </div>

          </div>


          <div className="collection-bar">

            <div>
              <span className="collection-dot" />
              Research
            </div>

            <span>
              3 items
            </span>

          </div>


          <div className="saved-list">

            <SavedItem
              domain="docs"
              title="Designing systems that stay understandable"
              note="Keep this for the product architecture review."
              tag="research"
              status="Saved"
            />

            <SavedItem
              domain="read"
              title="A practical guide to better reading workflows"
              note="Come back after the weekend."
              tag="read later"
              status="Tomorrow · 9:00 AM"
              state="scheduled"
            />

            <SavedItem
              domain="paper"
              title="Knowledge work and the cost of context switching"
              tag="review"
              status="Missed · 2 days ago"
              state="missed"
            />

          </div>

        </div>

      </div>


      <div className="pwa-window">

        <div className="pwa-header">

          <div className="pwa-brand">

            <span className="pwa-logo">
              T
            </span>

            <strong>
              Tab Story
            </strong>

          </div>

          <div className="pwa-user">
            M
          </div>

        </div>


        <div className="pwa-content">

          <span className="pwa-overline">
            TODAY
          </span>

          <h3>
            Keep your saved
            <br />
            web within reach.
          </h3>


          <div className="pwa-reminder">

            <div className="reminder-calendar">
              <strong>
                09
              </strong>

              <span>
                SEP
              </span>
            </div>

            <div className="reminder-content">

              <span>
                UPCOMING
              </span>

              <strong>
                Design review
              </strong>

              <small>
                9:00 AM · Research
              </small>

            </div>

          </div>


          <div className="pwa-row">

            <div className="pwa-folder">
              12
            </div>

            <div className="pwa-row-copy">
              <strong>
                Research
              </strong>

              <span>
                12 saved pages
              </span>
            </div>

            <span className="pwa-arrow">
              →
            </span>

          </div>


          <div className="pwa-row">

            <div className="pwa-folder">
              08
            </div>

            <div className="pwa-row-copy">
              <strong>
                Projects
              </strong>

              <span>
                8 saved pages
              </span>
            </div>

            <span className="pwa-arrow">
              →
            </span>

          </div>

        </div>


        <div className="pwa-nav">

          <span className="active">
            Library
          </span>

          <span>
            Review
          </span>

          <span>
            Schedule
          </span>

        </div>

      </div>


      <div className="product-caption">
        <span className="caption-dot" />
        Your library stays in sync.
      </div>

    </div>
  );
}
