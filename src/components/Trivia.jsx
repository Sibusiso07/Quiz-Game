import React from "react";

// Arrow functions are a more concise way of writing function expressions.
const Trivia = ({ questionData, onOptionClick }) => {
  // Refactor - Prevent code duplication.
  const renderAnswer = (option) => (
    <div className="answer" onClick={() => onOptionClick(option)}>
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
