export const VERDICT_SIMULATION = {
  title: "Late breakout under pressure",
  maxRiskPercent: 2,
  correctDecisionId: "no-entry",
  correctMindsetId: "rules-first",
  marketCondition:
    "Price is pressing into a major resistance zone after three aggressive bullish candles. The clean pullback entry already happened earlier and current volume is fading as price stretches higher.",
  psychologySignal:
    "You missed the earlier move and your previous trade was a loss. The urge now is to force an entry so you do not feel left behind again.",
  checklist: [
    "Risk must stay at or below 2%.",
    "Trade only when structure is still valid.",
    "Do not act from FOMO or revenge.",
  ],
  decisionOptions: [
    {
      id: "no-entry",
      label: "No entry",
      description: "Wait for a fresh setup or let the move go.",
    },
    {
      id: "enter-now",
      label: "Enter now",
      description: "Buy the move immediately before it continues.",
    },
  ],
  mindsetOptions: [
    {
      id: "rules-first",
      label: "Rules first",
      description: "No trade is better than an emotional trade without confirmation.",
    },
    {
      id: "fomo",
      label: "FOMO",
      description: "I do not want to miss the breakout even if it is late.",
    },
    {
      id: "revenge",
      label: "Revenge",
      description: "I want to recover the previous loss right now.",
    },
  ],
};

export function evaluateFinalSimulation(simulation, state) {
  const riskPercent = Number(state.riskPercent);
  const hasRiskPercent = state.riskPercent !== "" && Number.isFinite(riskPercent) && riskPercent > 0;
  const hasDecision = Boolean(state.decision);
  const hasMindset = Boolean(state.mindset);
  const decisionCorrect = hasDecision && state.decision === simulation.correctDecisionId;
  const mindsetCorrect = hasMindset && state.mindset === simulation.correctMindsetId;
  const riskDiscipline = !hasRiskPercent || riskPercent <= simulation.maxRiskPercent;
  const requiresRiskForEntry = state.decision === "enter-now";
  const riskRequirementMet = requiresRiskForEntry ? hasRiskPercent : true;
  const passed =
    hasDecision &&
    hasMindset &&
    decisionCorrect &&
    mindsetCorrect &&
    riskDiscipline &&
    riskRequirementMet;

  const strengths = [];
  const weaknesses = [];

  if (decisionCorrect) {
    strengths.push("You rejected a late entry that did not meet structure rules.");
  } else if (hasDecision) {
    weaknesses.push("The decision chased price instead of respecting market structure.");
  } else {
    weaknesses.push("A final verdict requires a clear trade decision.");
  }

  if (mindsetCorrect) {
    strengths.push("Your mindset stayed tied to rules instead of emotion.");
  } else if (hasMindset) {
    weaknesses.push("The chosen mindset reflects FOMO or revenge instead of discipline.");
  } else {
    weaknesses.push("Select the mindset that best matches your decision process.");
  }

  if (riskRequirementMet && riskDiscipline) {
    strengths.push("Risk stays inside the 2% discipline limit.");
  } else if (!riskRequirementMet) {
    weaknesses.push("If you choose to enter, you still need a defined risk percentage.");
  } else {
    weaknesses.push("Risk above 2% breaks the core rule from Phase 1.");
  }

  let feedbackTone = "info";
  let feedbackMessage =
    "Choose your action, confirm the mindset behind it, and add risk only if you decide to enter.";

  if (hasDecision && hasMindset) {
    feedbackTone = passed ? "success" : "warning";
    feedbackMessage = passed
      ? "Pass. The verdict respects structure, psychology, and risk discipline."
      : "Fail. A valid final verdict must protect risk, respect structure, and stay free from emotional pressure.";
  }

  return {
    riskPercent,
    hasRiskPercent,
    hasDecision,
    hasMindset,
    decisionCorrect,
    mindsetCorrect,
    riskDiscipline,
    passed,
    strengths,
    weaknesses,
    feedbackTone,
    feedbackMessage,
  };
}

function FinalSimulationChart() {
  return (
    <div className="wp-chart-preview wp-chart-preview--simulation" aria-hidden="true">
      <svg viewBox="0 0 340 190" role="presentation">
        <defs>
          <linearGradient id="wpVerdictGlow" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ff77e7" />
            <stop offset="100%" stopColor="#6ee7ff" />
          </linearGradient>
        </defs>
        <path
          d="M16 24H324M16 62H324M16 100H324M16 138H324M16 176H324M16 24V176M76 24V176M136 24V176M196 24V176M256 24V176M316 24V176"
          className="wp-chart-preview__grid"
        />
        <polyline
          fill="none"
          points="20,150 46,144 72,138 98,128 124,120 150,112 176,98 202,84 228,68 254,56 280,60 306,66"
          stroke="url(#wpVerdictGlow)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="280" cy="60" r="10" fill="rgba(255, 119, 231, 0.18)" stroke="#ff77e7" />
        <circle cx="280" cy="60" r="4" fill="#ff77e7" />
      </svg>
    </div>
  );
}

export function FinalSimulation({ simulation, state, onChange }) {
  const assessment = evaluateFinalSimulation(simulation, state);

  return (
    <div className="wp-simulation-shell">
      <article className="wp-mission-card wp-simulation-card">
        <div className="wp-scenario-card__header">
          <span className="wp-mission-note__label">Final Scenario</span>
          <h3>{simulation.title}</h3>
        </div>

        <FinalSimulationChart />

        <div className="wp-simulation-card__content">
          <div>
            <span className="wp-answer-option__label">Market condition</span>
            <p>{simulation.marketCondition}</p>
          </div>
          <div>
            <span className="wp-answer-option__label">Psychology pressure</span>
            <p>{simulation.psychologySignal}</p>
          </div>
          <div>
            <span className="wp-answer-option__label">Cheat sheet</span>
            <ul className="wp-checklist">
              {simulation.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <article className="wp-mission-card wp-simulation-card">
        <div className="wp-scenario-card__header">
          <span className="wp-mission-note__label">Your Verdict</span>
          <h3>Make the decision.</h3>
        </div>

        <div className="wp-answer-grid wp-answer-grid--single">
          {simulation.decisionOptions.map((option) => (
            <button
              key={option.id}
              className={`wp-answer-option${state.decision === option.id ? " wp-answer-option--selected" : ""}`}
              type="button"
              onClick={() => onChange("decision", option.id)}
            >
              <span className="wp-answer-option__label">{option.label}</span>
              <span className="wp-answer-option__text">{option.description}</span>
            </button>
          ))}
        </div>

        <label className="wp-field">
          <span>Risk percentage (optional unless entering)</span>
          <input
            name="riskPercent"
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={state.riskPercent}
            onChange={(event) => onChange("riskPercent", event.target.value)}
            placeholder="2"
          />
        </label>

        <div className="wp-answer-grid wp-answer-grid--single">
          {simulation.mindsetOptions.map((option) => (
            <button
              key={option.id}
              className={`wp-answer-option${state.mindset === option.id ? " wp-answer-option--selected" : ""}`}
              type="button"
              onClick={() => onChange("mindset", option.id)}
            >
              <span className="wp-answer-option__label">{option.label}</span>
              <span className="wp-answer-option__text">{option.description}</span>
            </button>
          ))}
        </div>

        <div className={`wp-alert wp-alert--${assessment.feedbackTone}`} role="status">
          {assessment.feedbackMessage}
        </div>
      </article>
    </div>
  );
}
