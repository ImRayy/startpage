import React, { useEffect, useState } from "react";
import { timeDate } from "@/lib/helper";

const Day = () => {
  const [day, setDay] = useState<string | undefined>("");
  useEffect(() => {
    const currentDay = timeDate("day");
    setDay(currentDay);
  }, []);
  const dayChar = (i: 0 | 1 | 2) => {
    return day?.split("")[i];
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span className="flex backdrop-blur-sm flex-col items-center text-6xl gap-4 border-2 p-6 uppercase">
        <span className="whitespace-nowrap">{dayChar(0)}</span>
        <span className="whitespace-nowrap">{dayChar(1)}</span>
        <span className="whitespace-nowrap">{dayChar(2)}</span>
      </span>
    </div>
  );
};

export default Day;
