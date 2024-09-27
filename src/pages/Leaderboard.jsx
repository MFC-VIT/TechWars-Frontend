import { useEffect, useState } from "react";
import BackgroundVideo from "../components/Background";
import { toast } from "react-toastify";
import axios from "axios";
import { LEADERBOARD_DATA } from "../lib/constants";
const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(LEADERBOARD_DATA);
        if (!response.data.success) {
          toast.error("Error fetching leaderboard data");
          return;
        }
        setLeaderboardData(response.data.scoreboard);
      } catch (error) {
        console.log(error);
        toast.error("Error fetching leaderboard data");
      }
    })();
  }, []);
  return (
    <>
      <BackgroundVideo />
      <div className="w-full min-h-screen flex flex-col items-center gap-4 relative z-[1000] p-4 md:p-8 text-white">
        <h1 className="text-4xl font-exo_space">Leaderboard</h1>
        <div className="w-full md:w-[50%] mx-auto bg-gray-800 px-6 py-2 text-white rounded-xl flex items-center justify-between font-mono">
          <h1>TEAM NAME</h1>
          <h1>SCORE</h1>
        </div>
        {leaderboardData.map((team, index) => (
          <div
            className="w-full md:w-[50%] mx-auto bg-gray-800/50 px-6 py-2 text-white rounded-xl flex items-center justify-between font-mono"
            key={index}
          >
            <h1>{team.name}</h1>
            <h1>{team.score}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Leaderboard;
