import React, { useState, useEffect } from "react";
import Border from "../assets/images/Border.png";
import smallBorder from "../assets/images/smallBorder.png";
// import vic from "../assets/images/vic.png";
import victorybackground from "../assets/images/victorybackground.png";
import background from "../assets/images/background.png";
import space from "../assets/images/space.png";

const DefeatBattleResultSmall = ({ playerA, playerB, troopsLost }) => {
  return (
    <div
      className="rounded-lg	 bg-blue_bg text-center py-6 px-4 sm:px-8  shadow-2xl  shadow-blue_bg  flex flex-col items-center ring-2 ring-blue-bg ring-offset-4 ring-offset-blue-300 dark:ring-offset-blue-300 opacity-100 w-full max-w-[800px] mx-auto "
      style={{
        width: "100vh",
        maxWidth: "430px",
        height: "auto",
        zIndex: 3,
        backgroundColor: "rgba(75, 185, 240, 0.9  )",
      }}
    >
      {/* Player A's name */}
      <h1
        className="font-good_times w-[117x] h-[21px] top-[287px] left-[121px]text-green-400 text-3xl sm:text-3xl font-bold mb-4 "
        style={{
          color: "#000000", // Text color
          textShadow: "2px 2px 1px  #FA0000", // Text shadow with offset and color
        }}
      >
        {playerA}
      </h1>

      {/* Victory Image */}
      <div className="font-good_times w-[153px] h-[118.38px] top-[309px] left-[103px] sm:w-24 mb-3 rounded-full size-32 ">
        <img
          src={space}
          alt="Explosion"
          className="w-full rounded-full object-fill  size-32  "
        />
      </div>

      {/* Victory Text */}
      <h2
        className="font-good_times w-[247px] h-[20px] top-[431px] left-[56px] text-4xl font-normal leading-9 text-center mb-4 pb-6 	"
        style={{
          color: "#000000", // Text color
          textShadow: "2px 2px 1px #FA0000", // Text shadow with offset and color
        }}
      >
        DEFEATED
      </h2>

      {/* Player B's name */}
      <h3
        className="font-good_times w-[114px] h-[26px] top-[469px] left-[123px] font-good-times text-red-400 text-3xl sm:text-1xl font-bold mb-2 text-center pb-4"
        style={{
          color: "#000000", // Text color
          textShadow: "2px 2px 1px #3AB736", // Text shadow with offset and color
        }}
      >
        {playerB}
      </h3>

      {/* Troops Lost Info */}
      <p className=" font-good_times w-[147px] h-[15px] top-[502px] left-[107px] text-#130D24 sm:text-lg font-medium	pb-9 ">
        {troopsLost} TROOPS LOST
      </p>
    </div>
  );
};
const DefeatBattleResultBig = ({ playerA, playerB, troopsLost }) => {
  return (
    <div
      className="bg-blue_bg bg-opacity-50 text-center py-8 px-12 rounded-lg shadow-lg flex flex-col items-center  blue_bg shadow-blue_bg ring-2 ring-blue-bg ring-offset-4 ring-offset-blue-300 dark:ring-offset-blue-300 opacity-100 "
      style={{
        width: "85vw", // More responsive on large screens
        maxWidth: "1800px", // Cap width on large screens
        height: "auto",
        zIndex: 3, // Ensure it stays above background
        backgroundColor: "rgba(75, 185,250, 0.9)",
      }}
    >
      <h1
        className="font-good_times text-green-400  sm:text-4xl font-bold mb-4"
        style={{
          color: "#000000", // Text color
          textShadow: "2px 2px 1px  #FA0000", // Text shadow with offset and color
        }}
      >
        {playerA}
      </h1>
      <div className="w-48 mb-4">
        <img
          src={space}
          alt="Explosion"
          className="w-full rounded-full object-fill  size-56  "
        />
      </div>
      <h1
        className="font-good_times text-red-500 text-7xl font-bold mb-4"
        style={{
          color: "#000000", // Text color
          textShadow: "2px 2px 1px  #FA0000", // Text shadow with offset and color
        }}
      >
        DEFEATED
      </h1>
      <h2
        className="font-good_times text-red-400 text-4xl font-bold mb-2"
        style={{
          color: "#000000", // Text color
          textShadow: "2px 2px 1px #3AB736", // Text shadow with offset and color
        }}
      >
        {playerB}
      </h2>
      <p className="font-good_times text-#130D24 text-3xl">
        {troopsLost} TROOPS LOST
      </p>
    </div>
  );
};

const Defeat = () => {
  const [data, setData] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="bg-black min-h-screen flex items-center justify-center overflow-hidden  "
      style={{
        backgroundImage: `url(${
          isSmallScreen ? victorybackground : background
        }`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 "
        style={{
          backgroundColor: " #D92222A8",
          zIndex: 0,
          opacity: 0.8,
        }}
      ></div>

      <img
        src={isSmallScreen ? smallBorder : Border}
        alt="Tech Wars Logo"
        className=" max-w-none md:h-[100vh] w-[100%] "
        style={{ zIndex: 1 }}
      />

      <div className=" rounded absolute inset-0 flex justify-center items-center ">
        {isSmallScreen ? (
          <DefeatBattleResultSmall
            playerA={(data.playerA = "AbC").toUpperCase()}
            playerB={(data.playerB = "AsD").toUpperCase()}
            troopsLost={(data.troopsLost = "122").toUpperCase()}
          />
        ) : (
          <DefeatBattleResultBig
            playerA={(data.playerA = "AbC").toUpperCase()}
            playerB={(data.playerB = "AsD").toUpperCase()}
            troopsLost={(data.troopsLost = "122").toUpperCase()}
          />
        )}
      </div>
      {/* <div className="w-screen h-screen bg-red-500" /> */}
    </div>
  );
};

export default Defeat;
