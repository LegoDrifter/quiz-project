import trophy from "../assets/trophy.svg";
import QUESTIONS from "../questions";

export default function Summary({ answers }) {
  const correctAnswersArray = answers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  console.log(correctAnswersArray);

  const skippedAnswersArray = answers.filter((answer) => answer === null);

  const correctPercentage = Math.round(
    (correctAnswersArray.length / answers.length) * 100
  );

  const skippedPercentage = Math.round(
    (skippedAnswersArray.length / answers.length) * 100
  );

  const incorrectPercentage = Math.round(
    Math.round(
      ((answers.length -
        skippedAnswersArray.length -
        correctAnswersArray.length) /
        answers.length) *
        100
    )
  );

  console.log(correctPercentage);

  console.log(skippedAnswersArray);

  console.log(correctAnswersArray);
  return (
    <div>
      <div className="flex justify-center bg-slate-200 py-6 shadow-lg mx-auto w-96 border-4 border-sky-500 2px max-w-screen-sm rounded-sm">
        <img src={trophy} alt="I know nothing" className="h-20 w-20" />
        <h1 className="text-2xl pt-5">Congratulations!</h1>
      </div>

      <div className="w-96 mx-auto mt-5 bg-slate-200 py-6 shadow-lg border-4 border-sky-500 2px ">
        <h2 className="text-center font-bold">Statistics</h2>
        <div className="flex gap-3 justify-center">
          <p>Skipped: {skippedPercentage}%</p>
          <p>Correct: {correctPercentage}%</p>
          <p>Incorrect: {incorrectPercentage}%</p>
        </div>
      </div>

      <ul className="mt-5 mx-auto w-96 max-w-screen text-center bg-slate-200 py-6 shadow-lg border-4 border-sky-500">
        {answers.map((answer, index) => {
          return (
            <li key={index}>
              <p className="font-bold">
                {index + 1}.{QUESTIONS[index].text}
              </p>
              <p
                className={
                  answer === QUESTIONS[index].answers[0]
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {answer === null ? "Skipped" : answer}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
