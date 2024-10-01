import React, { useState, useEffect } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import User from "./components/User";
import Setup from "./components/Setup";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeOut, setTimeOut] = useState(false);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState(null);
  const [setupComplete, setSetupComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quizData, setQuizData] = useState(null); // To hold fetched quiz data

  useEffect(() => {
    setLoading(true);
    // Simulating data fetching. The actual fetching will be handled in Setup.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleAlertOK = () => {
    setTimeOut(false);
    setSetupComplete(false);
    setScore(0);
    setCurrentQuestionIndex(0); // Reset question index when alert is acknowledged
  };

  const handleOptionClick = (selectedOption) => {
    if (checkAnswer(selectedOption)) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    if (currentQuestionIndex + 1 < quizData.results.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert(`Quiz Completed! Your score is ${score + 1}`);
      // Reset or navigate as needed
    }
  };

  const checkAnswer = (selectedOption) => {
    return selectedOption === quizData.results[currentQuestionIndex]?.correct_answer;
  };

  return (
    <div className="app">
      <div className="main">
        {!user ? (
          <User setUser={setUser} />
        ) : !setupComplete ? (
          <Setup setSetupComplete={setSetupComplete} setQuizData={setQuizData} />
        ) : (
          <>
            <h2>Let's Play</h2>
            <div className="top">
              {!loading && !timeOut && (
                <div className="timer">
                  <Timer setTimeOut={setTimeOut} questionData={quizData.results[currentQuestionIndex]} onAlertOK={handleAlertOK} />
                </div>
              )}
            </div>
            <div className="bottom">
              <Trivia
                onOptionClick={handleOptionClick}
                data={quizData} // Pass your quiz data here
                currentQuestionIndex={currentQuestionIndex}
                loading={loading}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
