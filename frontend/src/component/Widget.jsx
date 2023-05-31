import React, { useState } from "react";
import FormComponent from "./FormComponent";
import Preview from "./Preview";
import axios from "axios";
import { Link } from "react-router-dom";

const Widget = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionChange = (event, questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].question = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectOptionChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctOption = optionIndex;
    setQuestions(updatedQuestions);
  };

  const addOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push("");
    setQuestions(updatedQuestions);
  };

  const removeOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", ""], correctOption: null }]);
  };
const handleSave=async()=>{
  setIsLoading(true)
 if(questions && questions!==[]){
  try {
    const response = await axios.post('http://localhost:3434/api/worksheet', { questions });
   if(response.data?.success){
    setQuestions([])
  setIsLoading(false)
  }
  } catch (error) {
    console.error('Error saving worksheet:', error);
    setIsLoading(false)
  }}
  else{ 
    alert('please add one question')
    setIsLoading(false)
  }
  
 
}
  return (
    <div className="h-auto flex flex-col justify-start items-start min-h-screen bg-slate-200 p-4 w-3/4 m-auto my-3 pb-1">
    <div className="flex justify-between w-full">
      <div className="w-1/2">
        <h2 className="text-lg font-bold mb-4 text-slate-700 ">Create Questions</h2>
        <FormComponent
          questions={questions}
          setQuestions={setQuestions}
          handleQuestionChange={handleQuestionChange}
          handleOptionChange={handleOptionChange}
          handleCorrectOptionChange={handleCorrectOptionChange}
          addOption={addOption}
          removeOption={removeOption}
          removeQuestion={removeQuestion}
          addQuestion={addQuestion}
        />
      </div>
      {questions?.length>0 && 
      <div className="w-1/2 border-l px-2 border-red-300">
        <h2 className="text-lg font-bold mb-4 text-slate-700">Questions Preview</h2>
        <Preview questions={questions} />
      </div> }
     
    </div>
    {questions?.length>0 && 
 <div className="w-full flex items-center justify-center my-4 mb-6">
 <button onClick={handleSave} className=" bg-green-500 rounded px-2 py-3 w-40 text-white  ">{isLoading ? 'Loading...':'save'}</button>
 </div>}
 <Link to='test'>
 <button className="bg-blue-600 px-2 py-1 font-bold text-white rounded-md">check old </button>
 </Link>
     </div>
  );
};

export default Widget;
