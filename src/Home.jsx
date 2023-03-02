import Header from "../components/header";
import HomePage from "../components/home";
import { useDocumentTitle } from "../hooks/setTitle";

export default function Home() {
  const [document_title, setDoucmentTitle] = useDocumentTitle("Welcome To WTG");

  return (
    <div className="h-full lg:h-screen w-full lg:w-full bg-[#1A191E] text-[#f8f8fb] flex flex-col lg:flex-row">
      <Header />
      <HomePage />
    </div>
  );
}
