import React, { useState, useEffect } from "react";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import p4 from "../assets/p4.svg";
import p5 from "../assets/p5.svg";
import p6 from "../assets/p6.svg";
import p7 from "../assets/p7.svg";
import p8 from "../assets/p8.svg";
import p9 from "../assets/p9.svg";
import p10 from "../assets/p10.svg";
import p11 from "../assets/p11.svg";
import p12 from "../assets/p12.svg";
import p13 from "../assets/p13.svg";
import BackgroundLandscape from "../assets/bgLandscape.png";

export default function Attackpage1() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [troopAvailable, setTroopAvailable] = useState(0);
  const [troopCount, setTroopCount] = useState(0);

  useEffect(() => {
    setTimeLeft(1);
    setTroopCount(20);
    setTroopAvailable(400);

    return () => {};
  }, []);

  return (
    <>
      <img
        className="absolute w-screen h-auto min-h-screen z-10 md:hidden"
        src={p2}
        alt="Overlay"
      />
      <img
        className="absolute w-full h-full z-10 hidden md:block"
        src={BackgroundLandscape}
        alt="Overlay"
      />

      <img
        className="absolute z-20 mt-[10vh] ml-[10vw]"
        src={p3}
        alt="Element 1"
      />
      <img
        className="absolute z-20 mt-[15vh] ml-[50vw]"
        src={p4}
        alt="Element 2"
      />
      <img
        className="absolute z-20 mt-[28vh] ml-[25vw]"
        src={p5}
        alt="Element 3"
      />
      <img
        className="absolute z-20 mt-[32vh] ml-[75vw]"
        src={p6}
        alt="Element 4"
      />
      <img
        className="absolute z-20 mt-[40vh] ml-[5vw]"
        src={p7}
        alt="Element 5"
      />
      <img
        className="absolute z-20 mt-[40vh] ml-[32vw]"
        src={p8}
        alt="Element 6"
      />
      <img
        className="absolute z-20 mt-[55vh] ml-[75vw]"
        src={p9}
        alt="Element 7"
      />
      <img
        className="absolute z-20 mt-[65vh] ml-[5vw]"
        src={p10}
        alt="Element 8"
      />
      <img
        className="absolute z-20 mt-[72vh] ml-[55vw]"
        src={p11}
        alt="Element 9"
      />
      <img
        className="absolute z-20 mt-[78vh] ml-[5vw]"
        src={p12}
        alt="Element 10"
      />
      <img
        className="absolute z-20 mt-[86vh] ml-[75vw]"
        src={p13}
        alt="Element 11"
      />

      <div className="absolute ml-[43.5vw] w-[51vw] mt-[2vh] bg-[#rgba(217,217,217,0.95)] bg-gray-300 bg-opacity-25 z-30 text-white p-4">
        <p className="font-solo_extra_italic">Your Score:</p>
        {/* <p className="font-solo_extra_italic">
          TROOPS AVAILABLE: {troopAvailable}
        </p> */}
      </div>

      {/* <div className="absolute z-50 h-[40vh] mt-[60vh] w-full bg-[#181920] opacity-85 flex flex-col justify-center items-center">
        <input
          className="w-[75vw] font-good_times bg-transparent border-2 text-center border-[#A62C2B] rounded-md h-[5vh] placeholder:text-[#14019D] text-[#14019D] text-[2.8vh] mb-[2vh]"
          placeholder="TROOP COUNT" value={troopCount}
        />
        <button className="w-[40vw] font-good_times bg-[#BF0907] text-white rounded-lg h-[5vh]">
          ATTACK
        </button>
      </div> */}
    </>
  );
}
