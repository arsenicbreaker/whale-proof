export function ResultSummary({
  eyebrow = "Mission Review",
  title,
  description,
  statusLabel,
  badgeLabel = "Status",
  summaryItems = [],
  strengths = [],
  weaknesses = [],
}) {
  return (
    <div className="wp-result-summary">
      <div className="wp-mission-verification__summary">
        <div>
          <p className="wp-section-heading__eyebrow">{eyebrow}</p>
          <h3>{title}</h3>
          <p className="wp-auth-card__description">{description}</p>
        </div>

        <div className="wp-mission-verification__badge">
          <span>{badgeLabel}</span>
          <strong>{statusLabel}</strong>
        </div>
      </div>

      {summaryItems.length ? (
        <div className="wp-mission-summary">
          {summaryItems.map((item) => (
            <article className="wp-mission-summary__item" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      ) : null}

      <div className="wp-result-summary__grid">
        <article className="wp-result-summary__panel">
          <span className="wp-mission-note__label">Strengths</span>
          {strengths.length ? (
            <ul className="wp-checklist">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="wp-auth-card__description">No strengths recorded yet.</p>
          )}
        </article>

        <article className="wp-result-summary__panel">
          <span className="wp-mission-note__label">Weaknesses</span>
          {weaknesses.length ? (
            <ul className="wp-checklist wp-checklist--warning">
              {weaknesses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="wp-auth-card__description">No weaknesses flagged.</p>
          )}
        </article>
      </div>
    </div>
  );
}
