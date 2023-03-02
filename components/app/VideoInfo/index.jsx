import { useState } from "react";

export default function VideoInfo(props) {
  const [urlValue, seturlValue] = useState(
    "https://www.youtube.com/watch?v=ysz5S6PUM-U"
  );
  const { url, seturl } = props;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      seturl(urlValue);
    }
  };

  return (
    <div className="w-full">
      <input
        type={"text"}
        value={urlValue}
        onChange={(e) => seturlValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent border border-white/10 rounded-md w-full p-2 text-sm focus:outline-1 focus:ring-white/10"
        placeholder="Put some link"
      />
    </div>
  );
}
