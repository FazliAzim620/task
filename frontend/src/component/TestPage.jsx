import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Test = () => {
  const [worksheet, setWorksheet] = useState([]);

  useEffect(() => {
    const fetchWorksheet = async () => {
     
      try {
        const response = await axios.get(
          "http://localhost:3434/api/worksheets"
        );

        if (response?.data) {
          setWorksheet(response?.data);
        }
      } catch (error) {
        console.log("Failed to fetch worksheet:", error);
      }
    };

    fetchWorksheet();
  }, []);
  console.log("worksheet", worksheet);
  return (
    <div className="bg-gray-200 min-h-screen h-auto flex justify-center pt-4">
    
      <div className="w-1/2 bg-white p-3 rounded-md">
      <h4 className="items-center font-bold capitalize flex justify-center text-slate-700">user asked questions</h4>
      {worksheet?.map((item, index) => (
        <div key={item._id}>
          {item.questions?.map((question) => (
            <>
              <div key={question._id} className='py-2'>
                <h3 className='font-bold text-yellow-600"'>
                  Question : {question.question}
                </h3>

                
              </div>
              <ul>
                {question?.options?.map((option,ind) => (
                  <li>{String.fromCharCode(97 + ind)}: {option}</li>
                ))}
              </ul>
             <p className="font-bold  text-green-800"> correctOption:{String.fromCharCode(97 + question?.correctOption)}</p>
            </>
          ))}
        </div>
      ))}
        <Link to='/'>
 <button className="bg-green-500 px-2 py-1 font-bold text-white rounded-md mt-8">create new </button>
 </Link>
      </div>
  
    </div>
  );
};

export default Test;
