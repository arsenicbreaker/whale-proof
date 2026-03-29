const EMOTION_OPTIONS = ["Greedy", "Fear", "FOMO", "Revenge", "Confident"];

export function JournalForm({ formState, onChange, onSubmit, isSubmitting }) {
  return (
    <article className="wp-panel wp-journal-panel">
      <div className="wp-section-heading">
        <div>
          <p className="wp-section-heading__eyebrow">Psychology Journal</p>
          <h2>Record the trigger, not just the trade.</h2>
        </div>
        <p className="wp-section-heading__copy">
          Save one clean note to the <code>journals</code> table with your emotional tag and
          response.
        </p>
      </div>

      <form className="wp-form" onSubmit={onSubmit}>
        <label className="wp-field">
          <span>Emotion Tag</span>
          <select name="emotionTag" value={formState.emotionTag} onChange={onChange} required>
            {EMOTION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="wp-field">
          <span>Journal Note</span>
          <textarea
            name="note"
            value={formState.note}
            onChange={onChange}
            rows={7}
            placeholder="What did the market trigger in you today, and how did you respond?"
            required
          />
        </label>

        <button className="wp-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving entry..." : "Save journal entry"}
        </button>
      </form>
    </article>
  );
}
