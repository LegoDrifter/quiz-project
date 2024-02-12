import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  onSelectAnswer,
  answerState,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let windClass = "bg-blue-600 text-stone-200";

        if (answerState === "answered" && isSelected) {
          windClass = "bg-orange-600 text-stone-200";
        }

        if (answerState === "correct" && isSelected) {
          windClass = "bg-green-600 text-stone-200";
        } else if (answerState === "wrong" && isSelected) {
          windClass = "bg-red-600 text-stone-200";
        }

        return (
          <li
            key={answer}
            className={`${windClass} mt-5 py-3 rounded-md hover:bg-blue-400`}
          >
            <button
              onClick={() => onSelectAnswer(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
