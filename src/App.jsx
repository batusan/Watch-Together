import { useLocation } from "react-router-dom";
import Main from "../components/app";
import Header from "../components/header";
import { useDocumentTitle } from "../hooks/setTitle";

export default function App() {
  const { state } = useLocation();
  const [document_title, setDoucmentTitle] = useDocumentTitle("Welcome To WTG");

  return (
    <div className="h-auto lg:h-screen w-full lg:w-full bg-[#1A191E] text-[#f8f8fb] flex flex-col lg:flex-row">
      <Header />
      <Main />
    </div>
  );
}
