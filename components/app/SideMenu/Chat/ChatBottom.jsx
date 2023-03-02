import { useEffect, useState } from "react";
import PaperAirplane from "../../../../assets/icons/PaperAirplane";

import { client, userData } from "../../../../const/SocketService";

export default function ChatBottom(props) {
  const [chatInput, setchatInput] = useState("");
  const { setchatArray } = props;

  const sendMessage = () => {
    if (chatInput.length > 0) {
      client.emit("message_send", {
        roomId: userData.currentRoom,
        author: userData.name,
        text: chatInput,
      });
      setchatInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && chatInput.length > 0) {
      client.emit("message_send", {
        roomId: userData.currentRoom,
        author: userData.name,
        text: chatInput,
      });
      setchatInput("");
    }
  };

  return (
    <div className="h-16 lg:h-18 w-[95vw] lg:w-[90%] border border-white/10 mx-auto my-4 p-4 rounded-lg flex justify-start items-center">
      <input
        className="h-full w-full lg:text-sm lg:mr-2 bg-transparent outline-none focus:outline-none border-0 p-4"
        placeholder="Type a message"
        value={chatInput}
        onChange={(e) => setchatInput(e.target.value)}
        onKeyDown={handleKeyDown}
        type={"text"}
      />
      <button onClick={sendMessage}>
        <PaperAirplane className="h-6 w-6" />
      </button>
    </div>
  );
}
