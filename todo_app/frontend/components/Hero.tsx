import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState(new Date());
  const [userName, setUserName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timeInterval);
    };
  }, []);

  const { hours, minutes, seconds } = {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };

  const timeOfDays = {
    morning: { min: 0, max: 11 },
    afternoon: { min: 12, max: 17 },
    evening: { min: 18, max: 21 },
    night: { min: 22, max: 23 },
  };

  const timeOfDay = Object.keys(timeOfDays).filter((x) => {
    // @ts-ignore
    const { min, max } = timeOfDays[x];
    return hours >= min && hours <= max;
  })[0];

  return (
    <div className="flex flex-col gap-2 ">
      <div
        id="time-clock"
        className="text-5xl lg:text-6xl 2xl:text-8xl font-bold flex items-center justify-center"
      >
        <span id="hour">{String(hours).padStart(2, "0")}</span>
        <span className={`${seconds % 2 ? "invisible" : "visible"}`}>:</span>
        <span id="minutes">{String(minutes).padStart(2, "0")}</span>
      </div>
      <div
        id="greetings"
        className="text-xl  lg:text-2xl 2xl:text-3xl flex-row gap-2 flex items-center justify-center"
      >
        <p>Good {timeOfDay},</p>
        <input
          placeholder={userName}
          type="text"
          size={userName.length || 8}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`m inline outline-none ${(isFocused || !userName) && "border-b"} font-bold`}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
    </div>
  );
}
