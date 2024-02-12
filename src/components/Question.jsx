import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions";

export default function Question({ index, onSelectAnswer, skipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    });
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <>
      <QuestionTimer
        key={index}
        timeout={10000}
        onTimeout={answer.selectedAnswer === "" ? skipAnswer : null}
      />
      <p className="font-bold">{QUESTIONS[index].text}</p>
      <Answers
        answers={QUESTIONS[index].answers}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
      ></Answers>
    </>
  );
}
