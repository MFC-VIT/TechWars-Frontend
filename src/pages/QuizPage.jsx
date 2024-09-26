import { useEffect, useState } from "react";
// import PlanetBg from "../assets/PlanetBg.webm";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";
import BackgroundVideo from "../components/Background";
import borderPhoto1 from "../assets/border.png";
import borderPhoto2 from "../assets/borderPhoto2.png";
const QuizPage = () => {
  const [questions, setQuestions] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = async () => {
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
    handleNext();
    if (currentQuestionIndex === questions.length - 1) {
      navigate("/lobby");
    }
  };
  useEffect(() => {
    const quizData = localStorage.getItem("quiz");
    if (!quizData) return;
    setQuestions(quizData);
  }, []);
  return (
    <>
      <BackgroundVideo />
      <div className="w-full h-full flex items-center justify-center relative z-[100]">
        <img
          src={borderPhoto1}
          alt=""
          className="hidden md:block fixed top-0 left-0 z-10 rotate-0 h-screen w-full "
        />
        <img
          src={borderPhoto2}
          alt=""
          className="block md:hidden fixed top-0 left-0 z-10 rotate-0 h-screen w-full"
        />
        {questions.length === 0 && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-8 md:gap-4 z-[1000]">
            <h1 className="text-white text-xl lg:text-3xl text-center font-battle_star">
              QUIZ NOT STARTED YET!
              <br />
              Please wait for the admin to start the quiz
            </h1>
            <button
              className="bg-red-600/70 text-white px-12 py-2 rounded-md text-sm md:text-lg font-aquire"
              onClick={() => {
                navigate("/lobby");
              }}
            >
              Go back to Lobby
            </button>
          </div>
        )}
        {questions.length > 0 && (
          <div className="h-[70%] w-full p-4 rounded-lg">
            <div className="flex justify-center tracking-widest items-center  w-full mt-8 mb-4">
              <p className="font-solo_extra_italic px-5 py-1 text-md">
                <Timer />
              </p>
            </div>
            <div className="flex items-center justify-center flex-col w-full h- relative z-[200]">
              <div className="px-8 w-full flex flex-col justify-center items-center">
                <div className="sm:mt-10 sm:mb-10 mb-8 sm:w-[70%]">
                  <div className="w-full flex items-center justify-center ">
                    <div className="rounded-xl flex items-center justify-center text-center text-main_font text-lg w-full  bg-gray_bg h-fit mb-4 p-5">
                      {currentQuestion.question}
                    </div>
                  </div>
                  <ul className="font-exo_space tracking-wide flex flex-col sm:gap-7 gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2">
                    {currentQuestion.options.map((option, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer  text-sm md:text-xl rounded-lg text-main_font ${
                          selectedAnswer === option
                            ? "bg-green-700/80"
                            : "bg-gray_bg"
                        }`}
                      >
                        <button
                          onClick={() => handleOptionClick(option)}
                          className="w-full p-2 lg:p-4 h-full"
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex justify-center flex-row sm:w-[70%] w-full">
                  <button
                    onClick={handleSubmit}
                    className="bg-submit_green text-white font-aquire tracking-wider text-sm md:text-xl px-8 md:px-12 py-2 md:py-4 rounded-lg w-[90%] md:w-fit"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default QuizPage;
