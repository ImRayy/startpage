import React from "react";
import { tab_title } from "../../../config/tabs";
import Title from "./Title";
import { Category } from "../../../Types/TabInterface";
import Links from "./Links";
import Search from "./Search";

interface TabProps {
  categories: Category[];
  enableAnimations: boolean;
  toggleSearchWindow: boolean;
}
const Tab = ({
  categories,
  enableAnimations,
  toggleSearchWindow,
}: TabProps) => {
  return (
    <div className="w-full h-[30rem] flex gap-2 bg-primary shadow-md relative">
      {/* IMAGE */}
      <div
        className="hidden m-4 sm:block h-full  w-full overflow-hidden sm:w-4/6 lg:w-3/6 shadow-md gap-4"
        style={
          enableAnimations
            ? {
                background: `url(${tab_title.image.url}) center/cover`,
                animation: `slide-in-left-400 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
              }
            : {
                background: `url(${tab_title.image.url}) center/cover`,
              }
        }
      >
        <div
          style={
            enableAnimations
              ? {
                  animation: `slide-in-left 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                }
              : {}
          }
          className="h-full flex items-center"
        >
          <Title text={tab_title.text} />
        </div>
      </div>
      {/* LINKS */}
      <div className="flex items-center w-full overflow-hidden overflow-y-scroll">
        <div className="w-full p-8 h-full flex flex-col gap-4 justify-start">
          {categories !== undefined &&
            categories.map((category, index) => (
              <div key={index} className="flex flex-col gap-3">
                <Links
                  categoryName={category.name}
                  links={category.links}
                  enableAnimations={enableAnimations}
                />
                {categories.length - 1 !== index && (
                  <hr className="border-zinc-700" />
                )}
              </div>
            ))}
        </div>
      </div>
      <Search isShow={toggleSearchWindow} />
    </div>
  );
};

export default Tab;
