import React, { useState, useEffect } from "react";
import "../styles/timer.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countDate = new Date("Feb 23, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDate - now;

      if (distance >= 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? `0${days}` : days,
          hours: hours < 10 ? `0${hours}` : hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes,
          seconds: seconds < 10 ? `0${seconds}` : seconds,
        });
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="timer">
      <div>
        <p id="days">{timeLeft.days}</p>
        <span style={{ color: "#c447e7" }}>days</span>
      </div>
      <div>
        <p id="hrs">{timeLeft.hours}</p>
        <span style={{ color: "#c447e7" }}>hours</span>
      </div>
      <div>
        <p id="min">{timeLeft.minutes}</p>
        <span style={{ color: "#c447e7" }}>minutes</span>
      </div>
      <div>
        <p id="sec">{timeLeft.seconds}</p>
        <span style={{ color: "#c447e7" }}>seconds</span>
      </div>
    </div>
  );
};

export default Timer;
