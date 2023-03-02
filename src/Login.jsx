import Header from "../components/header";
import Login from "../components/login";
import { useDocumentTitle } from "../hooks/setTitle";
import { client } from "../const/SocketService";
import { useEffect } from "react";

client.connect("localhost:3000");

export default function Home() {
  
  useEffect(() => {
    console.log(client.connected);
  }, [client.connected]);

  const [document_title, setDoucmentTitle] = useDocumentTitle("Welcome To WTG");

  return (
    <div className="h-full lg:h-screen w-full lg:w-full bg-[#1A191E] text-[#f8f8fb] flex flex-col lg:flex-row">
      <Header />
      <Login />
    </div>
  );
}
