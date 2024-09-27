import { useState } from "react";
import "../styles//Auth.css";
import BackgroundVideo from "../components/Background";
import borderPhoto1 from "../assets/border.png";
import borderPhoto2 from "../assets/borderPhoto2.png";
import logoPhoto from "../assets/Logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { TEAM_LOGIN } from "../lib/constants";
import { useSetRecoilState } from "recoil";
import { teamAtom } from "../atoms/teamAtom";
const AuthenticationPage = () => {
  const navigate = useNavigate();
  const [lobbyId, setLobbyId] = useState("");
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const setTeamState = useSetRecoilState(teamAtom);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!lobbyId || !teamName || !password) {
      toast.error("Please fill all the fields");
    }
    // if (Cookies.get("token")) navigate("/lobby");
    const response = await axios.post(TEAM_LOGIN, {
      teamname: teamName,
      lobbyname: lobbyId,
      password,
    });
    // console.log("data: ", response.data);
    if (!response.data.success) {
      toast.error("Invalid credentials");
    } else {
      setTeamState(teamState=>({
        ...teamState,
        name: teamName,
        isQuizOver: false
      }))
      Cookies.set("token", response.data.token);
      return navigate("/lobby");
    }
  };

  return (
    <>
      <BackgroundVideo />
      <div className="h-screen overflow-hidden bg-black">
        <img
          src={logoPhoto}
          alt=""
          className="absolute z-10 h-[19%] top-[5%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-xl:h-[20%] xl:left-[10%] xl:top-[8%]"
        />
        <div className="contain flex justify-center items-center h-screen">
          <img
            src={borderPhoto1}
            alt=""
            className="hidden md:block absolute rotate-0 h-[95%] w-[98%] "
          />
          <img
            src={borderPhoto2}
            alt=""
            className="block md:hidden absolute rotate-0 h-[95%] w-[98%] "
          />
          <form
            onSubmit={handleSubmit}
            className="relative w-[70%] h-[30%] flex flex-col sm:w-[39%] md:h-[31%] md:w-[35%] justify-around items-center lg:w-[30%] lg:h-[37%] xl:w-[23%]"
          >
            <input
              type="text"
              placeholder="TEAM NAME"
              value={teamName}
              name="teamName"
              autoCapitalize="none"
              onChange={(e) => setTeamName(e.target.value)}
              className="custom-input p-[3%] w-[100%] h-[20%] rounded-2xl text-center text-[100%] font-solo_extra_italic text-red-600 placeholder-red-600 text-stroke md:text-2xl xl:text-3xl"
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="LOBBY ID"
              value={lobbyId}
              name="lobbyId"
              onChange={(e) => setLobbyId(e.target.value)}
              className="custom-input p-[3%] w-[100%] h-[20%] rounded-2xl text-center text-[100%] font-solo_extra_italic text-red-600 placeholder-red-600 text-stroke md:text-2xl xl:text-3xl"
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="custom-input p-[3%] w-[100%] h-[20%] rounded-2xl text-center text-[100%] font-solo_extra_italic text-red-600 placeholder-red-600 text-stroke md:text-2xl xl:text-3xl"
            />
            <input
              type="submit"
              value="LOGIN"
              className="p-[3%] w-[100%] h-[20%] rounded-2xl bg-red-600 text-[110%] text-center font-battle_star cursor-pointer md:text-2xl xl:text-3xl"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthenticationPage;
