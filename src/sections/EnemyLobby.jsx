import React from "react";
import "./EnemyLobby.css";
import lobbyLogo from "../assets/images/lobbyLogo.webp";
import planet1 from "../assets/images/planet1.webp";
import planet2 from "../assets/images/planet2.webp";
import planet3 from "../assets/images/planet3.webp";
import planet4 from "../assets/images/planet4.webp";
import planet5 from "../assets/images/planet5.webp";

function EnemyLobby() {
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
        {planets.map((planet, index) => (
          <div
            className={`team team${
              index + 1
            } hover:scale-125 transition-all duration-200 ease-linear`}
            key={index}
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
