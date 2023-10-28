import React, { AnchorHTMLAttributes } from "react";

const Button = ({
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
}) => {
  return (
    <a
      className="px-4 bg-secondary shadow-lg shadow-zinc-950 hover:shadow-none border-l-2 border-transparent hover:border-color2 hover:ml-2 py-1 text-lg flex gap-2 transition-all duration-500 items-center cursor-pointer select-none"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
};

export default Button;
