import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import Pause from "../../../assets/icons/Pause";
import Play from "../../../assets/icons/Play";
import { client, userData } from "../../../const/SocketService";

export default function VideoPlayer(props) {
  const player = useRef();

  const [state, setstate] = useState({
    url: "https://www.youtube.com/watch?v=4dV96eVRrjk",
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  });

  useEffect(() => {
    client.emit("room_getdata", {
      roomId: userData.currentRoom,
    });

    client.on("room_getdata", (data) => {
      console.log("roomdata", data);
      setstate((prevValue) => ({ ...prevValue, url: data.room.url }));
    });

    client.on("video_set", (data) => {
      if (data) {
        setstate((prevValue) => ({ ...prevValue, url: data.url }));
      }
    });

    client.on("video_play", (data) => {
      if (data) {
        setstate((prevValue) => ({ ...prevValue, playing: data.isPlaying }));
      }
    });

    client.on("video_seek", (data) => {
      if (data) {
        player.current.seekTo(data.played);
      }
    });

    return () => {
      client.off("room_getdata");
      client.off("video_set");
      client.off("video_play");
      client.off("video_seek");
    };
  }, []);

  const handleSeekMouseDown = (e) => {
    setstate((prevVal) => ({ ...prevVal, seeking: true }));
  };

  const handleSeekChange = (e) => {
    setstate((prevVal) => ({ ...prevVal, played: parseFloat(e.target.value) }));
  };

  const handleSeekMouseUp = (e) => {
    setstate((prevVal) => ({ ...prevVal, seeking: false }));
    //player.current.seekTo(parseFloat(e.target.value));
    client.emit("video_seek", {
      roomId: userData.currentRoom,
      user: userData.name,
      played: parseFloat(e.target.value),
    });
  };

  const handleProgress = (progress) => {
    if (!state.seeking) {
      setstate((prevVal) => ({
        ...prevVal,
        played: progress.played,
      }));
    }
  };

  const handlePlay = () => {
    console.log("onPlay");
    setstate((prevValue) => ({ ...prevValue, playing: true }));
    client.emit("video_play", {
      roomId: userData.currentRoom,
      user: userData.name,
      isPlaying: true,
    });
  };

  const handlePause = () => {
    console.log("onPause");
    setstate((prevValue) => ({ ...prevValue, playing: false }));
    client.emit("video_play", {
      roomId: userData.currentRoom,
      user: userData.name,
      isPlaying: false,
    });
  };

  const handlePlayPause = () => {
    setstate((prevValue) => ({ ...prevValue, playing: !state.playing }));
    client.emit("video_play", {
      roomId: userData.currentRoom,
      user: userData.name,
      isPlaying: !state.playing,
    });
  };

  return (
    <>
      <div className="w-[95vw] lg:w-full aspect-video bg-gray-800/40 rounded-lg mt-4 player-wrapper">
        <ReactPlayer
          ref={player}
          playing={state.playing}
          width="100%"
          height="100%"
          className="react-player"
          controls={true}
          url={state.url}
          onProgress={handleProgress}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </div>
      <div className="h-20 w-full bg-gray-700/10 rounded-b-lg flex flex-col">
        <div className="w-full h-auto flex justify-center items-center my-2 bg-red">
          <div
            className="rounded-full bg-[#2910b9] flex justify-center items-center p-2 hover:cursor-pointer"
            onClick={handlePlayPause}
          >
            {state.playing ? <Pause /> : <Play />}
          </div>
        </div>
        <div className="w-full h-auto px-4">
          <input
            id="default-range"
            value={state.played}
            type="range"
            min={0}
            max={0.999999}
            step="any"
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
      </div>
    </>
  );
}
