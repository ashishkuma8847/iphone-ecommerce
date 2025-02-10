import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-black flex   sm:w-full sm:max-w-[302px] w-[225px]  justify-between items-center " style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
      <div className="flex flex-col items-start justify-between">
      <h2 className="font-customfont12 font-medium text-xs leading-[18px]">Days</h2>
      <span className=" font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em] ">{timeLeft.days} </span>
      </div>
      <span className="text-CustomRed-0">:</span>
      <div className="flex flex-col items-start justify-between">
      <h2 className="font-customfont12 font-medium text-xs leading-[18px]">Hours</h2>
      <span className=" font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em] ">{timeLeft.hours} </span>
      </div>
      <span className="text-CustomRed-0">:</span>
      <div className="flex flex-col items-start justify-between">
      <h2 className="font-customfont12 font-medium text-xs leading-[18px]">Minutes</h2>
      <span className=" font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em] ">{timeLeft.minutes} </span>
      </div>
      <span className="text-CustomRed-0">:</span>
      <div className="flex flex-col items-start justify-between">
      <h2 className="font-customfont12 font-medium text-xs leading-[18px]">Seconds</h2>
      <span className=" font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em] ">{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default Countdown;