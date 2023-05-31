import React from "react";

const Preview = ({ questions }) => {
  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3 className="font-bold text-yellow-600">Question {questionIndex + 1}</h3>
          <p className="text-5 font-medium">{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                {String.fromCharCode(97 + optionIndex)}. {option}
              </li>
            ))}
          </ul>
          {question.correctOption !== null && (
            <p className="font-bold  text-green-600">Correct Option: {String.fromCharCode(97 + question.correctOption)}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Preview;
