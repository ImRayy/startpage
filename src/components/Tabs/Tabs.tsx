import React from "react";
import Tab from "./Tab";
import { tabs } from "../../../config/tabs";
import { AnimatePresence, motion } from "framer-motion";

const Tabs = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="w-5/6 lg:w-[62rem] flex overflow-hidden"
        >
          <Tab categories={tabs[0].categories} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Tabs;
