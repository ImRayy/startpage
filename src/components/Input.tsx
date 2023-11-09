import React, { InputHTMLAttributes } from "react";

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="w-full h-14 bg-transparent border-b-2 border-color5 my-4 placeholder:text-white placeholder:text-opacity-70 placeholder:text-2xl placeholder:font-bold text-2xl"
      {...rest}
    />
  );
};

export default Input;
