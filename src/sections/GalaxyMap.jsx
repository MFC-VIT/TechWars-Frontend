import { useEffect, useState } from "react";
import "./EnemyLobby.css";
import planet1 from "../assets/images/planet1.webp";
import planet2 from "../assets/images/planet2.webp";
import planet3 from "../assets/images/planet3.webp";
import planet4 from "../assets/images/planet4.webp";
import planet5 from "../assets/images/planet5.webp";
import PropTypes from "prop-types" 

const planetImages = [ planet1, planet2, planet3, planet4, planet5 ] 

import { useRecoilState, useRecoilValue } from "recoil"
import { currentPageAtom, allPlanetsAtom } from "../atoms/mapAtom";
import axios from "axios";
import { GET_ALL_TERRITORIES, GET_TEAM_DATA } from "../lib/constants";
import { teamAtom } from "../atoms/teamAtom";
import { useAuth } from "../Providers/AuthProvider";

function GalaxyMap() {
  const token = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [planetIndex, setPlanetIndex] = useState(0);
  const [allPlanets, setAllPlanets] = useRecoilState(allPlanetsAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [planetsData, setPlanetsData]= useState([]);
  const [teamData, setTeamData] = useRecoilState(teamAtom)

  useEffect(()=>{
    axios.get(GET_ALL_TERRITORIES, {
      headers: {
        authorization: "Bearer "+ token,
      }
    }).then((response)=>{
      setAllPlanets(response.data.territories);
      console.log(response.data.territories)
    }).catch(err=>{
      console.log(err)
    })
  }, [setAllPlanets, token])
  
  useEffect(()=>{
    const data = allPlanets.slice(currentPage*5, currentPage*5+5).map((planet, index)=>(
      {
        ...planet,
        image: planetImages[index]
      }
    ))
    console.log(data)
    setPlanetsData(data)
  }, [currentPage, setAllPlanets, allPlanets])

  useEffect(()=>{
    const fetchTeamData = ()=>{
      axios.get(GET_TEAM_DATA, {
        headers: {
          authorization: "Bearer " + token
        }
      }).then(response=>{
        const team = response.data;
        console.log(team);
        setTeamData((teamData)=>({
          ...teamData,
          name: team.name,
          score: team.score,
          territories: team.territories,
          isQuizOver: team.states != "quiz"
        }))
      }).catch(err=>console.log(err))
    }
    fetchTeamData();
  }, [setTeamData, token])

  const handleSetCurrentPage = (num)=>{
    return ()=>{
      setCurrentPage(currentPage=>currentPage+num);
    }
  }
  return (
    <div className="background">
      <header className="Header relative top-4">
        <div className="flex md:flex-row md:justify-between flex-col w-full gap-2">
          <div className="font-star_jedi md:text-5xl text-3xl font-bold tracking-wider text-red_border max-md:text-center">Galaxy</div>
          <div className="timer rounded-md px-5 py-2 md:text-xl bg-blue-500 bg-opacity-25 flex md:flex-col flex-row justify-between">
            <p>{teamData.name}</p>
            <p>SCORE : {teamData.score}</p>
          </div>
        </div>
      </header>
      <div className="teams">
        {showPopup && <Popup index={planetIndex} setShow={setShowPopup} />}
        {planetsData.map((planet, index) => (
          <div
            className={`team team${
              index + 1
            } hover:scale-125 transition-all duration-200 ease-linear`}
            key={index}
            onClick={() => {
              setShowPopup(true);
              setPlanetIndex(index+currentPage*5);
            }}
          >
            <img src={planet.image} alt="Planet 1" />
            <p className={`
            ${planet.isCaptured && !teamData.territories.includes(planet._id)  
              ? "text-red-500 font-bold text-lg md:text-2xl"
              : teamData.territories.includes(planet._id) 
                ? "text-green-500 font-bold text-lg md:text-2xl"
                : "text-[14px] md:text-xl"
            }`}
            >
              {planet.name}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full flex justify-between px-10 mb-5">
      <button
            className="px-12 py-2 bg-red-500/40 rounded-md w-fit mt-8 font-battle_star uppercase"
            disabled={currentPage==0}
            onClick={handleSetCurrentPage(-1)}
          >
            Prev
          </button> <button
            className="px-12 py-2 bg-red-500/40 rounded-md w-fit mt-8 font-battle_star uppercase"
            disabled={currentPage==Math.floor(allPlanets.length/5)}
            onClick={handleSetCurrentPage(1)}
            >
            Next
          </button>
      </div>
    </div>
  );
}

export default GalaxyMap;

function Popup({ setShow, index }) {
  const allPlanets = useRecoilValue(allPlanetsAtom)
  const teamData = useRecoilValue(teamAtom)
  const planet = allPlanets[index];
  return (
    <>
      <div
        className="w-full h-screen fixed top-0 left-0 z-[1000]"
        onClick={() => {
          setShow(false);
        }}
      ></div>
      <div className="w-fit max-w-[90%] max-h-[90vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 md:bg-black/60 z-[2000] backdrop:blur-md rounded-xl border-2 border-red-400 min-w-[80%] md:min-w-[30%] min-h-[50vh] md:min-h-[30vh] flex items-center justify-center font-aquire text-xl md:text-2xl p-8 flex-col gap-6 ">
        <div
          className="absolute top-2 right-2 p-3 cursor-pointer"
          onClick={() => {
            setShow(false);
          }}
        >
          X
        </div>
        {planet.isCaptured && <div className={`flex flex-row justify-around w-full ${teamData.territories.includes(planet._id) ? "text-green-400":"text-red-500"}`}>
            <h2>{planet.ownerName}</h2>
            <h2>{planet.requiredScore}</h2>
          </div>
        }
        <h1 className="text-4xl font-bold tracking-wider">{planet.name}</h1>
        <ul className=" list-disc flex flex-col gap-3">
          {planet.subterritories.map((sub, index)=><li className="text-neutral-300" key={index}>{sub}</li>)}
        </ul>
      </div>
    </>
  );
}

Popup.propTypes = {
  setShow: PropTypes.func,
  index: PropTypes.number
}
