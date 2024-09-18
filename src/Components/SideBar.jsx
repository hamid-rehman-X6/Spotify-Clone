import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";

const SideBar = () => {
  const naivgate = useNavigate();
  return (
    <div className="w-[25%] h-full flex-col text-white p-2 gap-2 hidden lg:flex">
      <div className="h-[15%] bg-[#121212] rounded flex flex-col justify-around ">
        <div
          onClick={() => naivgate("/")}
          className="flex gap-3 items-center cursor-pointer pl-8"
        >
          <img className="w-6" src={assets.home_icon} alt="home-image" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center cursor-pointer gap-3 pl-8">
          <img className="w-6" src={assets.search_icon} alt="search-image" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="h-[85%] bg-[#121212] rounded">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Library</p>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="bg-[#242424] rounded p-4 flex flex-col items-start justify-start pl-4 gap-1 m-2">
          <h1 className="font-medium">Create your first playlist</h1>
          <p className="font-light text-sm tracking-wide ">
            it's easy we'll help you
          </p>
          <button className="rounded-full bg-white text-black py-1.5 px-4 text-[15px] mt-4 font-semibold ">
            Create Playlist
          </button>
        </div>
        <div className="bg-[#242424] rounded p-4 flex flex-col items-start justify-start pl-4 gap-1 m-2 mt-4">
          <h1 className="font-medium">Let's find some podcasts to follow</h1>
          <p className="font-light text-sm tracking-wide ">
            we'll keep you updated on new episodes{" "}
          </p>
          <button className="rounded-full bg-white text-black py-1.5 px-4 text-[15px] mt-4 font-semibold ">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
