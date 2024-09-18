import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

const PlayerContext = createContext();

export const PlayerProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekValue = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playSong, setPlaySong] = useState(false);
  const [duration, setDuration] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // play song function
  const play = () => {
    audioRef.current.play();
    setPlaySong(true);
  };

  // pause song function
  const pause = () => {
    audioRef.current.pause();
    setPlaySong(false);
  };

  // play song when click on song
  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlaySong(true);
  };

  // navigate to next song function
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlaySong(true);
    }
  };

  // navigate to previous song function
  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlaySong(true);
    }
  };

  // track the seekBar duration
  const seekPlayerBar = (e) => {
    // console.log(e);
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekValue.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";

        setDuration({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBg,
    seekValue,
    track,
    setTrack,
    playSong,
    setPlaySong,
    duration,
    setDuration,
    play,
    pause,
    playWithId,
    next,
    previous,
    seekPlayerBar,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
