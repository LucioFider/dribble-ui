import React from "react";

const Menu = () => {
  return (
    <div className="flex items-center text-[15px] justify-evenly max-w-7xl mt-8 text-gray-600">
      <button className="border border-gray-400 rounded-md h-8 w-24">
        Popular
      </button>
      <div className="w-[800px]">
        <ul className="flex justify-between items-center">
          <li className="menuLinks">All</li>
          <li className="menuLinks">Animation</li>
          <li className="menuLinks">Branding</li>
          <li className="menuLinks">Illustration</li>
          <li className="menuLinks">Mobile</li>
          <li className="menuLinks">Print</li>
          <li className="menuLinks">Product Design</li>
          <li className="menuLinks">Typography</li>
          <li className="menuLinks">Web Design</li>
        </ul>
      </div>
      <button className="border border-gray-400 rounded-md h-8 w-24">
        Filter
      </button>
    </div>
  );
};

export default Menu;
