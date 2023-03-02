import { useState } from "react";
import ChatBottom from "./ChatBottom";
import ChatContext from "./ChatContext";

export default function Chat(props) {
  const [chatArray, setchatArray] = useState([]);

  return (
    <div
      className={`w-full h-full flex-col justify-between lg:justify-center ${
        props.hidden ? "hidden" : "flex"
      }`}
    >
      <ChatContext chatArray={chatArray} />
      <ChatBottom setchatArray={setchatArray} />
    </div>
  );
}
