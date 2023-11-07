import React, { useState } from "react";
import Tab from "./Tab";
import { tabs } from "../../../config/tabs";
import StatusBar from "../StatusBar";

interface TabsProps {
  enableAnimations: boolean;
}

const Tabs = ({ enableAnimations }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="w-5/6 lg:w-[62rem] h-[37rem] flex items-center flex-col justify-center relative">
      <div className="absolute w-full bottom-0">
        <StatusBar tabs={tabs} setSelectedTab={setSelectedTab} />
      </div>
      <div className="w-full bg-primary flex overflow-hidden border-2 border-color5">
        <div
          key={selectedTab ? selectedTab : ""}
          style={
            enableAnimations
              ? {
                  animation: `slide-in-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                }
              : {}
          }
          className="w-full"
        >
          <Tab
            categories={tabs[selectedTab].categories}
            enableAnimations={enableAnimations}
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
