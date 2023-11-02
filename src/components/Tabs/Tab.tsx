import React from "react";
import { tab_title } from "../../../config/tabs";
import Title from "./Title";
import { Category } from "../../../Types/TabInterface";
import Links from "./Links";
import { motion } from "framer-motion";

interface TabProps {
  categories: Category[];
  enableAnimations: boolean;
}
const Tab = ({ categories, enableAnimations }: TabProps) => {
  return (
    <div className="w-full h-[30rem] p-4 flex gap-2 bg-primary shadow-md">
      {/* IMAGE */}
      <motion.div
        initial={enableAnimations ? { x: -400 } : false}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full  w-full overflow-hidden sm:w-4/6 lg:w-3/6 shadow-md gap-4"
        style={{
          background: `url(${tab_title.image.url}) center/cover`,
        }}
      >
        <motion.div
          initial={enableAnimations ? { x: -200 } : false}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          className="h-full flex items-center"
        >
          <Title text={tab_title.text} />
        </motion.div>
      </motion.div>
      {/* LINKS */}
      <div className="hidden sm:flex sm:items-center w-full overflow-hidden overflow-y-scroll">
        <div className="w-full p-8 h-full flex flex-col gap-4 justify-start">
          {categories !== undefined &&
            categories.map((category, index) => (
              <div key={index} className="flex flex-col gap-3">
                <motion.div
                  initial={enableAnimations ? { x: 200 } : false}
                  animate={{ x: 0 }}
                  transition={{ duration: `0.${index === 0 ? 2 : index + 2}` }}
                >
                  <Links
                    categoryName={category.name}
                    links={category.links}
                    enableAnimations={enableAnimations}
                  />
                </motion.div>
                {categories.length - 1 !== index && (
                  <hr className="border-zinc-700" />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
