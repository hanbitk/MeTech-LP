import React from "react";

function Hero() {
  return (
    <div className="h-screen bg-hero bg-cover bg-no-repeat flex flex-col justify-center items-center text-white text-center">
      <h1 className="w-1/2 leading-[5rem] font-bold text-7xl">
        Methane Minimized, World Maximized.
      </h1>
      <h2 className="mt-2">
        With MeTech, reduce methane emissions by 40% from over 1.5 billion cows
        worldwide.
      </h2>
    </div>
  );
}

export default Hero;
