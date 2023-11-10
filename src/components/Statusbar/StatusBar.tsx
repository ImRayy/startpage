import React, { SetStateAction } from "react";
import { Tab } from "../../types/TabInterface";
import { status_bar } from "../../../config/general";

interface StatusBarProps {
  tabs: Tab[];
  setSelectedTab: React.Dispatch<SetStateAction<number>>;
}
const StatusBar = ({ tabs, setSelectedTab }: StatusBarProps) => {
  return (
    <div className="w-full p-1.5 bg-primary flex gap-1 border-2 border-color5">
      {tabs.map((_, index) => (
        <span
          key={index}
          className="px-3 flex items-center bg-secondary rounded-sm colors duration-300 active:scale-90 cursor-pointer text-color5 hover:text-color2 font-bold"
          onClick={() => setSelectedTab(index)}
        >
          {status_bar.icons[index] !== undefined
            ? status_bar.icons[index]
            : status_bar.default_icon}
        </span>
      ))}
    </div>
  );
};

export default StatusBar;
