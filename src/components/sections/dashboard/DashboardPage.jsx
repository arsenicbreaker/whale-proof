import { useEffect, useMemo, useState } from "react";
import { PageLayout } from "../../layout";
import { useAuth } from "../../../context/AuthContext";
import { LEARNING_PHASES } from "../../../constants/phases";
import { createJournalEntry, fetchJournals } from "../../../services/journalService";
import { fetchUserProgress, updatePhaseCompletion } from "../../../services/progressService";
import { PhaseProgressBoard } from "./PhaseProgressBoard";
import { PsychologyJournal } from "./PsychologyJournal";

const defaultJournalState = {
  emotionTag: "Calm",
  content: "",
};

export function DashboardPage() {
  const { user, profile, refreshProfile } = useAuth();
  const [progress, setProgress] = useState([]);
  const [journals, setJournals] = useState([]);
  const [journalForm, setJournalForm] = useState(defaultJournalState);
  const [loading, setLoading] = useState(true);
  const [phaseActionLoading, setPhaseActionLoading] = useState("");
  const [journalSubmitting, setJournalSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadDashboardData() {
      if (!user) {
        return;
      }

      setLoading(true);
      setError("");

      try {
        const [progressRows, journalRows] = await Promise.all([
          fetchUserProgress(user.id),
          fetchJournals(user.id),
        ]);

        if (isMounted) {
          setProgress(progressRows);
          setJournals(journalRows);
        }
      } catch (loadError) {
        console.error("Failed to load dashboard data.", loadError);
        if (isMounted) {
          setError(loadError.message || "Unable to load your dashboard.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    void loadDashboardData();

    return () => {
      isMounted = false;
    };
  }, [user]);

  const progressMap = useMemo(
    () =>
      progress.reduce((accumulator, row) => {
        accumulator[row.phase_name] = row;
        return accumulator;
      }, {}),
    [progress],
  );

  const completedCount = progress.filter((row) => row.is_completed).length;
  const completionPercent = Math.round(
    (completedCount / LEARNING_PHASES.length) * 100,
  );

  async function handleCompletePhase(phaseName) {
    if (!user) {
      return;
    }

    setPhaseActionLoading(phaseName);
    setError("");

    try {
      const nextProgress = await updatePhaseCompletion(user.id, phaseName, true);
      setProgress(nextProgress);
      await refreshProfile();
    } catch (updateError) {
      console.error("Failed to update phase progress.", updateError);
      setError(updateError.message || "Unable to update phase progress.");
    } finally {
      setPhaseActionLoading("");
    }
  }

  function handleJournalChange(event) {
    const { name, value } = event.target;
    setJournalForm((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  }

  async function handleJournalSubmit(event) {
    event.preventDefault();

    if (!user) {
      return;
    }

    setJournalSubmitting(true);
    setError("");

    try {
      const entry = await createJournalEntry({
        userId: user.id,
        content: journalForm.content.trim(),
        emotionTag: journalForm.emotionTag,
      });

      setJournals((currentEntries) => [entry, ...currentEntries]);
      setJournalForm(defaultJournalState);
    } catch (journalError) {
      console.error("Failed to save journal entry.", journalError);
      setError(journalError.message || "Unable to save your journal entry.");
    } finally {
      setJournalSubmitting(false);
    }
  }

  return (
    <PageLayout
      bodyClass="index_ico whaleproof-app-body"
      title="Dashboard - WhaleProof"
      showFooter={false}
      templateScripts={false}
    >
      <section className="wp-dashboard-page">
        <div className="container">
          <div className="wp-dashboard-shell">
            <div className="wp-dashboard-hero">
              <div>
                <p className="wp-dashboard-hero__eyebrow">Protected learning hub</p>
                <h1>
                  Welcome {profile?.username || user?.email?.split("@")[0] || "Trader"}
                </h1>
                <p className="wp-dashboard-hero__copy">
                  Track your WhaleProof progress, complete each phase, and log
                  your mindset observations in a journal backed by Supabase.
                </p>
              </div>
              <div className="wp-stats-grid">
                <article className="wp-stat-card">
                  <span>Current level</span>
                  <strong>{profile?.current_level ?? 1}</strong>
                </article>
                <article className="wp-stat-card">
                  <span>Total score</span>
                  <strong>{profile?.total_score ?? 0}</strong>
                </article>
                <article className="wp-stat-card">
                  <span>Completion</span>
                  <strong>{Number.isFinite(completionPercent) ? completionPercent : 0}%</strong>
                </article>
              </div>
            </div>

            {error ? <div className="wp-alert wp-alert--error">{error}</div> : null}

            {loading ? (
              <div className="wp-panel">
                <div className="wp-empty-state">Loading your dashboard data...</div>
              </div>
            ) : (
              <>
                <PhaseProgressBoard
                  progressMap={progressMap}
                  phaseActionLoading={phaseActionLoading}
                  onCompletePhase={handleCompletePhase}
                />
                <PsychologyJournal
                  entries={journals}
                  formState={journalForm}
                  onChange={handleJournalChange}
                  onSubmit={handleJournalSubmit}
                  isSubmitting={journalSubmitting}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
