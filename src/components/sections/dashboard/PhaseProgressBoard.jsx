export function PhaseProgressBoard({
  phaseStates,
  activePhaseId,
  onOpenPhase,
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
        {phaseStates.map((phaseState) => {
          const { phase } = phaseState;
          const isActive = phase.id === activePhaseId;
          return (
            <article
              className={`wp-phase-card${isActive ? " wp-phase-card--active" : ""}${
                phaseState.isLocked ? " wp-phase-card--locked" : ""
              }`}
              key={phase.id}
            >
              <div className="wp-phase-card__meta">
                <span className="wp-phase-card__badge">Phase {phase.id}</span>
                <span className={`wp-phase-card__status wp-phase-card__status--${phaseState.statusTone}`}>
                  {phaseState.statusLabel}
                </span>
              </div>
              <h3>{phase.name}</h3>
              <p className="wp-phase-card__focus">{phase.focus}</p>
              <p className="wp-phase-card__description">{phase.description}</p>
              <p className="wp-phase-card__helper">{phaseState.helperText}</p>
              <button
                className={phaseState.isLocked ? "wp-button--secondary" : "wp-button"}
                type="button"
                onClick={() => onOpenPhase(phase.id)}
                disabled={phaseState.isLocked}
              >
                {phaseState.actionLabel}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
