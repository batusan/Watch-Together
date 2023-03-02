import Play from "../../../assets/icons/Play";

export default function VideoControls() {
  return (
    <div className="h-20 w-full bg-gray-700/10 rounded-b-lg flex flex-col">
      <div className="w-full h-auto flex justify-center items-center my-2 bg-red">
        <div className="rounded-full bg-[#2910b9] flex justify-center items-center p-2 hover:cursor-pointer">
          <Play />
        </div>
      </div>
      <div className="w-full h-auto px-4">
        <input
          id="default-range"
          type="range"
          value="50"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </div>
  );
}
