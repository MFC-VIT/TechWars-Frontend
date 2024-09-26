import React, { useState } from "react";
import "./EnemyLobby.css";
import lobbyLogo from "../assets/images/lobbyLogo.webp";
import planet1 from "../assets/images/planet1.webp";
import planet2 from "../assets/images/planet2.webp";
import planet3 from "../assets/images/planet3.webp";
import planet4 from "../assets/images/planet4.webp";
import planet5 from "../assets/images/planet5.webp";

function EnemyLobby() {
  const [showPopup, setShowPopup] = useState(false);
  const planets = [
    {
      name: "planet1",
      image: planet1,
    },
    {
      name: "planet2",
      image: planet2,
    },
    {
      name: "planet3",
      image: planet3,
    },
    {
      name: "planet4",
      image: planet4,
    },
    {
      name: "planet5",
      image: planet5,
    },
  ];
  return (
    <div className="background">
      <header className="Header relative top-4">
        <img
          className="lobbyLogo w-40 h-auto"
          src={lobbyLogo}
          alt="LobbyLogo"
        />
        <div className="timer rounded-md">
          {" "}
          <p>
            TIME LEFT : <span></span>{" "}
          </p>{" "}
          <p>
            TROOPS AVAILABLE : <span></span>{" "}
          </p>
        </div>
      </header>
      <div className="teams">
        {showPopup && <Popup setShow={setShowPopup} />}
        {planets.map((planet, index) => (
          <div
            className={`team team${
              index + 1
            } hover:scale-125 transition-all duration-200 ease-linear`}
            key={index}
            onClick={() => {
              setShowPopup(true);
            }}
          >
            <img src={planet.image} alt="Planet 1" />
            <p>{planet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EnemyLobby;

function Popup({ setShow }) {
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
        <h1 className="text-4xl">SMV</h1>
        <ul className=" list-disc flex flex-col gap-3">
          <li>SMV1</li>
          <li>SMV2</li>
          <li>SMV3</li>
        </ul>
      </div>
    </>
  );
}
