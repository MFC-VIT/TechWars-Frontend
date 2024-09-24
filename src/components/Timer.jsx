import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Timer() {
  const [seconds, setSeconds] = useState(300); // 5 minutes in seconds
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setIsActive(false);
      navigate("/lobby");
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      <div className=" text-main_font bg-[#D9D9D940] px-4 py-2 -skew-x-[40deg] inline-block relative">
        <div className="skew-x-[40deg]">
          <h1>
            Time Left: {minutes}:{remainingSeconds.toString().padStart(2, "0")}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Timer;
