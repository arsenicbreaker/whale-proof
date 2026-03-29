export const SHIELD_PSYCHOLOGY_QUIZ = {
  minimumCorrectAnswers: 2,
  questions: [
    {
      id: "fomo-breakout",
      title: "FOMO at resistance",
      scenario:
        "Price has already moved hard into a major resistance zone. You missed the original entry and traders in your group are shouting that the breakout is starting now.",
      prompt: "What is the most disciplined response?",
      lesson: "Wait for a valid structure instead of chasing a move out of fear of missing out.",
      correctOptionId: "B",
      options: [
        {
          id: "A",
          label: "A",
          text: "Enter immediately before the candle closes so you do not miss the move.",
          feedback:
            "Incorrect. This is FOMO. Entering late without confirmation hands control to emotion instead of process.",
        },
        {
          id: "B",
          label: "B",
          text: "Do nothing and wait for your setup rules to confirm a fresh entry.",
          feedback:
            "Correct. Discipline means accepting missed trades and waiting for structure that still fits the plan.",
        },
        {
          id: "C",
          label: "C",
          text: "Increase position size because momentum looks strong enough to compensate for the late entry.",
          feedback:
            "Incorrect. Increasing size on a late entry compounds the original mistake and raises emotional pressure.",
        },
        {
          id: "D",
          label: "D",
          text: "Enter with a very tight stop even though the chart has not reset.",
          feedback:
            "Incorrect. A random tight stop does not fix a poor entry. It usually creates avoidable losses and frustration.",
        },
      ],
    },
    {
      id: "revenge-loss",
      title: "Revenge after a stop-out",
      scenario:
        "Your last trade hit stop-loss. Minutes later, price starts moving again and you feel the urge to win the money back immediately.",
      prompt: "What should you do next?",
      lesson: "After a loss, pause and reset before taking another trade.",
      correctOptionId: "C",
      options: [
        {
          id: "A",
          label: "A",
          text: "Re-enter quickly with a larger size so one trade can recover the loss.",
          feedback:
            "Incorrect. This is classic revenge trading. Bigger size under stress usually creates larger damage.",
        },
        {
          id: "B",
          label: "B",
          text: "Flip direction immediately because the market owes you a reversal setup.",
          feedback:
            "Incorrect. Emotional urgency is not analysis. Direction changes need structure, not frustration.",
        },
        {
          id: "C",
          label: "C",
          text: "Step back, review whether a new valid setup exists, and only trade again if the rules are met.",
          feedback:
            "Correct. A reset breaks the revenge loop and brings the next decision back under your plan.",
        },
        {
          id: "D",
          label: "D",
          text: "Keep trading smaller random setups until one of them works.",
          feedback:
            "Incorrect. Random trades are still emotional trades. Lower size does not turn impulse into discipline.",
        },
      ],
    },
    {
      id: "rule-vs-feeling",
      title: "Rules versus confidence",
      scenario:
        "You have a strong feeling that the market will continue higher, but your checklist is missing confirmation and volume is fading.",
      prompt: "Which choice shows trading maturity?",
      lesson: "Follow rules, not feelings, even when confidence feels high.",
      correctOptionId: "A",
      options: [
        {
          id: "A",
          label: "A",
          text: "Skip the trade because confidence does not replace confirmation.",
          feedback:
            "Correct. Strong feelings can still be wrong. Rules protect you from acting on conviction alone.",
        },
        {
          id: "B",
          label: "B",
          text: "Take the trade because experience matters more than checklists.",
          feedback:
            "Incorrect. Experience helps with context, but breaking process invites biased decisions.",
        },
        {
          id: "C",
          label: "C",
          text: "Take half size so you can follow the feeling without fully committing.",
          feedback:
            "Incorrect. Reducing size does not fix a setup that still fails your criteria.",
        },
        {
          id: "D",
          label: "D",
          text: "Enter now and decide on the stop after the trade starts working.",
          feedback:
            "Incorrect. Undefined risk is a discipline failure before the trade even begins.",
        },
      ],
    },
  ],
};

export function evaluatePsychologyQuiz(quiz, answersByQuestionId) {
  const results = quiz.questions.map((question) => {
    const selectedOptionId = answersByQuestionId?.[question.id] ?? "";
    const selectedOption = question.options.find((option) => option.id === selectedOptionId) ?? null;
    const correctOption = question.options.find((option) => option.id === question.correctOptionId) ?? null;
    const hasAnswer = Boolean(selectedOption);
    const isCorrect = hasAnswer && selectedOptionId === question.correctOptionId;

    return {
      question,
      selectedOption,
      correctOption,
      hasAnswer,
      isCorrect,
      feedbackTone: !hasAnswer ? "info" : isCorrect ? "success" : "warning",
      feedbackMessage: !hasAnswer
        ? "Choose the response that protects process over emotion."
        : selectedOption.feedback,
    };
  });

  const answeredCount = results.filter((result) => result.hasAnswer).length;
  const correctCount = results.filter((result) => result.isCorrect).length;
  const passed =
    answeredCount === quiz.questions.length && correctCount >= quiz.minimumCorrectAnswers;

  return {
    results,
    answeredCount,
    correctCount,
    totalQuestions: quiz.questions.length,
    minimumCorrectAnswers: quiz.minimumCorrectAnswers,
    passed,
  };
}

export function PsychologyQuiz({ quiz, answersByQuestionId, onSelectAnswer }) {
  const assessment = evaluatePsychologyQuiz(quiz, answersByQuestionId);

  return (
    <div className="wp-psychology-quiz">
      <div className="wp-chart-quiz__header">
        <p className="wp-section-heading__eyebrow">Psychology Drill</p>
        <h3>Train the response before emotion takes over.</h3>
        <p className="wp-auth-card__description">
          Complete all scenarios. You need at least {quiz.minimumCorrectAnswers} correct answers to
          pass verification.
        </p>
      </div>

      <div className="wp-psychology-quiz__grid">
        {assessment.results.map((result, index) => {
          const { question, selectedOption, correctOption, hasAnswer } = result;

          return (
            <article className="wp-mission-card wp-scenario-card" key={question.id}>
              <div className="wp-scenario-card__header">
                <span className="wp-mission-note__label">Scenario {index + 1}</span>
                <h4>{question.title}</h4>
              </div>

              <p className="wp-scenario-card__scenario">{question.scenario}</p>
              <p className="wp-scenario-card__prompt">{question.prompt}</p>

              <div className="wp-answer-grid">
                {question.options.map((option) => {
                  const isSelected = selectedOption?.id === option.id;
                  const isCorrect = correctOption?.id === option.id;
                  const stateClassName = !hasAnswer
                    ? ""
                    : isCorrect
                      ? " wp-answer-option--correct"
                      : isSelected
                        ? " wp-answer-option--incorrect"
                        : "";

                  return (
                    <button
                      key={option.id}
                      className={`wp-answer-option${isSelected ? " wp-answer-option--selected" : ""}${stateClassName}`}
                      type="button"
                      onClick={() => onSelectAnswer(question.id, option.id)}
                    >
                      <span className="wp-answer-option__label">Option {option.label}</span>
                      <span className="wp-answer-option__text">{option.text}</span>
                    </button>
                  );
                })}
              </div>

              <div className={`wp-alert wp-alert--${result.feedbackTone}`} role="status">
                {result.feedbackMessage}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
