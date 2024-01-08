import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// Arrow functions are a more concise way of writing function expressions.
const Trivia = ({ onOptionClick }) => {

  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTriviaData = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple");
        const data = await response.json();
        console.log(data.results);
        const currentQuestion = data.results[0];
        setQuestionData({
          question: currentQuestion.question,
          option1: currentQuestion.correct_answer,
          option2: currentQuestion.incorrect_answers[0],
          option3: currentQuestion.incorrect_answers[1],
          option4: currentQuestion.incorrect_answers[2],
        });
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchTriviaData();
  }, []);

  // Refactor - Prevent code duplication.
  const renderAnswer = (option, key) => (
    <div key={key} className="answer" onClick={() => onOptionClick(option)}>
      <h5>{option}</h5>
    </div>
  );
  

  return (
    <div className="trivia">
      <div className="question">
        <h3>{questionData?.question}</h3>
      </div>
      <div className="answers">
        {renderAnswer(questionData?.option1)}
        {renderAnswer(questionData?.option2)}
        {renderAnswer(questionData?.option3)}
        {renderAnswer(questionData?.option4)}
      </div>
    </div>
  );
};

export default Trivia;

// Comments.

/* In the code questionData?.option1, the ?. is using optional chaining. 
   It's a feature introduced in modern JavaScript to safely access properties or methods of an object, 
   especially when dealing with potentially nullable or undefined values. 
*/
