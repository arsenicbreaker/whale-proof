import { useEffect, useMemo, useState } from "react";
import { PageLayout } from "../../layout";
import { useAuth } from "../../../context/AuthContext";
import { LEARNING_PHASES } from "../../../constants/phases";
import { fetchJournals } from "../../../services/journalService";
import { fetchUserProgress, updatePhaseCompletion } from "../../../services/progressService";
import { PhaseProgressBoard } from "./PhaseProgressBoard";
import { PhaseMissionPanel } from "./PhaseMissionPanel";

const defaultRiskTrainingState = {
  capital: "",
  riskPercent: "",
  entryPrice: "",
  stopLoss: "",
};

const defaultRadarQuizState = {
  selectedOptionId: "",
  attempts: 0,
};

const defaultPsychologyQuizState = {
  answers: {},
};

const defaultFinalSimulationState = {
  decision: "",
  riskPercent: "",
  mindset: "",
};

export function DashboardPage() {
  const { user, profile, refreshProfile } = useAuth();
  const [progress, setProgress] = useState([]);
  const [journals, setJournals] = useState([]);
  const [riskTrainingState, setRiskTrainingState] = useState(defaultRiskTrainingState);
  const [radarQuizState, setRadarQuizState] = useState(defaultRadarQuizState);
  const [psychologyQuizState, setPsychologyQuizState] = useState(defaultPsychologyQuizState);
  const [finalSimulationState, setFinalSimulationState] = useState(defaultFinalSimulationState);
  const [selectedPhaseId, setSelectedPhaseId] = useState(null);
  const [activeMissionTab, setActiveMissionTab] = useState("briefing");
  const [loading, setLoading] = useState(true);
  const [phaseActionLoading, setPhaseActionLoading] = useState("");
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

  const phaseById = useMemo(
    () => new Map(LEARNING_PHASES.map((phase) => [phase.id, phase])),
    [],
  );

  const phaseStates = useMemo(
    () =>
      LEARNING_PHASES.map((phase) => {
        const isCompleted = Boolean(progressMap[phase.name]?.is_completed);
        const firstLockedPrerequisiteId = (phase.prerequisiteIds ?? []).find((prerequisiteId) => {
          const prerequisitePhase = phaseById.get(prerequisiteId);
          return prerequisitePhase
            ? !Boolean(progressMap[prerequisitePhase.name]?.is_completed)
            : false;
        });
        const firstLockedPrerequisite = firstLockedPrerequisiteId
          ? phaseById.get(firstLockedPrerequisiteId)
          : null;
        const isUnlocked = !firstLockedPrerequisite;
        const isImplemented = phase.id <= 4;

        let statusLabel = "Available";
        let statusTone = "available";
        let helperText = "Mission ready. Enter the workspace to begin training.";
        let actionLabel = "Open Mission";

        if (isCompleted) {
          statusLabel = "Completed";
          statusTone = "done";
          helperText = "Mission cleared. Review the materials or continue to the next phase.";
          actionLabel = "Review Mission";
        } else if (!isUnlocked && firstLockedPrerequisite) {
          statusLabel = "Locked";
          statusTone = "locked";
          helperText = `Complete Phase ${firstLockedPrerequisite.id}: ${firstLockedPrerequisite.name} to unlock this phase.`;
          actionLabel = "Locked";
        } else if (phase.id === 2) {
          helperText = "Mission ready. Filter noise from clean structure before acting.";
        } else if (phase.id === 3) {
          helperText = "Mission ready. Train against FOMO, revenge, and rule-breaking impulses.";
        } else if (phase.id === 4) {
          helperText = "Mission ready. Final simulation combines risk, structure, and psychology.";
        } else if (!isImplemented) {
          helperText = "Mission path unlocked. Interactive deployment is queued next.";
        }

        return {
          phase,
          isCompleted,
          isUnlocked,
          isLocked: !isUnlocked,
          isImplemented,
          statusLabel,
          statusTone,
          helperText,
          actionLabel,
        };
      }),
    [phaseById, progressMap],
  );

  const selectedPhaseState = phaseStates.find((phaseState) => phaseState.phase.id === selectedPhaseId);

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
      setActiveMissionTab("verification");
      await refreshProfile();
    } catch (updateError) {
      console.error("Failed to update phase progress.", updateError);
      setError(updateError.message || "Unable to update phase progress.");
    } finally {
      setPhaseActionLoading("");
    }
  }

  function handleOpenPhase(phaseId) {
    const phaseState = phaseStates.find((item) => item.phase.id === phaseId);

    if (!phaseState || phaseState.isLocked) {
      return;
    }

    setSelectedPhaseId(phaseId);
    setActiveMissionTab("briefing");
  }

  function handleClosePhase() {
    setSelectedPhaseId(null);
  }

  function handleRiskTrainingChange(event) {
    const { name, value } = event.target;
    setRiskTrainingState((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  }

  function handleSelectRadarOption(optionId) {
    setRadarQuizState((currentValue) => ({
      selectedOptionId: optionId,
      attempts: currentValue.attempts + 1,
    }));
  }

  function handleSelectPsychologyAnswer(questionId, optionId) {
    setPsychologyQuizState((currentValue) => ({
      answers: {
        ...currentValue.answers,
        [questionId]: optionId,
      },
    }));
  }

  function handleResetPsychologyQuiz() {
    setPsychologyQuizState(defaultPsychologyQuizState);
  }

  function handleFinalSimulationChange(name, value) {
    setFinalSimulationState((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  }

  function handleResetFinalSimulation() {
    setFinalSimulationState(defaultFinalSimulationState);
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
            {!loading && completedCount === LEARNING_PHASES.length ? (
              <div className="wp-alert wp-alert--success">
                All WhaleProof phases are complete. Your program record is fully synced.
              </div>
            ) : null}

            {loading ? (
              <div className="wp-panel">
                <div className="wp-empty-state">Loading your dashboard data...</div>
              </div>
            ) : (
              <>
                <PhaseProgressBoard
                  phaseStates={phaseStates}
                  activePhaseId={selectedPhaseId}
                  onOpenPhase={handleOpenPhase}
                />
                {selectedPhaseState ? (
                  <PhaseMissionPanel
                    phase={selectedPhaseState.phase}
                    phaseState={selectedPhaseState}
                    activeTab={activeMissionTab}
                    onChangeTab={setActiveMissionTab}
                    onClose={handleClosePhase}
                    trainingState={riskTrainingState}
                    onTrainingChange={handleRiskTrainingChange}
                    radarQuizState={radarQuizState}
                    onSelectRadarOption={handleSelectRadarOption}
                    psychologyQuizState={psychologyQuizState}
                    onSelectPsychologyAnswer={handleSelectPsychologyAnswer}
                    onResetPsychologyQuiz={handleResetPsychologyQuiz}
                    finalSimulationState={finalSimulationState}
                    onFinalSimulationChange={handleFinalSimulationChange}
                    onResetFinalSimulation={handleResetFinalSimulation}
                    journalCount={journals.length}
                    onCompletePhase={() => handleCompletePhase(selectedPhaseState.phase.name)}
                    isCompletionPending={phaseActionLoading === selectedPhaseState.phase.name}
                  />
                ) : null}
              </>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
