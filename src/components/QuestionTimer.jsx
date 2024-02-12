import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeoutId = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timeoutId);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <progress
      max={timeout}
      value={remainingTime}
      className="mx-auto mb-5 w-full rounded-md bg-blue"
      style={{ backgroundColor: "#ff0000" }}
    />
  );
}
