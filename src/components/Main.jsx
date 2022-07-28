import React from "react";
import Banner from "../assets/banner.webp";

const Main = () => {
  return (
    <div className="relative h-[480px]">
      <div className="absolute z-20 flex h-full flex-col items-start justify-center space-y-4 ml-12 text-white font-bold w-[800px]">
        <h2 className="text-6xl">
          Discover the world's best designers and creatives!
        </h2>
        <p className="text-lg font-medium">
          Dribble is the leading destination to find & shocase creative work and
          home to world's best design professionals.
        </p>
        <button className="bg-pink-500 px-[12px] py-[9px] text-[15px] font-bold text-white rounded-md">
          Sign Up
        </button>
      </div>
      <div className="bg-black absolute opacity-70 w-full h-full"></div>
      <img className="w-full h-full object-cover" src={Banner} alt="" />
    </div>
  );
};

export default Main;
