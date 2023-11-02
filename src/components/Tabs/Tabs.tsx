import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import { tabs } from "../../../config/tabs";
import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence mode="wait">
        <div className="w-full bg-primary flex overflow-hidden border-2 border-color5">
          <motion.div
            key={selectedTab ? selectedTab : ""}
            initial={enableAnimations ? { x: 200 } : false}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Tab
              categories={tabs[selectedTab].categories}
              enableAnimations={enableAnimations}
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Tabs;
