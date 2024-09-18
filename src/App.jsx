import { useContext } from "react";
import Display from "./Components/Display";
import Player from "./Components/Player";
import SideBar from "./Components/SideBar";
import PlayerContext from "./context/PlayerContext";

function App() {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <SideBar />
          <Display />
        </div>
        <Player />
        <audio preload="auto" src={track.file} ref={audioRef}></audio>
      </div>
    </>
  );
}

export default App;
