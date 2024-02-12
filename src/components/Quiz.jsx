import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeAnswersIndex = userAnswers.length;
  const quizFinished = userAnswers.length === QUESTIONS.length;

  const handleOnAnswerClick = useCallback(function handleOnAnswerClick(
    selectedAnswer
  ) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleOnAnswerClick(null),
    [handleOnAnswerClick]
  );

  if (quizFinished) {
    return (
      <div className="pt-20">
        <Summary answers={userAnswers} />;
      </div>
    );
  }

  return (
    <div
      id="quiz"
      className="bg-stone-300 px-5 py-5 flex flex-col mx-auto text-center min-w-96 max-w-screen-md shadow-lg rounded-lg mt-20"
    >
      <Question
        key={activeAnswersIndex}
        index={activeAnswersIndex}
        onSelectAnswer={handleOnAnswerClick}
        skipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
