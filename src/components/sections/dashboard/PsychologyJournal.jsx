const emotionOptions = [
  "Calm",
  "Focused",
  "Confident",
  "Greedy",
  "Fearful",
  "Frustrated",
  "Overtrading",
];

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(dateString));
}

export function PsychologyJournal({
  entries,
  formState,
  onChange,
  onSubmit,
  isSubmitting,
}) {
  return (
    <section className="wp-panel">
      <div className="wp-section-heading">
        <div>
          <p className="wp-section-heading__eyebrow">Phase 3</p>
          <h2>Psychology Journal</h2>
        </div>
        <p className="wp-section-heading__copy">
          Save emotional observations to the <code>journals</code> table while
          you work through The Shield.
        </p>
      </div>

      <div className="wp-journal-layout">
        <form className="wp-form" onSubmit={onSubmit}>
          <label className="wp-field">
            <span>Emotion tag</span>
            <select
              name="emotionTag"
              value={formState.emotionTag}
              onChange={onChange}
              required
            >
              {emotionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="wp-field">
            <span>Journal note</span>
            <textarea
              name="content"
              value={formState.content}
              onChange={onChange}
              rows={6}
              placeholder="What did the market trigger in you today, and how did you respond?"
              required
            />
          </label>

          <button className="wp-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving entry..." : "Save journal entry"}
          </button>
        </form>

        <div className="wp-journal-feed">
          {entries.length ? (
            entries.map((entry) => (
              <article className="wp-journal-entry" key={entry.id}>
                <div className="wp-journal-entry__meta">
                  <span className="wp-journal-entry__tag">{entry.emotion_tag}</span>
                  <time dateTime={entry.created_at}>{formatDate(entry.created_at)}</time>
                </div>
                <p>{entry.content}</p>
              </article>
            ))
          ) : (
            <div className="wp-empty-state">
              No journal entries yet. Your first submission will appear here.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
