import BackgroundVideo from "../components/Background";
import axios from "axios";
// import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GET_TEAM_IN_LOBBY, TEAM_START_QUIZ } from "../lib/constants";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isQuizAvailableAtom } from "../atoms/quizAtom";
import lobbyLogo from "../assets/images/lobbyLogo.webp";
import { useAuth } from "../Providers/AuthProvider";
import Cookies from "js-cookie";
const Lobby = () => {
  const [teamData, setTeamData] = useState([]);
  const [isQuizAvailable, setIsQuizAvailable] =
    useRecoilState(isQuizAvailableAtom);
  const token = useAuth();

  // const [quiz, setQuiz] = useState([]);
  const navigate = useNavigate();
  // const navigate = useNavigate();
  const handleViewGalaxy = () => {
    return navigate("/map");
  };

  async function handleQuizStart() {
    try {
      // console.log(decodedData)
      const response = await axios.post(
        TEAM_START_QUIZ,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // setQuiz(response.questions);
      // console.log(response)
      // console.log(response.data.questions);
      if (response.data.success) {
        console.log(response.data);
        localStorage.setItem("quiz", JSON.stringify(response.data.questions));
        // console.log(response.data.quiz);
        localStorage.setItem("timer", JSON.stringify(response.data.quiz));
        return navigate("/quiz");
      }
    } catch (error) {
      setIsQuizAvailable(false);
      toast.error("Quiz not available!");
      console.log(error.message);
    }
  }
  useEffect(() => {
    axios
      .get(GET_TEAM_IN_LOBBY, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data.teams);
        setTeamData(response.data.teams);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
  return (
    <>
      <BackgroundVideo />
      <div className="p-4 md:p-16 flex flex-col z-[1000] relative h-screen overflow-y-auto">
        <button
          className="text-xl text-white bg-black px-12 py-3 rounded-md w-fit absolute top-2 right-2 font-battle_star"
          onClick={() => {
            Cookies.remove("token");
          }}
        >
          Logout
        </button>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src="/images/logo.png" alt="" />
          <img
            className="lobbyLogo w-40 h-auto"
            src={lobbyLogo}
            alt="LobbyLogo"
          />
        </div>
        <div className="flex flex-col md:flex-row  w-full lg:px-[8rem] gap-8 md:gap-0 justify-between pt-8">
          <div className="flex flex-col gap-[2rem] w-full items-center font-battle_star">
            {teamData.map((team, index) => (
              <div
                key={index}
                className="flex flex-row bg-[#71767B20] pl-4 pr-4 pt-2 pb-2 w-full md:w-4/5 relative rounded-lg font-auxMono tracking-wide"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-white">{team.name}</p>
                  <div className="flex flex-row items-center">
                    <img
                      src="/images/man.png"
                      alt=""
                      className="h-[2rem] w-auto invert"
                    />
                    <p className="text-white text-lg">SCORE: {team.score}</p>
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
        <div className="w-full flex items-center justify-center gap-8">
          {isQuizAvailable && (
            <button
              className="px-12 py-2 bg-red-500/40 rounded-md w-fit mx-auto mt-8 font-battle_star uppercase text-white"
              onClick={handleQuizStart}
            >
              Start Quiz
            </button>
          )}
          <button
            className="px-12 py-2 bg-red-500/40 rounded-md w-fit mx-auto mt-8 font-battle_star uppercase text-white"
            onClick={handleViewGalaxy}
          >
            View Galaxy
          </button>
        </div>
      </div>
    </>
  );
};

export default Lobby;
