import React, { useState, useEffect } from "react";
import Tab from "./Tab";
import { tabs } from "../../../config/tabs";
import StatusBar from "../Statusbar/StatusBar";
import Search from "./Search";

interface TabsProps {
  enableAnimations: boolean;
}

const Tabs = ({ enableAnimations }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [toggleSearchWindow, setToggleSearchWindow] = useState(false);

  useEffect(() => {
    // Key mappings
    const keyPressHandler = (event: KeyboardEventInit): void => {
      const data: { [key: string]: () => void } = {
        s: () => setToggleSearchWindow(true),
        Escape: () => setToggleSearchWindow(false),
        1: () => setSelectedTab(0),
        2: () => setSelectedTab(1),
      };
      const key: string | undefined = event.key;
      const action = key !== undefined ? data[key] : undefined;
      if (action) {
        action();
      }
    };
    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, [toggleSearchWindow]);
  return (
    <div className="w-5/6 lg:w-[62rem] h-[37rem] flex items-center flex-col justify-center relative">
      <div className="w-full relative bg-primary flex overflow-hidden border-2 border-color5">
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
        <Search isShow={toggleSearchWindow} />
      </div>
      <div className="absolute w-full bottom-0 mt-10">
        <StatusBar tabs={tabs} setSelectedTab={setSelectedTab} />
      </div>
    </div>
  );
};

export default Tabs;
