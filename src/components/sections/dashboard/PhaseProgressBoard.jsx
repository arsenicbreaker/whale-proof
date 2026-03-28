import { LEARNING_PHASES } from "../../../constants/phases";

export function PhaseProgressBoard({
  progressMap,
  phaseActionLoading,
  onCompletePhase,
}) {
  return (
    <section className="wp-panel">
      <div className="wp-section-heading">
        <div>
          <p className="wp-section-heading__eyebrow">Learning phases</p>
          <h2>Progress tracker</h2>
        </div>
        <p className="wp-section-heading__copy">
          Each phase completion writes to <code>user_progress</code> and updates
          your profile metrics.
        </p>
      </div>

      <div className="wp-phase-grid">
        {LEARNING_PHASES.map((phase) => {
          const isCompleted = Boolean(progressMap[phase.name]?.is_completed);
          const isSubmitting = phaseActionLoading === phase.name;

          return (
            <article className="wp-phase-card" key={phase.id}>
              <div className="wp-phase-card__meta">
                <span className="wp-phase-card__badge">Phase {phase.id}</span>
                <span
                  className={
                    isCompleted
                      ? "wp-phase-card__status wp-phase-card__status--done"
                      : "wp-phase-card__status"
                  }
                >
                  {isCompleted ? "Completed" : "In progress"}
                </span>
              </div>
              <h3>{phase.name}</h3>
              <p className="wp-phase-card__focus">{phase.focus}</p>
              <p className="wp-phase-card__description">{phase.description}</p>
              <button
                className="wp-button"
                type="button"
                onClick={() => onCompletePhase(phase.name)}
                disabled={isCompleted || isSubmitting}
              >
                {isCompleted
                  ? "Completed"
                  : isSubmitting
                    ? "Saving..."
                    : "Mark phase complete"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
