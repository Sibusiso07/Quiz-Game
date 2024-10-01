import React, { useState, useEffect } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import User from "./components/User";
import Setup from "./components/Setup";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question index
  const [timeOut, setTimeOut] = useState(false);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState(null);
  const [setupComplete, setSetupComplete] = useState(false);
  const [quizData, setQuizData] = useState(null); // Store quiz data
  const [loading, setLoading] = useState(false); // Loading state

  const handleAlertOK = () => {
    setTimeOut(false);
    setSetupComplete(false);
    setScore(0);
    setCurrentQuestionIndex(0); // Reset to first question
    setUser(null); // Reset user state
  };

  const handleFinishQuiz = () => {
    alert(`Well Done, ${user}! You scored ${score} points.`);
    handleAlertOK(); // Reset the app
  };

  const handleOptionClick = (selectedOption) => {
    if (checkAnswer(selectedOption)) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestionIndex === quizData.results.length - 1) {
      handleFinishQuiz(); // Finish the quiz
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Move to the next question
    }
  };

  const checkAnswer = (selectedOption) => {
    return selectedOption === quizData.results[currentQuestionIndex]?.correct_answer;
  };

  useEffect(() => {
    if (quizData) {
      setCurrentQuestionIndex(0); // Reset to first question whenever quiz data changes
    }
  }, [quizData]);

  return (
    <div className="app">
      <div className="main">
        {!user ? (
          <User setUser={setUser} />
        ) : !setupComplete ? (
          <Setup setSetupComplete={setSetupComplete} setQuizData={setQuizData} setLoading={setLoading} />
        ) : (
          <>
            <h2>Let's Play</h2>
            <div className="top">
              {!timeOut && (
                <div className="timer">
                  <Timer setTimeOut={setTimeOut} questionData={quizData.results[currentQuestionIndex]} onAlertOK={handleAlertOK} />
                </div>
              )}
            </div>
            <div className="bottom">
              <Trivia
                data={quizData}
                currentQuestionIndex={currentQuestionIndex}
                onOptionClick={handleOptionClick}
                loading={loading} // Pass loading state to Trivia
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
