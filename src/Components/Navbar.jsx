import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-3">
          <img
            onClick={() => navigate(-1)}
            className="w-8 cursor-pointer bg-black rounded-2xl p-2"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 cursor-pointer bg-black p-2 rounded-2xl"
            src={assets.arrow_right}
            alt=""
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-full hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-white px-3 py-1 text-[15px] rounded-full cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-400 w-7 h-7 rounded-full text-black flex items-center justify-center">
            H
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer tracking-wide">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 cursor-pointer rounded-2xl tracking-wide">
          Music
        </p>
        <p className="bg-black text-white px-4 py-1 cursor-pointer rounded-2xl tracking-wide">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
