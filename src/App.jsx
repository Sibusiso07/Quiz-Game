import React, { useState, useEffect } from "react";
import "./App.css";

// Components.
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import User from "./components/User";

// Data.
import quizData from "./data/quiz.json";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState(null);

  const handleCorrectAnswer = () => {
    if (score === quizData.length - 1) {
      alert(
        `Well Done ! You Completed the quiz ! You scored ${score + 1} points out off ${15} points.`
      );
      // Reset question and score states.
      setScore(0);
      setCurrentQuestion(quizData[0]);
      return;
    }
    // Incraese score and set next question.
    setScore((prevScore) => {
      setCurrentQuestion(quizData[prevScore + 1]);
      return prevScore + 1;
    });
  };

  const handleIncorrectAnswer = () => {
    // Reset question and score states.
    setScore((prevScore) => {
      setCurrentQuestion(quizData[prevScore + 1]);
      return prevScore;
    });
  };

  const handleOptionClick = (selectedOption) => {
    // Check if correct answer was selected and handle accordingly.
    if (checkAnswer(selectedOption)) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
    console.log(score);
  //   if (checkAnswer(selectedOption)) {
  //     setScore((prevScore) => prevScore + 1);
  //   } else {
  //     setScore((prevScore) => prevScore);
  //   }
  //   console.log(score);
  //   setCurrentQuestion(quizData[score + 1]);
  };

  const checkAnswer = (selectedOption) => {
    return selectedOption === currentQuestion?.correct_answer; // Returns a true or false. Comparing if the correct option was selected.
  };

  // Load quiz data into state.
  useEffect(() => {
    setCurrentQuestion(quizData[score]);
  }, []);

  const handleAlertOK = () => {
    // Reset question and score states.
    setScore(0);
    setCurrentQuestion(quizData[0]);
    setTimeOut(false); // Reset the timeOut state
  };

  return (
    <div className="app">
      <div className="main">
        { !user ? (
          <User setUser={setUser} />
          ) : (
            <>
              <h2>Welcome to the Quiz Game</h2>
              <div className="top">
                <div className="timer">
                  <Timer 
                    setTimeOut={setTimeOut}
                    questionData={currentQuestion}
                    onAlertOK={handleAlertOK} // Pass the callback function
                  />
                </div>
              </div>
              <div className="bottom">
                <Trivia
                  onOptionClick={handleOptionClick}
                  onAlertOK={handleAlertOK}
                />
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default App;
