import React from "react";
import PlanetBg from "../assets/PlanetBg.webm";

const QuizPage = () => {
  return (
    <div className="w-full h-full">
      <div className="fixed bottom-0 right-0 left-0 top-0 w-full h-screen overflow-hidden -z-50">
        <video
          src={PlanetBg}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        ></video>
      </div>
      <div className="flex flex-col">
        <div className="max-sm:w-[90%] bg-gray_bg w-full opacity-75 text-main_font font-solo_extra_italic"> timer</div>
        <div className="max-sm:w-[90%] bg-gray_bg w-full opacity-40 text-main_font font-exo_space"> qustion question section box</div>
        <div className="max-sm:w-[90%] bg-gray_bg w-full opacity-40 text-main_font font-exo_space"> qustion question section box</div>
      </div>
    </div>
  );
};

export default QuizPage;
