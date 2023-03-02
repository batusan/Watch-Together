import ChatBubble from "./ChatBubble";
import { client } from "../../../../const/SocketService";
import { useEffect, useState } from "react";

export default function ChatContext(props) {
  const [chatArray, setchatArray] = useState([]);

  useEffect(() => {
    client.on("message_send", (data) => {
      if (data)
        setchatArray((prevArr) => [
          ...prevArr,
          { username: data.author, context: data.text },
        ]);
    });

    client.on("room_getdata", (data) => {
      setchatArray(data.room.chat);
    });

    return () => {
      client.off("room_getdata");
      client.off("message_send");
    };
  }, []);

  return (
    <div className="px-4 h-[50vh] lg:h-[80vh] w-full flex flex-col justify-end overflow-y-scroll">
      {chatArray?.map((chat) => {
        return <ChatBubble username={chat.username} context={chat.context} />;
      })}
    </div>
  );
}
