import { EyeIcon, HeartIcon } from "@heroicons/react/solid";
import React from "react";
import Download from "../assets/imx.png";

const Project = () => {
  return (
    <div className="w-[340px] h-[270px] rounded-xl mb-5">
      <img className="rounded-xl" src={Download} alt="" />
      <div className="flex justify-between p-2">
        <div className="flex items-center">
          <h3 className="font-bold text-black text-[15px]">Name</h3>
          <h3 className="bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md ml-2">
            Team
          </h3>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center">
            <HeartIcon className="h-3 w-3 text-red-500" />
            <h2 className="text-sm">61</h2>
          </div>
          <div className="flex items-center">
            <EyeIcon className="h-3 w-3 text-gray-500" />
            <h2 className="text-sm">30.5k</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
