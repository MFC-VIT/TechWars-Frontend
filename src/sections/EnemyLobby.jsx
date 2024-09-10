import React from 'react';
import './EnemyLobby.css';
import lobbyLogo from '../assets/images/lobbyLogo.webp';
import planet1 from '../assets/images/planet1.webp';
import planet2 from '../assets/images/planet2.webp';
import planet3 from '../assets/images/planet3.webp';
import planet4 from '../assets/images/planet4.webp';
import planet5 from '../assets/images/planet5.webp';


function EnemyLobby() {
    return (
        <div className="background">
            <header className="Header">
                <img className="lobbyLogo" src={lobbyLogo} alt="LobbyLogo" />
                <div className="timer"> <p>TIME LEFT : <span></span> </p> <p>TROOPS AVAILABLE : <span></span> </p></div>
            </header>
            <div className="teams">
                <div className="team team1">
                    <img src={planet1} alt="Planet 1" />
                    <p>TEAM ABC</p>
                </div>
                <div className="team team2">
                    <img src={planet2} alt="Planet 2" />
                    <p>TEAM ABC</p>
                </div>
                <div className="team team3">
                    <img src={planet3} alt="Planet 3" />
                    <p>TEAM ABC</p>
                </div>
                <div className="team team4">
                    <img src={planet4} alt="Planet 4" />
                    <p>TEAM ABC</p>
                </div>
                <div className="team team5">
                    <img src={planet5} alt="Planet 5" />
                    <p>TEAM ABC</p>
                </div>
            </div>
        </div>
    );
}

export default EnemyLobby;
