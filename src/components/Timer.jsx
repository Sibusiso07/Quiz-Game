import { useState, useEffect } from "react";

function Timer({ setTimeOut, questionData, onAlertOK }) {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (timer === 0) {
      alert("Game Over"); 
      onAlertOK(); // End the game when the user clicks 'OK'
      setTimeOut(true);
      return; // Prevent further execution after timer reaches 0
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut, onAlertOK]);

  useEffect(() => {
    setTimer(15); // Reset timer on new question
  }, [questionData]);

  return <div>{timer}</div>; // Render the timer
}

export default Timer;
