import BackgroundVideo from "../components/Background";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
const Lobby = () => {
  const [decodedData, setDecodedData] = useState(null);
  const [quiz, setQuiz] = useState(null);
  async function handleQuizStart() {
    try {
      const response = await axios.post("/start?questions=20", {});
      if (!response.success) {
        toast.error("Quiz not available!");
      }
      setQuiz(response.questions);
      console.log(quiz);
      localStorage.setItem("quiz", response.questions);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const decoded = jwtDecode(token);
    setDecodedData(decoded);
  }, []);
  return (
    <>
      <BackgroundVideo />
      <div className="p-4 md:p-16 flex flex-col z-[1000] relative h-screen overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src="/images/logo.png" alt="" />
          <h1 className="text-4xl font-aquire font-semibold mt-4 md:mt-0">
            Lobby Page
          </h1>
        </div>
        <div className="flex flex-col md:flex-row  w-full lg:px-[8rem] gap-8 md:gap-0 justify-between pt-8">
          <div className="flex flex-col gap-[2rem] w-full md:w-1/2 items-center">
            {teamData.slice(0, 3).map((team, index) => (
              <div
                key={index}
                className="flex flex-row  bg-[#71767B20] pl-4 pr-4 pt-2 pb-2 w-full md:w-4/5 relative rounded-lg font-auxMono tracking-wide font-battle_star"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-white">{team.teamName}</p>
                  <div className="flex flex-row relative items-center ">
                    <img
                      src="/images/man.png"
                      alt=""
                      className="invert h-[2rem] w-auto"
                    />
                    <p className="text-white text-lg">
                      {team.teamSize} PLAYERS
                    </p>
                  </div>
                </div>
                <img
                  src="/images/ufo.png"
                  alt=""
                  className="h-[2rem] w-[6rem] absolute top-6 right-3"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[2rem] w-full md:w-1/2 items-center font-battle_star">
            {teamData.slice(3, 6).map((team, index) => (
              <div
                key={index}
                className="flex flex-row bg-[#71767B20] pl-4 pr-4 pt-2 pb-2 w-full md:w-4/5 relative rounded-lg font-auxMono tracking-wide"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-white">{team.teamName}</p>
                  <div className="flex flex-row items-center">
                    <img
                      src="/images/man.png"
                      alt=""
                      className="h-[2rem] w-auto invert"
                    />
                    <p className="text-white text-lg">
                      {" "}
                      {team.teamSize} PLAYERS
                    </p>
                  </div>
                </div>
                <img
                  src="/images/ufo.png"
                  alt=""
                  className="h-[2rem] w-[6rem] absolute top-6 right-3"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="px-12 py-2 bg-red-500/40 rounded-md w-fit mx-auto mt-8 font-battle_star uppercase"
          onClick={handleQuizStart}
        >
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default Lobby;

const teamData = [
  {
    teamName: "Team A",
    teamSize: 20,
  },
  {
    teamName: "Team B",
    teamSize: 20,
  },
  {
    teamName: "Team C",
    teamSize: 20,
  },
  {
    teamName: "Team D",
    teamSize: 20,
  },
  {
    teamName: "Team E",
    teamSize: 20,
  },
  {
    teamName: "Team F",
    teamSize: 20,
  },
];
