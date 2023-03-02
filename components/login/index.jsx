import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client, setUserData } from "../../const/SocketService";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    client.on("room_join", (data) => {
      console.log(data.message);

      /**
       * TODO :
       * - Popup message
       */

      if (data.code == 200) {
        navigate("/lobby", {
          state: {
            id: data.user.id,
            currentRoom: data.user.currentRoom,
            name: data.user.name,
          },
        });

        setUserData({
          id: data.user.id,
          currentRoom: data.user.currentRoom,
          name: data.user.name,
        });
      }
    });

    return () => {
      client.off("room_join");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    client.emit("room_join", {
      roomId: formJson.roomId,
      username: formJson.username,
      id: client.id,
    });
  };

  return (
    <section className=" h-full w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          WTG
        </a>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0  border-gray-700/50">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Join Room <br />{" "}
              <span className="text-white/10">If not exist create room :)</span>
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="xXxWatcherxXx"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="roomId"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Room Id
                </label>
                <input
                  type="text"
                  name="roomId"
                  id="roomId"
                  placeholder="Room Id"
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required={true}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border  roundedfocus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="terms"
                    className="font-light text-gray-300"
                    required
                  >
                    I accept the{" "}
                    <a
                      className="font-medium hover:underline text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
