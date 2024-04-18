import React from "react";
import CattleVideo from "../assets/hero/hero-bg.mp4";

function Hero() {
  return (
    <div className="h-screen w-full text-white text-center">
      <video
        src={CattleVideo}
        autoPlay
        loop
        muted
        className="w-full h-full  object-cover"
      />
      <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
        <h1 className="w-1/2 leading-[5rem] font-bold text-7xl">
          Methane Minimized, World Maximized.
        </h1>
        <h2 className="mt-2">
          With MeTech, reduce methane emissions by 40% from over 1.5 billion
          cows worldwide.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
