import React, { useContext, useRef } from "react";
import { songsData } from "../assets/assets";
import { assets } from "../assets/assets";
import PlayerContext from "../context/PlayerContext";

const Player = () => {
  const {
    seekBg,
    seekValue,
    play,
    pause,
    playSong,
    duration,
    track,
    next,
    previous,
    seekPlayerBar,
    audioRef,
  } = useContext(PlayerContext);

  const volumnBar = useRef();
  const volumnValue = useRef();

  const handleVolumeChange = (e) => {
    const volumeBarWidth = volumnBar.current.offsetWidth;
    const clickPosition = e.nativeEvent.offsetX;
    const newVolume = clickPosition / volumeBarWidth; // Calculate the volume (0 to 1)

    audioRef.current.volume = newVolume; // Set the audio volume
    volumnValue.current.style.width = `${newVolume * 100}%`; // Adjust the width of the filled volume bar
  };

  return (
    <div className="h-[10%] bg-black text-white flex items-center justify-between px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 18)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt=""
          />

          {playSong ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        <div className="flex items-center gap-5">
          <p>
            {duration.currentTime.minute}:{duration.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekPlayerBar}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekValue}
              className="h-1 border-none w-0 bg-green-900 rounded-full"
            />
          </div>
          <p>
            {duration.totalTime.minute}:{duration.totalTime.second}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-70">
        <img className="w-4" src={assets.play_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />

        {/* Volume Controller */}
        <div
          onClick={handleVolumeChange}
          ref={volumnBar}
          className="w-20 bg-slate-50 rounded h-1 cursor-pointer"
        >
          <div
            ref={volumnValue}
            className="h-1 w-0 bg-green-700 rounded cursor-pointer"
          ></div>
        </div>

        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
