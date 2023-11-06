import { useState, useEffect } from "react";

function Timer({setTimeOut, questionData, onAlertOK}) {
    
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (timer === 0) {
        return (setTimeOut(true), alert("Game Over"), onAlertOK());
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(15);
  }, [questionData]);

  return timer;
}

export default Timer;