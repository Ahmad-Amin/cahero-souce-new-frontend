import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between fixed bg-black z-10">
      <div className="h-16">
        <img src="Images/Cahero Family Office_1080x360 for website logo 2 2 (1).png" alt="" className="h-16" />
      </div>
      <div className="flex flex-col justify-center items-center mr-10 text-[#b3b3b3]">
        <MdAccountCircle size={25}/>
        <div className="flex flex-row items-center justify-center gap-2">
          <h1>Account</h1>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
