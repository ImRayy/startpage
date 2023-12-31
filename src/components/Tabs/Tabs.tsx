import React, { useState, useEffect, KeyboardEvent } from "react";
import Tab from "./Tab";
import { tabs } from "../../../config/tabs";
import StatusBar from "../Statusbar";
import Search from "./Search";

interface TabsProps {
  enableAnimations: boolean;
}

const Tabs = ({ enableAnimations }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [toggleSearchWindow, setToggleSearchWindow] = useState(false);

  useEffect(() => {
    // Key mappings
    const keyPressHandler = (event: KeyboardEvent) => {
      const isInputFocused = event.target instanceof HTMLInputElement;
      const data: { [key: string]: () => void } = {
        s: () => {
          if (!isInputFocused) {
            event.preventDefault();
            setToggleSearchWindow(true);
          }
        },
        Escape: () => setToggleSearchWindow(false),
        1: () => setSelectedTab(0),
        2: () => setSelectedTab(1),
      };
      const key: string = event.key;
      const action = data[key];
      if (action) {
        action();
      }
    };

    document.addEventListener("keydown", keyPressHandler as any);
    return () => {
      document.removeEventListener("keydown", keyPressHandler as any);
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
        <StatusBar
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </div>
  );
};

export default Tabs;
