import React, { forwardRef, InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="my-4 h-14 w-full border-b-2 border-color5 bg-transparent text-2xl  outline-none placeholder:text-2xl placeholder:font-bold placeholder:text-white placeholder:text-opacity-70"
    />
  );
});

Input.displayName = "Input";

export default Input;
