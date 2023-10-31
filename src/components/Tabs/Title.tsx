import React, { useState, useEffect } from "react";
import { timeDate } from "@/lib/helper";

interface TitleProps {
  text: string;
}
const Title = ({ text }: TitleProps) => {
  const [day, setDay] = useState<string | undefined>("");
  useEffect(() => {
    const currentDay = timeDate("day");
    setDay(currentDay);
  }, []);
  const dayChar = (i: number) => {
    return day?.split("")[i];
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex backdrop-blur-sm flex-col items-center text-6xl gap-4 border-2 p-6 uppercase">
        {text == "day"
          ? day
              ?.split("")
              .map((c, index) => <span key={index}>{dayChar(index)}</span>)
          : text.split("").map((c, index) => <span key={index}>{c}</span>)}
      </div>
    </div>
  );
};

export default Title;
