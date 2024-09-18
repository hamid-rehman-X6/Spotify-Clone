import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router";
import DisplayHome from "./DisplayHome";
import AlbumDetail from "./AlbumDetail";
import { albumsData } from "../assets/assets";

const Display = () => {
  const reference = useRef();
  const location = useLocation();
  const Album = location.pathname.includes("album");
  const albumId = Album ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (Album) {
      reference.current.style.background = `linear-gradient(${bgColor} , #000000)`;
    } else {
      reference.current.style.background = "#121212";
    }
  });
  return (
    <div
      ref={reference}
      className="w-[100%] m-2 pt-4 px-6 text-white overflow-auto lg:w-[75%] lg:ml-0 bg-[#121212] rounded "
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
      </Routes>
    </div>
  );
};

export default Display;
