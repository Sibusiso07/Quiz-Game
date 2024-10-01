import React, { useEffect, useState } from "react";

const Trivia = ({ onOptionClick, data, loading, currentQuestionIndex }) => {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    if (loading || !data || !data.results || data.results.length === 0) {
      return; // Ensure data exists and results are not empty
    }

    const currentQuestion = data.results[currentQuestionIndex];

    if (currentQuestion) {
      setQuestionData({
        question: currentQuestion.question,
        option1: currentQuestion.incorrect_answers[0],
        option2: currentQuestion.incorrect_answers[1],
        option3: currentQuestion.incorrect_answers[2],
        option4: currentQuestion.correct_answer, // Assuming the last option is the correct one
      });
    }
  }, [data, loading, currentQuestionIndex]);

  const renderAnswer = (option, key) => (
    <div key={key} className="answer" onClick={() => onOptionClick(option)}>
      <h5>{option}</h5>
    </div>
  );

  if (loading || !questionData) return <h3>Loading questions...</h3>;

  return (
    <div className="trivia">
      <div className="question">
        <h3>{questionData.question}</h3>
      </div>
      <div className="answers">
        {renderAnswer(questionData.option1, 1)}
        {renderAnswer(questionData.option2, 2)}
        {renderAnswer(questionData.option3, 3)}
        {renderAnswer(questionData.option4, 4)}
      </div>
    </div>
  );
};

export default Trivia;
