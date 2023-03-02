import Cog from "../../assets/icons/Cog";
import Home from "../../assets/icons/home";
import Screen from "../../assets/icons/screen";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="text-[#f8f8fb] h-12 lg:h-screen w-full lg:w-16 flex lg:flex-col justify-center items-center gap-4 lg:gap-8 pt-2">
      <div className="relative" onClick={() => navigate("/")}>
        <div className="h-6 w-6 bg-[#99edcc] absolute -top-8 lg:top-0 lg:-left-9 rotate-45 rounded-lg"></div>
        <Home className="h-6 w-6 hover:text-[#99edcc] hover:cursor-pointer" />
      </div>
      <div className="relative" onClick={() => navigate("/login")}>
        <div className="h-6 w-6 bg-[#99edcc] absolute -top-8 lg:top-0 lg:-left-9 rotate-45 rounded-lg"></div>
        <Screen className="h-6 w-6 hover:text-[#99edcc] hover:cursor-pointer" />
      </div>
      {/*

      <div className="relative" onClick={() => navigate("/settings")}>
        <div className="h-6 w-6 bg-[#99edcc] absolute -top-8 lg:top-0 lg:-left-9 rotate-45 rounded-lg"></div>
        <Cog className="h-6 w-6 hover:text-[#99edcc] hover:cursor-pointer" />
      </div>

        */}
    </div>
  );
}
