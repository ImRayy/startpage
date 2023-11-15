import React, { forwardRef, InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="w-full h-14 bg-transparent border-b-2 border-color5 my-4 placeholder:text-white placeholder:text-opacity-70 placeholder:text-2xl placeholder:font-bold text-2xl"
    />
  );
});

Input.displayName = "Input";

export default Input;
