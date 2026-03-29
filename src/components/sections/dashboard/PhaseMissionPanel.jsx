import { Link } from "react-router-dom";
import {
  ChartPreview,
  ChartSelectionQuiz,
  RADAR_CHART_QUIZ,
  evaluateChartQuiz,
} from "./ChartSelectionQuiz";
import {
  FinalSimulation,
  VERDICT_SIMULATION,
  evaluateFinalSimulation,
} from "./FinalSimulation";
import {
  PsychologyQuiz,
  SHIELD_PSYCHOLOGY_QUIZ,
  evaluatePsychologyQuiz,
} from "./PsychologyQuiz";
import { ResultSummary } from "./ResultSummary";

const MISSION_TABS = [
  { id: "briefing", label: "Briefing" },
  { id: "training", label: "Training" },
  { id: "verification", label: "Verification" },
];

function formatCurrency(value) {
  if (!Number.isFinite(value)) {
    return "$0.00";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function evaluateRiskTraining(trainingState) {
  const capital = Number(trainingState.capital);
  const riskPercent = Number(trainingState.riskPercent);
  const entryPrice = Number(trainingState.entryPrice);
  const stopLoss = Number(trainingState.stopLoss);

  const hasCapital = Number.isFinite(capital) && capital > 0;
  const hasRiskPercent = Number.isFinite(riskPercent) && riskPercent > 0;
  const riskAmount = hasCapital && hasRiskPercent ? (capital * riskPercent) / 100 : 0;
  const passed = hasCapital && hasRiskPercent && riskPercent <= 2;
  const hasEntryAndStop =
    Number.isFinite(entryPrice) &&
    entryPrice > 0 &&
    Number.isFinite(stopLoss) &&
    stopLoss > 0 &&
    entryPrice !== stopLoss;
  const perUnitRisk = hasEntryAndStop ? Math.abs(entryPrice - stopLoss) : 0;
  const positionSize = hasEntryAndStop && riskAmount > 0 ? riskAmount / perUnitRisk : 0;

  let feedbackTone = "info";
  let feedbackMessage =
    "Enter your capital and the percentage you want to risk to run the discipline check.";

  if (hasRiskPercent && riskPercent > 2) {
    feedbackTone = "warning";
    feedbackMessage =
      "Based on the Mission Briefing, this is too risky. Lower it to 2% or less.";
  } else if (passed) {
    feedbackTone = "success";
    feedbackMessage = "Good. Your risk is within the discipline threshold.";
  }

  return {
    capital,
    riskPercent,
    riskAmount,
    passed,
    hasCapital,
    hasRiskPercent,
    feedbackTone,
    feedbackMessage,
    hasEntryAndStop,
    perUnitRisk,
    positionSize,
  };
}

function MissionTabs({ activeTab, onChangeTab }) {
  return (
    <div className="wp-mission-tabs" role="tablist" aria-label="Mission sections">
      {MISSION_TABS.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            className={`wp-mission-tab${isActive ? " wp-mission-tab--active" : ""}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChangeTab(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function ArmorBriefingTab() {
  return (
    <div className="wp-mission-layout">
      <article className="wp-mission-card">
        <p className="wp-section-heading__eyebrow">Mission Briefing</p>
        <h3>Protect capital before chasing upside.</h3>
        <ul className="wp-mission-list">
          <li>Never risk more than 2% of total capital on a single trade.</li>
          <li>Small risk keeps one mistake from becoming emotional or financial damage.</li>
          <li>Survival and consistency matter more than one oversized win.</li>
          <li>The goal is disciplined execution, not fast profit.</li>
        </ul>
      </article>

      <aside className="wp-mission-note">
        <span className="wp-mission-note__label">Armor Protocol</span>
        <strong>One bad position should never threaten the account.</strong>
        <p>
          If your sizing forces panic, the setup is already wrong. Reduce exposure and
          preserve decision quality.
        </p>
      </aside>
    </div>
  );
}

function ArmorTrainingTab({ trainingState, assessment, onTrainingChange }) {
  return (
    <div className="wp-mission-training">
      <div className="wp-mission-training__workspace">
        <form className="wp-form" onSubmit={(event) => event.preventDefault()}>
          <div className="wp-form__row">
            <label className="wp-field">
              <span>Total Capital</span>
              <input
                name="capital"
                type="number"
                min="0"
                step="0.01"
                value={trainingState.capital}
                onChange={onTrainingChange}
                placeholder="10000"
              />
            </label>

            <label className="wp-field">
              <span>Risk Percentage</span>
              <input
                name="riskPercent"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={trainingState.riskPercent}
                onChange={onTrainingChange}
                placeholder="2"
              />
            </label>
          </div>

          <div className="wp-form__row">
            <label className="wp-field">
              <span>Entry Price</span>
              <input
                name="entryPrice"
                type="number"
                min="0"
                step="0.0001"
                value={trainingState.entryPrice}
                onChange={onTrainingChange}
                placeholder="Optional"
              />
            </label>

            <label className="wp-field">
              <span>Stop Loss</span>
              <input
                name="stopLoss"
                type="number"
                min="0"
                step="0.0001"
                value={trainingState.stopLoss}
                onChange={onTrainingChange}
                placeholder="Optional"
              />
            </label>
          </div>
        </form>

        <div
          className={`wp-alert wp-alert--${assessment.feedbackTone} wp-mission-feedback`}
          role="status"
        >
          {assessment.feedbackMessage}
        </div>
      </div>

      <div className="wp-mission-metrics">
        <article className="wp-mission-metric">
          <span>Risk amount</span>
          <strong>{formatCurrency(assessment.riskAmount)}</strong>
          <p>Maximum capital exposed if this trade fails.</p>
        </article>

        <article className="wp-mission-metric">
          <span>Discipline status</span>
          <strong>{assessment.passed ? "Within mission rule" : "Needs adjustment"}</strong>
          <p>Stay at 2% or less to pass the Armor threshold.</p>
        </article>

        <article className="wp-mission-metric">
          <span>Per-unit risk</span>
          <strong>
            {assessment.hasEntryAndStop ? formatCurrency(assessment.perUnitRisk) : "Add prices"}
          </strong>
          <p>Optional sizing aid from entry to stop-loss distance.</p>
        </article>

        <article className="wp-mission-metric">
          <span>Max position size</span>
          <strong>
            {assessment.hasEntryAndStop && Number.isFinite(assessment.positionSize)
              ? `${assessment.positionSize.toFixed(2)} units`
              : "Await prices"}
          </strong>
          <p>Calculated only when entry and stop are both defined.</p>
        </article>
      </div>
    </div>
  );
}

function ArmorVerificationTab({
  assessment,
  isCompleted,
  isCompletionPending,
  onCompletePhase,
  onOpenTraining,
}) {
  const statusLabel = isCompleted
    ? "Completed"
    : assessment.passed
      ? "Passed"
      : "Not Passed";

  return (
    <div className="wp-mission-verification">
      <div className="wp-mission-verification__summary">
        <div>
          <p className="wp-section-heading__eyebrow">Mission Review</p>
          <h3>{statusLabel}</h3>
          <p className="wp-auth-card__description">
            {isCompleted
              ? "Phase 1 has been recorded in your progress tracker and Phase 2 is now unlocked."
              : assessment.passed
                ? "Your training inputs satisfy the Armor rule set. You can now complete the phase."
                : "The current training inputs do not satisfy the briefing rules yet."}
          </p>
        </div>

        <div className="wp-mission-verification__badge">
          <span>Status</span>
          <strong>{statusLabel}</strong>
        </div>
      </div>

      <div className="wp-mission-summary">
        <article className="wp-mission-summary__item">
          <span>Total capital</span>
          <strong>{assessment.hasCapital ? formatCurrency(assessment.capital) : "Missing"}</strong>
        </article>
        <article className="wp-mission-summary__item">
          <span>Risk percentage</span>
          <strong>
            {assessment.hasRiskPercent ? `${assessment.riskPercent.toFixed(2)}%` : "Missing"}
          </strong>
        </article>
        <article className="wp-mission-summary__item">
          <span>Risk amount</span>
          <strong>
            {assessment.hasCapital && assessment.hasRiskPercent
              ? formatCurrency(assessment.riskAmount)
              : "Missing"}
          </strong>
        </article>
      </div>

      <div
        className={`wp-alert ${
          isCompleted || assessment.passed ? "wp-alert--success" : "wp-alert--warning"
        }`}
      >
        {isCompleted
          ? "Phase 1 completion is already synced. Review the briefing any time before moving on."
          : assessment.passed
            ? "Verification passed. Complete the phase to write this progress state to your tracker."
            : "To pass, enter capital, use a positive risk percentage, and keep risk at 2% or less."}
      </div>

      <div className="wp-mission-verification__actions">
        {!assessment.passed && !isCompleted ? (
          <button className="wp-button--secondary" type="button" onClick={onOpenTraining}>
            Return to Training
          </button>
        ) : null}

        <button
          className="wp-button"
          type="button"
          onClick={onCompletePhase}
          disabled={!assessment.passed || isCompleted || isCompletionPending}
        >
          {isCompleted
            ? "Phase Completed"
            : isCompletionPending
              ? "Saving progress..."
              : "Complete Phase 1"}
        </button>
      </div>
    </div>
  );
}

function RadarBriefingTab() {
  const structureOption = RADAR_CHART_QUIZ.options.find((option) => option.id === "B");

  return (
    <div className="wp-mission-layout wp-mission-layout--visual">
      <article className="wp-mission-card">
        <p className="wp-section-heading__eyebrow">Mission Briefing</p>
        <h3>Read structure before reacting to movement.</h3>
        <ul className="wp-mission-list">
          <li>Not every price movement is a valid signal.</li>
          <li>Noise is random movement without structure.</li>
          <li>Valid structure shows clear higher highs or lower lows.</li>
          <li>Wait for confirmation before acting.</li>
        </ul>
      </article>

      <div className="wp-mission-visual">
        <div className="wp-mission-visual__chart">
          <ChartPreview option={structureOption} />
        </div>
        <aside className="wp-mission-note">
          <span className="wp-mission-note__label">Radar Rule</span>
          <strong>Structure first, execution second.</strong>
          <p>
            A clean trend gives you context. Random spikes do not. Wait for the chart to prove its
            intent before you commit.
          </p>
        </aside>
      </div>
    </div>
  );
}

function RadarTrainingTab({ assessment, selectedOptionId, onSelectOption }) {
  return (
    <div className="wp-mission-training">
      <ChartSelectionQuiz
        quiz={RADAR_CHART_QUIZ}
        selectedOptionId={selectedOptionId}
        onSelectOption={onSelectOption}
      />

      <div className={`wp-alert wp-alert--${assessment.feedbackTone}`} role="status">
        {assessment.feedbackMessage}
      </div>
    </div>
  );
}

function RadarVerificationTab({
  assessment,
  isCompleted,
  isCompletionPending,
  onCompletePhase,
  onOpenTraining,
}) {
  const statusLabel = isCompleted
    ? "Completed"
    : assessment.isCorrect
      ? "Passed"
      : "Not Passed";

  return (
    <div className="wp-mission-verification">
      <div className="wp-mission-verification__summary">
        <div>
          <p className="wp-section-heading__eyebrow">Mission Review</p>
          <h3>{statusLabel}</h3>
          <p className="wp-auth-card__description">
            {isCompleted
              ? "Phase 2 has been recorded in your progress tracker and Phase 3 is now unlocked."
              : assessment.isCorrect
                ? "You identified the correct structure. The Radar mission can now be completed."
                : "The selected chart did not meet the structure requirement. Retry the training drill."}
          </p>
        </div>

        <div className="wp-mission-verification__badge">
          <span>Status</span>
          <strong>{statusLabel}</strong>
        </div>
      </div>

      <div className="wp-mission-summary">
        <article className="wp-mission-summary__item">
          <span>Attempted chart</span>
          <strong>{assessment.selectedOption ? assessment.selectedOption.label : "No selection"}</strong>
        </article>
        <article className="wp-mission-summary__item">
          <span>Correct chart</span>
          <strong>{assessment.correctOption.label}</strong>
        </article>
        <article className="wp-mission-summary__item">
          <span>Structure read</span>
          <strong>{assessment.isCorrect ? "Confirmed" : "Needs retry"}</strong>
        </article>
      </div>

      <div
        className={`wp-alert ${
          isCompleted || assessment.isCorrect ? "wp-alert--success" : "wp-alert--warning"
        }`}
      >
        {isCompleted
          ? "Phase 2 completion is already synced. The next mission path is now open."
          : assessment.isCorrect
            ? "Correct answer confirmed. Complete the phase to persist your result."
            : "Select the chart with clear trend continuation and confirmation before completing the mission."}
      </div>

      <div className="wp-mission-verification__actions">
        {(!assessment.hasSelection || !assessment.isCorrect) && !isCompleted ? (
          <button className="wp-button--secondary" type="button" onClick={onOpenTraining}>
            Retry Training
          </button>
        ) : null}

        <button
          className="wp-button"
          type="button"
          onClick={onCompletePhase}
          disabled={!assessment.isCorrect || isCompleted || isCompletionPending}
        >
          {isCompleted
            ? "Phase Completed"
            : isCompletionPending
              ? "Saving progress..."
              : "Complete Phase 2"}
        </button>
      </div>
    </div>
  );
}

function ShieldBriefingTab() {
  return (
    <div className="wp-mission-layout">
      <article className="wp-mission-card">
        <p className="wp-section-heading__eyebrow">Mission Briefing</p>
        <h3>Emotional control protects good analysis.</h3>
        <ul className="wp-mission-list">
          <li>FOMO leads to bad entries.</li>
          <li>Revenge trading comes from emotional reactions.</li>
          <li>Discipline is more important than opportunity.</li>
          <li>Follow rules, not feelings.</li>
        </ul>
      </article>

      <aside className="wp-mission-note wp-mission-note--warning">
        <span className="wp-mission-note__label">Psychology Warning</span>
        <strong>Emotion can break a valid plan faster than volatility can.</strong>
        <p>
          Missing one trade is harmless. Chasing, forcing, or trying to win back losses is what
          usually causes the real damage.
        </p>
      </aside>
    </div>
  );
}

function ShieldTrainingTab({ answersByQuestionId, assessment, onSelectAnswer }) {
  const feedbackTone =
    assessment.answeredCount === assessment.totalQuestions
      ? assessment.passed
        ? "success"
        : "warning"
      : "info";
  const feedbackMessage =
    assessment.answeredCount === assessment.totalQuestions
      ? `Current score: ${assessment.correctCount}/${assessment.totalQuestions}. You need ${assessment.minimumCorrectAnswers} correct to pass.`
      : `Answer all ${assessment.totalQuestions} scenarios. Immediate feedback explains why each choice is right or wrong.`;

  return (
    <div className="wp-mission-training">
      <PsychologyQuiz
        quiz={SHIELD_PSYCHOLOGY_QUIZ}
        answersByQuestionId={answersByQuestionId}
        onSelectAnswer={onSelectAnswer}
      />

      <div className={`wp-alert wp-alert--${feedbackTone}`} role="status">
        {feedbackMessage}
      </div>
    </div>
  );
}

function ShieldVerificationTab({
  assessment,
  journalCount,
  isCompleted,
  isCompletionPending,
  onCompletePhase,
  onRetry,
}) {
  const hasJournalEntry = journalCount > 0;
  const canComplete = assessment.passed && hasJournalEntry;
  const statusLabel = isCompleted ? "Completed" : canComplete ? "Passed" : "Not Passed";
  const strengths = assessment.results
    .filter((result) => result.isCorrect)
    .map((result) => result.question.lesson);
  const weaknesses = assessment.results
    .filter((result) => !result.isCorrect)
    .map((result) =>
      result.hasAnswer
        ? `Review ${result.question.title.toLowerCase()}: ${result.question.lesson}`
        : `Answer ${result.question.title.toLowerCase()} before verification can pass.`,
    );

  return (
    <div className="wp-mission-verification">
      <ResultSummary
        eyebrow="Mission Review"
        title={statusLabel}
        description={
          isCompleted
            ? "Phase 3 has been recorded in your progress tracker and Phase 4 is now unlocked."
            : canComplete
              ? "Psychology verification passed. You can now complete the phase."
              : "The Shield requires at least two correct decisions plus one saved Psychology Journal entry."
        }
        statusLabel={statusLabel}
        summaryItems={[
          {
            label: "Score",
            value: `${assessment.correctCount}/${assessment.totalQuestions}`,
          },
          {
            label: "Answered",
            value: `${assessment.answeredCount}/${assessment.totalQuestions}`,
          },
          {
            label: "Pass threshold",
            value: `${assessment.minimumCorrectAnswers}+ correct`,
          },
          {
            label: "Journal entries",
            value: `${journalCount}`,
          },
        ]}
        strengths={strengths}
        weaknesses={
          hasJournalEntry
            ? weaknesses
            : [...weaknesses, "Complete at least one Psychology Journal entry to finish this phase."]
        }
      />

      <div
        className={`wp-alert ${
          isCompleted || canComplete ? "wp-alert--success" : "wp-alert--warning"
        }`}
      >
        {isCompleted
          ? "Phase 3 completion is already synced. The final verdict is now available."
          : !hasJournalEntry
            ? "Complete at least one Psychology Journal entry to finish this phase."
            : canComplete
              ? "Verification passed. Complete the phase to persist your psychology result."
              : "If verification fails, retry the scenarios and keep choosing the rule-based response over the emotional one."}
      </div>

      <div className="wp-mission-verification__actions">
        {!assessment.passed && !isCompleted ? (
          <button className="wp-button--secondary" type="button" onClick={onRetry}>
            Retry Training
          </button>
        ) : null}
        {!hasJournalEntry && !isCompleted ? (
          <Link className="wp-button--secondary" to="/journal">
            Open Journal
          </Link>
        ) : null}

        <button
          className="wp-button"
          type="button"
          onClick={onCompletePhase}
          disabled={!canComplete || isCompleted || isCompletionPending}
        >
          {isCompleted
            ? "Phase Completed"
            : isCompletionPending
              ? "Saving progress..."
              : "Complete Phase 3"}
        </button>
      </div>
    </div>
  );
}

function VerdictBriefingTab() {
  return (
    <div className="wp-mission-layout">
      <article className="wp-mission-card">
        <p className="wp-section-heading__eyebrow">Cheat Sheet</p>
        <h3>Keep the final decision simple.</h3>
        <ul className="wp-checklist">
          <li>Risk 2%.</li>
          <li>Trade only valid structure.</li>
          <li>Avoid emotional decisions.</li>
        </ul>
      </article>

      <aside className="wp-mission-note">
        <span className="wp-mission-note__label">Final Filter</span>
        <strong>Good judgment rejects bad trades without hesitation.</strong>
        <p>
          Passing this phase means the decision respects the same rules even when pressure is high.
        </p>
      </aside>
    </div>
  );
}

function VerdictTrainingTab({ simulationState, onSimulationChange }) {
  return (
    <FinalSimulation
      simulation={VERDICT_SIMULATION}
      state={simulationState}
      onChange={onSimulationChange}
    />
  );
}

function VerdictVerificationTab({
  simulationState,
  assessment,
  isCompleted,
  isCompletionPending,
  onCompletePhase,
  onRetry,
}) {
  const statusLabel = isCompleted ? "Completed" : assessment.passed ? "PASS" : "FAIL";
  const riskValue = assessment.hasRiskPercent
    ? `${assessment.riskPercent.toFixed(1)}%`
    : simulationState.decision === "no-entry"
      ? "No trade"
      : "Not set";

  return (
    <div className="wp-mission-verification">
      <ResultSummary
        eyebrow="Final Evaluation"
        title={statusLabel}
        description={
          isCompleted
            ? "Phase 4 has been recorded and the full WhaleProof program is now completed."
            : assessment.passed
              ? "Final simulation passed. Completing this phase will mark the entire program as completed."
              : "Final simulation failed. Review the scenario and submit a rule-based verdict."
        }
        statusLabel={statusLabel}
        summaryItems={[
          {
            label: "Decision",
            value: simulationState.decision === "no-entry" ? "No entry" : simulationState.decision === "enter-now" ? "Enter now" : "No choice",
          },
          {
            label: "Risk",
            value: riskValue,
          },
          {
            label: "Mindset",
            value:
              simulationState.mindset === "rules-first"
                ? "Rules first"
                : simulationState.mindset === "fomo"
                  ? "FOMO"
                  : simulationState.mindset === "revenge"
                    ? "Revenge"
                    : "Not selected",
          },
        ]}
        strengths={assessment.strengths}
        weaknesses={assessment.weaknesses}
      />

      <div
        className={`wp-alert ${
          isCompleted || assessment.passed ? "wp-alert--success" : "wp-alert--warning"
        }`}
      >
        {isCompleted
          ? "All phases are now synced. WhaleProof program completion is recorded on your profile."
          : assessment.passed
            ? "Final verdict confirmed. Complete the phase to persist full-program completion."
            : "A pass requires the correct market decision, disciplined risk, and a mindset free from FOMO or revenge."}
      </div>

      <div className="wp-mission-verification__actions">
        {!assessment.passed && !isCompleted ? (
          <button className="wp-button--secondary" type="button" onClick={onRetry}>
            Retry Simulation
          </button>
        ) : null}

        <button
          className="wp-button"
          type="button"
          onClick={onCompletePhase}
          disabled={!assessment.passed || isCompleted || isCompletionPending}
        >
          {isCompleted
            ? "Program Completed"
            : isCompletionPending
              ? "Saving progress..."
              : "Complete Phase 4"}
        </button>
      </div>
    </div>
  );
}

function UpcomingPhasePanel({ phase }) {
  return (
    <div className="wp-mission-placeholder">
      <div>
        <p className="wp-section-heading__eyebrow">Mission Queue</p>
        <h3>{phase.name} is unlocked.</h3>
        <p className="wp-auth-card__description">
          This phase is available in the progression chain, but its interactive mission package has
          not been deployed yet. The same tab, training, and completion pattern is ready to accept
          it.
        </p>
      </div>

      <div className="wp-alert">
        This dashboard uses the same tab, training, and completion architecture for every mission
        package that gets added next.
      </div>
    </div>
  );
}

export function PhaseMissionPanel({
  phase,
  phaseState,
  activeTab,
  onChangeTab,
  onClose,
  trainingState,
  onTrainingChange,
  radarQuizState,
  onSelectRadarOption,
  psychologyQuizState,
  onSelectPsychologyAnswer,
  onResetPsychologyQuiz,
  finalSimulationState,
  onFinalSimulationChange,
  onResetFinalSimulation,
  journalCount,
  onCompletePhase,
  isCompletionPending,
}) {
  const armorAssessment = evaluateRiskTraining(trainingState);
  const radarAssessment = evaluateChartQuiz(
    RADAR_CHART_QUIZ,
    radarQuizState.selectedOptionId,
  );
  const psychologyAssessment = evaluatePsychologyQuiz(
    SHIELD_PSYCHOLOGY_QUIZ,
    psychologyQuizState.answers,
  );
  const finalSimulationAssessment = evaluateFinalSimulation(
    VERDICT_SIMULATION,
    finalSimulationState,
  );

  return (
    <section className="wp-panel wp-mission-panel">
      <div className="wp-section-heading wp-mission-panel__heading">
        <div>
          <p className="wp-section-heading__eyebrow">Phase {phase.id}</p>
          <h2>
            {phase.name}: {phase.focus}
          </h2>
        </div>
        <div className="wp-mission-panel__actions">
          <span className={`wp-mission-pill wp-mission-pill--${phaseState.statusTone}`}>
            {phaseState.statusLabel}
          </span>
          <button className="wp-button--secondary" type="button" onClick={onClose}>
            Close Mission
          </button>
        </div>
      </div>

      <div className="wp-mission-panel__hero">
        <div>
          <p className="wp-mission-panel__lead">{phase.description}</p>
          <p className="wp-mission-panel__copy">{phaseState.helperText}</p>
        </div>
        <div className="wp-mission-panel__status">
          <span>Phase status</span>
          <strong>{phaseState.statusLabel}</strong>
          <p>
            {phaseState.isCompleted
              ? "Progress synced to your profile."
              : "Use the mission tabs to clear this phase."}
          </p>
        </div>
      </div>

      {phaseState.isImplemented ? (
        <MissionTabs activeTab={activeTab} onChangeTab={onChangeTab} />
      ) : null}

      {phase.id === 1 && activeTab === "briefing" ? <ArmorBriefingTab /> : null}
      {phase.id === 1 && activeTab === "training" ? (
        <ArmorTrainingTab
          trainingState={trainingState}
          assessment={armorAssessment}
          onTrainingChange={onTrainingChange}
        />
      ) : null}
      {phase.id === 1 && activeTab === "verification" ? (
        <ArmorVerificationTab
          assessment={armorAssessment}
          isCompleted={phaseState.isCompleted}
          isCompletionPending={isCompletionPending}
          onCompletePhase={onCompletePhase}
          onOpenTraining={() => onChangeTab("training")}
        />
      ) : null}

      {phase.id === 2 && activeTab === "briefing" ? <RadarBriefingTab /> : null}
      {phase.id === 2 && activeTab === "training" ? (
        <RadarTrainingTab
          assessment={radarAssessment}
          selectedOptionId={radarQuizState.selectedOptionId}
          onSelectOption={onSelectRadarOption}
        />
      ) : null}
      {phase.id === 2 && activeTab === "verification" ? (
        <RadarVerificationTab
          assessment={radarAssessment}
          isCompleted={phaseState.isCompleted}
          isCompletionPending={isCompletionPending}
          onCompletePhase={onCompletePhase}
          onOpenTraining={() => onChangeTab("training")}
        />
      ) : null}

      {phase.id === 3 && activeTab === "briefing" ? <ShieldBriefingTab /> : null}
      {phase.id === 3 && activeTab === "training" ? (
        <ShieldTrainingTab
          answersByQuestionId={psychologyQuizState.answers}
          assessment={psychologyAssessment}
          onSelectAnswer={onSelectPsychologyAnswer}
        />
      ) : null}
      {phase.id === 3 && activeTab === "verification" ? (
        <ShieldVerificationTab
          assessment={psychologyAssessment}
          journalCount={journalCount}
          isCompleted={phaseState.isCompleted}
          isCompletionPending={isCompletionPending}
          onCompletePhase={onCompletePhase}
          onRetry={() => {
            onResetPsychologyQuiz();
            onChangeTab("training");
          }}
        />
      ) : null}

      {phase.id === 4 && activeTab === "briefing" ? <VerdictBriefingTab /> : null}
      {phase.id === 4 && activeTab === "training" ? (
        <VerdictTrainingTab
          simulationState={finalSimulationState}
          onSimulationChange={onFinalSimulationChange}
        />
      ) : null}
      {phase.id === 4 && activeTab === "verification" ? (
        <VerdictVerificationTab
          simulationState={finalSimulationState}
          assessment={finalSimulationAssessment}
          isCompleted={phaseState.isCompleted}
          isCompletionPending={isCompletionPending}
          onCompletePhase={onCompletePhase}
          onRetry={() => {
            onResetFinalSimulation();
            onChangeTab("training");
          }}
        />
      ) : null}

      {!phaseState.isImplemented ? <UpcomingPhasePanel phase={phase} /> : null}
    </section>
  );
}
