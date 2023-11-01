import React, { useState } from "react";
import Tab from "./Tab";
import { tabs } from "../../../config/tabs";
import { AnimatePresence, motion } from "framer-motion";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="w-5/6 lg:w-[62rem] h-[40rem] flex items-center flex-col justify-center relative">
      <AnimatePresence mode="wait">
        <div className="w-full bg-primary flex overflow-hidden border-2 border-color5">
          <motion.div
            key={selectedTab ? selectedTab : ""}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Tab categories={tabs[selectedTab].categories} />
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Tabs;
