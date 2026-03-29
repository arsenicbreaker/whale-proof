import { useEffect, useMemo, useState } from "react";
import { PageLayout } from "../../layout";
import { useAuth } from "../../../context/AuthContext";
import { createJournalEntry, fetchJournals } from "../../../services/journalService";
import { JournalForm } from "./JournalForm";
import { JournalList } from "./JournalList";

const defaultJournalState = {
  emotionTag: "Greedy",
  note: "",
};

export function JournalPage() {
  const { user, profile } = useAuth();
  const [entries, setEntries] = useState([]);
  const [formState, setFormState] = useState(defaultJournalState);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadEntries() {
      if (!user) {
        return;
      }

      setLoading(true);
      setError("");

      try {
        const rows = await fetchJournals(user.id);

        if (isMounted) {
          setEntries(rows);
        }
      } catch (loadError) {
        console.error("Failed to load journal entries.", loadError);
        if (isMounted) {
          setError(loadError.message || "Unable to load your journal.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    void loadEntries();

    return () => {
      isMounted = false;
    };
  }, [user]);

  const displayName = useMemo(
    () => profile?.username || user?.email?.split("@")[0] || "Trader",
    [profile?.username, user?.email],
  );

  const latestEmotion = entries[0]?.emotion_tag ?? "No entries";

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!user) {
      return;
    }

    const trimmedNote = formState.note.trim();

    if (!trimmedNote) {
      setError("Journal note cannot be empty.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const entry = await createJournalEntry({
        userId: user.id,
        note: trimmedNote,
        emotionTag: formState.emotionTag,
      });

      setEntries((currentEntries) => [entry, ...currentEntries]);
      setFormState(defaultJournalState);
    } catch (submitError) {
      console.error("Failed to save journal entry.", submitError);
      setError(submitError.message || "Unable to save your journal entry.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageLayout
      bodyClass="index_ico whaleproof-app-body"
      title="Psychology Journal - WhaleProof"
      showFooter={false}
      templateScripts={false}
    >
      <section className="wp-dashboard-page">
        <div className="container">
          <div className="wp-dashboard-shell">
            <div className="wp-dashboard-hero">
              <div>
                <p className="wp-dashboard-hero__eyebrow">Protected journal</p>
                <h1>Psychology Journal</h1>
                <p className="wp-dashboard-hero__copy">
                  Track what the market triggered in {displayName} and how that response affected
                  decision quality.
                </p>
              </div>
              <div className="wp-stats-grid">
                <article className="wp-stat-card">
                  <span>Total entries</span>
                  <strong>{entries.length}</strong>
                </article>
                <article className="wp-stat-card">
                  <span>Latest tag</span>
                  <strong>{latestEmotion}</strong>
                </article>
                <article className="wp-stat-card">
                  <span>Status</span>
                  <strong>{entries.length ? "Active" : "Start"}</strong>
                </article>
              </div>
            </div>

            {error ? <div className="wp-alert wp-alert--error">{error}</div> : null}

            {loading ? (
              <div className="wp-panel">
                <div className="wp-empty-state">Loading your journal...</div>
              </div>
            ) : (
              <div className="wp-journal-page-grid">
                <JournalForm
                  formState={formState}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  isSubmitting={submitting}
                />
                <JournalList entries={entries} />
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
