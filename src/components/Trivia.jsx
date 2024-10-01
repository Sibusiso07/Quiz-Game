import React, { useEffect, useState } from "react";

const Trivia = ({ onOptionClick, data, currentQuestionIndex, loading }) => {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    if (loading || !data || !data.results || data.results.length === 0) {
      return; // Ensure data exists and results are not empty
    }

    const currentQuestion = data.results[currentQuestionIndex];

    setQuestionData({
      question: currentQuestion.question,
      options: currentQuestion.type === 'boolean'
        ? [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]
        : [
            currentQuestion.incorrect_answers[0],
            currentQuestion.incorrect_answers[1],
            currentQuestion.incorrect_answers[2],
            currentQuestion.correct_answer
          ].sort(() => Math.random() - 0.5) // Shuffle for multiple-choice
    });
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
        <h3>{questionData?.question}</h3>
      </div>
      <div className="answers">
        {questionData.options.map((option, index) => renderAnswer(option, index))}
      </div>
    </div>
  );
};

export default Trivia;
