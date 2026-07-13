import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [userName, setUserName] = useState("");

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
    <>
      <div id="time-clock" className="text-5xl font-bold">
        <span id="hour">{hours}</span>
        <span className={`${seconds % 2 && "visible"}`}>:</span>
        <span id="minutes">{minutes}</span>
      </div>
      <div id="greetings" className="text-xl flex flex-row gap-2">
        <p>Good {timeOfDay},</p>
        <input
          placeholder={userName}
          type="text"
          className="bg-orange-500 inline"
        />
      </div>
    </>
  );
}
