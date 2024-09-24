import React, { useState, useEffect } from 'react';
import PlanetBg from "../assets/PlanetBg.webm";
import p1 from "../assets/p1.svg";

export default function Defensepage1() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [troopCount, setTroopCount] = useState(0);

  useEffect(() => {
    setTimeLeft(1);
    setTroopCount(20);

    return () => {
    };
  }, []); 

  return (
    <div className="relative h-screen">
      <video
        className="absolute w-full h-full object-cover"
        src={PlanetBg}  
        autoPlay
        loop
        muted
      />
      <img className="absolute top-0 left-0 w-full h-full z-10" src={p1} alt="Overlay" />
      
      <div className="absolute z-20 flex">
        <div className="relative">
          <button className='absolute z-50 w-[40vw] h-[3vh] ml-[30.5vw] mt-[12.5vh] text-white -skew-x-[30deg] bg-gray-500 pl-2 pr-4 font-solo_extra_italic font-[1.7699115044247788vh]'>
            TIME LEFT : {timeLeft}
          </button>
          <div className='justify-center mt-[45vh]'>
            <input
              className="absolute w-[75vw] ml-[12vw] font-good_times flex bg-transparent border-2 border-[#A62C2B] text-center items-center rounded-md h-[5vh] placeholder:text-[#14019D] text-[#14019D] text-[2.8vh] z-30"
              value={troopCount} 
              onChange={(e) => setTroopCount(Number(e.target.value))}
              placeholder="TROOP COUNT"
              type="number" 
            />      
          </div>
          <button className="absolute text-[#FFFDFD] mt-[8vh] w-[40vw] ml-[29.5vw] font-good_times bg-[#BF0907] rounded-lg h-[5vh] z-40">
            DEFEND
          </button>
        </div>
      </div>
    </div>
  );
}
