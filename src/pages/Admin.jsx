import { useEffect, useState } from "react";
import {
  CREATE_LOBBY,
  GET_SCORE,
  MIGRATE_TEAM,
  TERRITORY_CHANGE,
  UPDATE_SCORE,
} from "../lib/constants";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/admin.css";
import { STARTEND_QUIZ } from "../lib/constants";
export default function Admin() {
  const [lobbyName, setLobbyName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [lobbyLimit, setLobbyLimit] = useState(6);
  const [lobbies, setLobbies] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [territoryScore, setTerritoryScore] = useState("");
  const [territoryName, setTerritoryName] = useState("");
  const [teamScoreData, setTeamScoreData] = useState([]);
  const [teamScore, setTeamScore] = useState("");
  async function handleCreateLobby() {
    try {
      console.log(adminName);
      if (lobbyName === "" || adminName === "") {
        toast.error("Please fill all the fields");
        return;
      }
      const response = await axios.post(
        CREATE_LOBBY,
        {
          lobbyname: lobbyName,
          limit: parseInt(lobbyLimit),
        },
        {
          headers: {
            adminname: adminName,
          },
        }
      );
      if (response.data.success) {
        setLobbies([...lobbies, response.data.lobby]);
        localStorage.setItem("lobbies", JSON.stringify(lobbies));
        toast.success("Lobby created successfully");
      }
    } catch {
      toast.error("Something went wrong while creating lobby");
    }
  }
  async function handleTeamMigrate() {
    if (adminName === "" || lobbyName === "" || teamName === "") {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.post(
        MIGRATE_TEAM,
        {},
        {
          headers: {
            adminname: adminName,
            teamname: teamName,
            lobbyname: lobbyName,
          },
        }
      );
      if (response.data.success) {
        toast.success("Team migrated successfully");
      }
    } catch {
      toast.error("Something went wrong while migrating team");
    }
  }
  async function handleQuizStartEnd(action) {
    try {
      const response = await axios.post(
        `${STARTEND_QUIZ}${action}`,
        {},
        {
          headers: {
            adminname: adminName,
            lobbyname: lobbyName,
          },
        }
      );
      if (response.data.success) {
        console.log(response);
        toast.success("Quiz " + action + "ed successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while " + action + "ing quiz");
    }
  }
  async function handleChangeTerritory() {
    if (
      teamName === "" ||
      adminName === "" ||
      territoryName === "" ||
      territoryScore === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.patch(
        TERRITORY_CHANGE,
        {
          name: territoryName,
          score: parseInt(territoryScore),
        },
        {
          headers: {
            adminname: adminName,
            teamname: teamName,
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        toast.success("Territory changed successfully");
      } else {
        toast.error("Something went wrong while changing territory");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while changing territory");
    }
  }
  async function handleGetScores() {
    try {
      const response = await axios.get(GET_SCORE, {
        headers: {
          lobbyname: lobbyName,
          adminname: adminName,
        },
      });
      if (!response.data.success) {
        toast.error("Something went wrong while fetching scores");
        return;
      }
      console.log(response);
      setTeamScoreData(response.data.lobby.teams);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching scores");
    }
  }
  async function handleTeamScoreChange() {
    try {
      const response = await axios.patch(
        UPDATE_SCORE,
        {
          score: parseInt(teamScore),
        },
        {
          headers: {
            adminname: adminName,
            teamname: teamName,
          },
        }
      );
      if (!response.data.success) {
        toast.error("Something went wrong while updating score");
        return;
      }
      console.log(response);
      toast.success("Score updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while updating score");
    }
  }
  useEffect(() => {
    if (localStorage.getItem("lobbies")) {
      setLobbies(JSON.parse(localStorage.getItem("lobbies")));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("lobbies", JSON.stringify(lobbies));
  }, [lobbies]);
  return (
    <div className="w-full min-h-screen bg-[#111111] p-4 text-white">
      <h1 className="text-3xl font-battle_star text-white">Admin Panel</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full border-2 p-8 border-white flex flex-col gap-2">
          <h1 className="text-xl">Territory Management</h1>
          <input
            type="text"
            placeholder="admin Name"
            onChange={(e) => {
              setAdminName(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
            placeholder="Team Name"
          />
          <input
            type="text"
            onChange={(e) => {
              setTerritoryName(e.target.value);
            }}
            placeholder="Name of the territory"
          />
          <input
            type="text"
            onChange={(e) => {
              setTerritoryScore(e.target.value);
            }}
            placeholder="Score of the territory"
          />
          <button
            type="button"
            className="text-white bg-red-500 py-3 rounded-md"
            onClick={handleChangeTerritory}
          >
            Set Territory
          </button>
        </div>
        <div className="w-full border-2 p-8 border-white flex flex-col gap-2">
          <h1 className="text-xl">Score Management</h1>
          <input
            type="text"
            placeholder="admin Name"
            onChange={(e) => {
              setAdminName(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
            placeholder="Team Name"
          />
          <input
            type="text"
            onChange={(e) => {
              setTeamScore(e.target.value);
            }}
            placeholder="Score of the team"
          />
          <button
            type="button"
            className="text-white bg-red-500 py-3 rounded-md"
            onClick={handleTeamScoreChange}
          >
            Change Score
          </button>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col gap-2  p-8 border-2 border-white text-white">
            <h1 className="text-2xl">Create Lobby</h1>
            <input
              type="text"
              id="lobbyName"
              placeholder="Lobby Name"
              className="bg-black text-white px-3 py-2"
              onChange={(e) => {
                setLobbyName(e.target.value);
              }}
            />
            <input
              type="text"
              id="adminName"
              placeholder="Admin Name"
              className="bg-black text-white px-3 py-2"
              onChange={(e) => {
                setAdminName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter Lobby Limit"
              className="bg-black text-white px-3 py-2"
              onClick={(e) => {
                setLobbyLimit(e.target.value);
              }}
            />
            <button
              type="button"
              className="text-white bg-red-500 py-3 rounded-md"
              onClick={handleCreateLobby}
            >
              Create Lobby
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-2xl">Lobbies</h1>
          {lobbies.map((lobby, index) => (
            <div className="bg-gray-600 p-3 rounded-md" key={index}>
              <h1>Lobby Name: {lobby.name}</h1>
            </div>
          ))}
        </div>
        <div className="w-full border-2 p-8 border-white flex flex-col gap-2">
          <h1 className="text-xl">Add Teams in Lobby</h1>
          <input
            type="text"
            placeholder="admin Name"
            onChange={(e) => {
              setAdminName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Lobby Name"
            onChange={(e) => {
              setLobbyName(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
            placeholder="Team Name"
          />
          <button
            type="button"
            className="text-white bg-red-500 py-3 rounded-md"
            onClick={handleTeamMigrate}
          >
            Migrate Team
          </button>
        </div>
        <div className="w-full border-2 p-8 border-white flex flex-col gap-2">
          <h1 className="text-xl">Start/Stop Quiz</h1>
          <input
            type="text"
            placeholder="admin Name"
            onChange={(e) => {
              setAdminName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Lobby Name"
            onChange={(e) => {
              setLobbyName(e.target.value);
            }}
          />
          <div className="w-full flex items-center gap-2">
            <button
              type="button"
              className="text-white bg-red-500 py-3 rounded-md w-full"
              onClick={() => {
                handleQuizStartEnd("start");
              }}
            >
              Start
            </button>
            <button
              type="button"
              className="text-white bg-red-500 py-3 rounded-md w-full"
              onClick={() => {
                handleQuizStartEnd("end");
              }}
            >
              End
            </button>
          </div>
        </div>

        <div className="w-full border-2 p-8 border-white flex flex-col gap-2">
          <h1 className="text-xl">GET SCORES</h1>
          <input
            type="text"
            placeholder="admin Name"
            onChange={(e) => {
              setAdminName(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setLobbyName(e.target.value);
            }}
            placeholder="Lobby Name"
          />

          <button
            type="button"
            className="text-white bg-red-500 py-3 rounded-md"
            onClick={handleGetScores}
          >
            Get Scores
          </button>
        </div>
        <div className="">
          <h1>Team Score for the lobby</h1>
          <div className="w-full flex flex-col gap-1">
            {teamScoreData.map((data, index) => (
              <div className="bg-gray-800 px-4 py-2  rounded-md" key={index}>
                <h1>
                  {data.name} - {data.score}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
