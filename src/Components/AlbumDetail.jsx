import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router";
import { albumsData, assets, songsData } from "../assets/assets";
import PlayerContext from "../context/PlayerContext";

const AlbumDetail = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  const { playWithId } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-10 gap-8 md:flex-row md:items-end">
        <img className="rounded w-48" src={albumData.image} alt="" />

        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-3xl font-bold md:text-7xl mb-4">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-2">
            <img
              className="inline-block w-4"
              src={assets.spotify_logo}
              alt=""
            />
            <b> Spotify</b> • 1,523,765 likes
            <b> • 50 songs, </b>
            about 2 hrs 30 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-8 mb-1 pl-4 text-slate-400">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="" />
      </div>

      <hr />

      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center cursor-pointer text-[#a7a7a7] hover:bg-neutral-800"
        >
          <p className="text-white">
            <b className="text-slate-400 mr-5">{index + 1}</b>
            <img className="w-10 inline mr-5" src={item.image} alt="" />
            {item.name}
          </p>

          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default AlbumDetail;
