import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Users from "./Users";
import { client } from "../../../const/SocketService";
import Chat from "./Chat";
import Settings from "./Settings";

export default function SideMenu() {
  const [isChatHidden, setisChatHidden] = useState(false);
  const notifyNewcomer = (user) => toast(`Wow ${user} joined to room`);

  useEffect(() => {
    client.on("user_join", (data) => {
      if (data) {
        notifyNewcomer(data.user);
      }
    });

    return () => {
      client.off("user_join");
    };
  }, []);

  return (
    <div className="mt-6 lg:mt-0 lg:pt-2 h-[40%] lg:h-full w-full lg:w-[25vw] flex flex-col">
      <div className="flex justify-between px-4 my-2 gap-3">
        <button
          className="text-white w-full p-3 rounded-lg hover:bg-gray-600/30 focus:outline-none focus:ring-4 focus:ring-gray-700 font-medium text-sm px-5 py-2.5 mr-2 mb-2 selected"
          onClick={() => setisChatHidden(false)}
        >
          Chat
        </button>
        <button
          className="text-white w-full p-3 rounded-lg hover:bg-gray-600/30 focus:outline-none focus:ring-4 focus:ring-gray-700 font-medium text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={() => setisChatHidden(true)}
        >
          Settings
        </button>
      </div>
      {isChatHidden ? <Settings /> : null}
      <Chat hidden={isChatHidden} />
    </div>
  );
}

/*<Users className="h-6 w-6 hover:text-[#99edcc]" />*/
