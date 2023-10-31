import React from "react";
import { tab_title } from "../../../config/tabs";
import Title from "./Title";
import { Category } from "../../../Types/TabInterface";
import Links from "./Links";

interface TabProps {
  categories: Category[];
}
const Tab = ({ categories }: TabProps) => {
  return (
    // <div className="w-2/6 lg:w-[62rem] h-[30rem] p-4 flex gap-2 bg-primary shadow-md border-2 border-color5">
    <div className="w-full h-[30rem] p-4 flex gap-2 bg-primary shadow-md border-2 border-color5">
      {/* IMAGE */}
      <div
        className="h-full  w-full overflow-hidden sm:w-4/6 lg:w-3/6 shadow-md gap-4"
        style={{
          background: `url(${tab_title.image.url}) center/cover`,
        }}
      >
        <Title text={tab_title.text} />
      </div>
      {/* LINKS */}
      <div className="hidden sm:flex sm:items-center w-full overflow-scroll">
        <div className="w-full p-8 h-full flex flex-col gap-4 justify-start">
          {categories !== undefined &&
            categories.map((category, index) => (
              <div key={index} className="flex flex-col gap-3">
                <Links categoryName={category.name} links={category.links} />
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
