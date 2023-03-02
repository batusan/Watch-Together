import { useState } from "react";
import { client, userData } from "../../../../const/SocketService";

export default function Settings() {
  const [urlValue, seturlValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      client.emit("video_set", {
        roomId: userData.currentRoom,
        user: userData.name,
        url: urlValue,
      });
    }
  };

  return (
    <div className="h-full w-full px-4 ">
      <label for="url" className="block mb-2 text-sm font-medium text-white">
        Link
      </label>
      <input
        value={urlValue}
        type={"text"}
        name="url"
        id="url"
        onChange={(e) => seturlValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder="youtube.com/blablabla"
      />
    </div>
  );
}
