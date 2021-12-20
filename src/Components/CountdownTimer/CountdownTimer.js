import React, { useEffect, useState } from "react";
import "./CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "./Utlis/CountdownTimeUtlis";
const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

export const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [countdownTimestampMs]);
  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return (
    <div className="Countdown__div">
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span className="number">{remainingTime.hours}</span>
      <span>hours</span>
      <span className="number">{remainingTime.minutes}</span>
      <span>minutes</span>
      <span className="number">{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;
