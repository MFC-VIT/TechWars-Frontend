import React, { useState } from "react";
import PlanetBg from "../assets/PlanetBg.webm";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(() => score + 1);
        console.log("Correct answer:", selectedAnswer);
      } else {
        console.log("Wrong answer:", selectedAnswer);
      }
      console.log("Current Score:", score);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }

      setSelectedAnswer("");
    } else {
      console.log("No answer selected");
    }
  };

  const handleSubmit = () => {
    navigate("/lobby");
  };

  return (
    <div className="w-full h-full">
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50">
        <video
          src={PlanetBg}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full sm:rotate-90 md:rotate-0"
        ></video>
      </div>

      <div className="h-full w-full p-4 rounded-lg">
        <div className="flex justify-center tracking-widest items-center mb-4 w-full mt-4">
          <p className="font-solo_extra_italic px-5 py-1 text-md">
            <Timer />
          </p>
        </div>

        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="px-8 w-full flex flex-col justify-center items-center">
            <div className="sm:mt-10 sm:mb-10 mb-8 sm:w-[70%]">
              <div className="w-full flex items-center justify-center mt-16">
                <div className="rounded-xl flex items-center justify-center text-center text-main_font sm:text-4xl w-full text-3xl bg-gray_bg h-52 mb-10 p-5">
                  {currentQuestion.question}
                </div>
              </div>
              <ul className="font-exo_space tracking-wide flex flex-col sm:gap-7 gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2">
                {currentQuestion.options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`cursor-pointer p-4 text-xl rounded-lg text-main_font ${
                      selectedAnswer === option ? "bg-gray-700" : "bg-gray_bg"
                    }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex justify-between flex-row sm:w-[70%] w-full">
              <button
                onClick={handleNext}
                className="bg-next_purple text-white font-aquire tracking-wider text-xl px-4 py-2 rounded-lg"
              >
                NEXT
              </button>
              <button
                onClick={handleSubmit}
                className="bg-submit_green text-white font-aquire tracking-wider text-xl px-4 py-2 rounded-lg"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
