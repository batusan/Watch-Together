export default function ChatBubble(props) {
  return (
    <div className="flex items-end my-1">
      <div className="h-12 w-12 aspect-square bg-red-200 rounded-lg mr-2">
        PP
      </div>
      <div className="flex flex-col h-auto w-full px-4 py-2 border border-white/20 rounded-lg rounded-bl-none">
        <div className="flex w-full justify-between text-white/40 text-sm">
          <div>{props.username}</div> <div>12.06</div>
        </div>
        <div className="text-sm break-all">{props.context}</div>
      </div>
    </div>
  );
}
