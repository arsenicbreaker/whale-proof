export const RADAR_CHART_QUIZ = {
  question: "Which chart shows a valid market structure worth paying attention to?",
  correctAnswerId: "B",
  options: [
    {
      id: "A",
      label: "Chart A",
      title: "Reactive noise",
      chartPoints: "10,82 28,34 46,78 64,42 82,80 100,38 118,76 136,30 154,84 172,48",
      explanation: "This is noise. There is no clear structure or confirmation.",
    },
    {
      id: "B",
      label: "Chart B",
      title: "Confirmed trend continuation",
      chartPoints: "10,92 28,84 46,70 64,74 82,54 100,58 118,36 136,40 154,18 172,24",
      explanation: "Correct. This chart shows a clean structure with clear trend continuation.",
    },
    {
      id: "C",
      label: "Chart C",
      title: "Range-bound indecision",
      chartPoints: "10,62 28,58 46,60 64,52 82,57 100,50 118,56 136,51 154,55 172,49",
      explanation: "This is noise. Price is compressing without clear higher highs or lower lows.",
    },
  ],
};

export function evaluateChartQuiz(quiz, selectedOptionId) {
  const correctOption = quiz.options.find((option) => option.id === quiz.correctAnswerId);
  const selectedOption = quiz.options.find((option) => option.id === selectedOptionId);
  const hasSelection = Boolean(selectedOption);
  const isCorrect = hasSelection && selectedOptionId === quiz.correctAnswerId;

  let feedbackTone = "info";
  let feedbackMessage = "Select the chart that shows clean structure and confirmation.";

  if (hasSelection && selectedOption) {
    feedbackTone = isCorrect ? "success" : "warning";
    feedbackMessage = selectedOption.explanation;
  }

  return {
    hasSelection,
    isCorrect,
    correctOption,
    selectedOption,
    feedbackTone,
    feedbackMessage,
  };
}

export function ChartPreview({ option }) {
  return (
    <div className="wp-chart-preview" aria-hidden="true">
      <svg viewBox="0 0 182 102" role="presentation">
        <path
          d="M10 14H172M10 34H172M10 54H172M10 74H172M10 94H172M10 14V94M50 14V94M90 14V94M130 14V94M170 14V94"
          className="wp-chart-preview__grid"
        />
        <polyline
          fill="none"
          points={option.chartPoints}
          stroke="#ff77e7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ChartSelectionQuiz({ quiz, selectedOptionId, onSelectOption }) {
  return (
    <div className="wp-chart-quiz">
      <div className="wp-chart-quiz__header">
        <p className="wp-section-heading__eyebrow">Chart Selection Drill</p>
        <h3>{quiz.question}</h3>
      </div>

      <div className="wp-chart-quiz__options">
        {quiz.options.map((option) => {
          const hasSelection = Boolean(selectedOptionId);
          const isSelected = selectedOptionId === option.id;
          const isCorrect = quiz.correctAnswerId === option.id;
          const stateClassName = !hasSelection
            ? ""
            : isCorrect
              ? " wp-chart-option--correct"
              : isSelected
                ? " wp-chart-option--incorrect"
                : "";

          return (
            <button
              key={option.id}
              className={`wp-chart-option${isSelected ? " wp-chart-option--selected" : ""}${stateClassName}`}
              type="button"
              onClick={() => onSelectOption(option.id)}
            >
              <div className="wp-chart-option__topline">
                <span className="wp-chart-option__label">{option.label}</span>
                <span className="wp-chart-option__title">{option.title}</span>
              </div>
              <ChartPreview option={option} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
