import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideMenu from "./SideMenu";
import VideoPlayer from "./VideoPlayer";

export default function Main() {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full items-center justify-center ">
      <div className="px-2 w-full">
        <VideoPlayer />
      </div>
      <SideMenu />
    </div>
  );
}
