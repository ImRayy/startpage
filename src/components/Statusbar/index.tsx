import React, { SetStateAction, useState, useEffect } from "react";
import { Tab } from "../../types/TabInterface";
import { status_bar } from "../../../config/general";
import { Icon } from "@iconify/react";
import { timeDate } from "@/lib/helper";
import { time } from "console";

interface StatusBarProps {
  tabs: Tab[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<SetStateAction<number>>;
}
const StatusBar = ({ tabs, selectedTab, setSelectedTab }: StatusBarProps) => {
  const [currentTime, setCurrentTime] = useState(timeDate("time"));
  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCurrentTime(timeDate("time"));
    }, 10000);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);
  return (
    <div className="w-full items-center p-1.5 bg-primary flex border-2 border-color5 justify-between">
      <div className="flex gap-1">
        {tabs.map((_, index) => (
          <span
            key={index}
            className={`px-3 flex items-center bg-secondary rounded-sm colors duration-300 active:scale-90 cursor-pointer hover:text-color5 font-bold ${
              selectedTab === index ? "text-color2" : "text-zinc-500"
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {status_bar.icons[index] !== undefined
              ? status_bar.icons[index]
              : status_bar.default_icon}
          </span>
        ))}
      </div>
      <div>
        <span className="flex gap-1.5 items-center pr-2 text-color1">
          <Icon icon="tabler:clock" fontSize={20} className="text-color2" />
          {currentTime}
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
