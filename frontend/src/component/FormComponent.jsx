import React from "react";

const FormComponent = ({
  questions,
  setQuestions,
  handleQuestionChange,
  handleOptionChange,
  handleCorrectOptionChange,
  addOption,
  removeOption,
  removeQuestion,
  addQuestion   
}) => {
  const handleQuestionOptionChange = (event, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].question = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleQuestionOptionCorrectChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctOption = optionIndex;
    setQuestions(updatedQuestions);
    handleCorrectOptionChange(questionIndex, optionIndex);
  };

  const handleQuestionAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push("");
    setQuestions(updatedQuestions);
  };

  const handleQuestionRemoveOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="mb-4">
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4">
          <textarea
            value={question.question}
            onChange={(event) =>
              handleQuestionOptionChange(event, questionIndex)
            }
            placeholder="Enter a question"
            className="border p-2 mb-2 w-[90%] outline-none"
          />
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex mb-2 items-center">
              <input
                type="text"
                value={option}
                onChange={(event) =>
                  handleOptionChange(event, questionIndex, optionIndex)
                }
                placeholder={`Option ${String.fromCharCode(97 + optionIndex)}`}
                className="border p-2 mr-2 w-[70%] outline-none"
              />
              <input
                type="radio"
                checked={question.correctOption === optionIndex}
                onChange={() =>
                  handleQuestionOptionCorrectChange(
                    questionIndex,
                    optionIndex
                  )
                }
                className="mr-2 w-4 h-4"
              />
              <button
                onClick={() =>
                  handleQuestionRemoveOption(questionIndex, optionIndex)
                }
                className="bg-red-300 hover:bg-red-500 h-[30px] text-white rounded px-2 "
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => handleQuestionAddOption(questionIndex)}
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Add Option
          </button>
          <button
            onClick={() => removeQuestion(questionIndex)}
            className="bg-red-300 hover:bg-red-500 text-white rounded px-4 py-2 ml-2"
          >
            Remove Question
          </button>
        </div>
      ))}
      <button
        onClick={addQuestion}
        className="bg-green-500 text-white rounded px-4 py-2"
      >
        Add Question
      </button>
    </div>
  );
};

export default FormComponent;
