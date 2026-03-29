function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(dateString));
}

export function JournalList({ entries }) {
  return (
    <article className="wp-panel wp-journal-panel">
      <div className="wp-section-heading">
        <div>
          <p className="wp-section-heading__eyebrow">History</p>
          <h2>Latest entries first</h2>
        </div>
        <p className="wp-section-heading__copy">
          Review the pattern between emotional pressure and your response.
        </p>
      </div>

      <div className="wp-journal-feed">
        {entries.length ? (
          entries.map((entry) => (
            <article className="wp-journal-entry" key={entry.id}>
              <div className="wp-journal-entry__meta">
                <span className="wp-journal-entry__tag">{entry.emotion_tag}</span>
                <time dateTime={entry.created_at}>{formatDate(entry.created_at)}</time>
              </div>
              <p>{entry.note}</p>
            </article>
          ))
        ) : (
          <div className="wp-empty-state">
            No journal entries yet. Your first submission will appear here.
          </div>
        )}
      </div>
    </article>
  );
}
