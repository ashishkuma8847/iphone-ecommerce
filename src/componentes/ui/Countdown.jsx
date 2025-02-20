import { useState, useEffect } from "react";

const Countdown = () => {
  // Calculate the target date (24 hours from now)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 24); // Adding 24 hours to the current time

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isFinished, setIsFinished] = useState(false); 

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
        setIsFinished(true); 
      }
    }, 1000);

    return () => clearInterval(timer); 
  }, [targetDate]);

  return (
    <div
      className="text-black flex sm:w-[302px] w-[225px] justify-between items-center"
      style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
    >
      <div className="flex flex-col items-start justify-between">
        <h2 className="font-customfont12 font-medium text-xs leading-[18px]">Days</h2>
        <span className="font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em]">
          {isFinished ? "0" : timeLeft.days}
        </span>
      </div>
      <span className="text-CustomRed-0">:</span>
      <div className="flex flex-col items-start justify-between">
        <h2 className="font-customfont12 font-medium text-xs leading-[18px]">Hours</h2>
        <span className="font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em]">
          {isFinished ? "0" : timeLeft.hours}
        </span>
      </div>
      <span className="text-CustomRed-0">:</span>
      <div className="flex flex-col items-start justify-between">
        <h2 className="font-customfont12 font-medium text-xs leading-[18px]">Minutes</h2>
        <span className="font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em]">
          {isFinished ? "0" : timeLeft.minutes}
        </span>
      </div>
      <span className="text-CustomRed-0">:</span>
      <div className="flex flex-col items-start justify-between">
        <h2 className="font-customfont12 font-medium text-xs leading-[18px]">Seconds</h2>
        <span className="font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em]">
          {isFinished ? "0" : timeLeft.seconds}
        </span>
      </div>
    </div>
  );
};

export default Countdown;
