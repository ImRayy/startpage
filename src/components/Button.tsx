import React, { AnchorHTMLAttributes } from "react";
import { open_links_in_new_tab } from "../../config/tabs";

const Button = ({
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
}) => {
  return (
    <a
      className="px-4 bg-secondary shadow-lg shadow-zinc-950 hover:shadow-none border-l-4 border-transparent hover:border-color2 h-9 flex gap-2 transition-all duration-500 items-center cursor-pointer select-none"
      target={`${open_links_in_new_tab ? "_blank" : "_self"}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Button;
