import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-6 h-20">
      <div className="flex items-center w-[740px]">
        <h2 className="font-bold">Dribble</h2>
        <ul className="flex flex-1 justify-between ml-8 text-[14px] text-gray-600 font-bold">
          <li className="navLinks">Inspiration</li>
          <li className="navLinks">Find Work</li>
          <li className="navLinks">Learn Design</li>
          <li className="navLinks">Go Pro</li>
          <li className="navLinks">Marketplace</li>
          <li className="navLinks">Hire Designers</li>
        </ul>
      </div>
      <div className="flex items-center justify-evenly w-[28%] text-gray-600">
        <SearchIcon className="h-4 w-4" />
        <h3>Sign In</h3>
        <button className="bg-pink-500 px-[12px] py-[9px] text-[15px] font-bold text-white rounded-md">
          Start a free project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
