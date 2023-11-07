import React from "react";
import Button from "@/components/Button";

const World = () => {
  const animationsDuration = 1;
  const enableANimations = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className={`px-4 h-8 bg-blue-500 font-bold rounded-md }`}
        style={
          enableANimations
            ? {
                animation: `slide-in-left ${animationsDuration}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
              }
            : {}
        }
      >
        world
      </button>
    </div>
  );
};

export default World;
