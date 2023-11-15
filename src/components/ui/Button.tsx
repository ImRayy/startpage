import React, { AnchorHTMLAttributes } from "react";
import { open_links_in_new_tab } from "../../../config/tabs";

const Button = ({
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
}) => {
  return (
    <a
      className="text-color1 font-bold text-lg flex h-10 px-4 bg-secondary hover:shadow-none hover:translate-y-1 transition-all duration-200 hover:text-color5 gap-2 shadow-button rounded-sm group"
      target={`${open_links_in_new_tab ? "_blank" : "_self"}`}
      {...rest}
    >
      <span className="flex gap-2 items-center group-hover:translate-y-[0.8px]">
        {children}
      </span>
    </a>
  );
};

export default Button;
