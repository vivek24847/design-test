import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="flex items-center justify-center w-full h-[105vh] bg-[rgb(165_152_243)] overflow-hidden">
      <div className="absolute top-10 z-20 left-80 w-20 h-20 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute z-20 bottom-10 left-10 w-40 h-40 rounded-full bg-pink-400 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-50 right-10 w-40 h-40 bg-yellow-300 rounded-full translate-x-1/2 -translate-y-1/4 z-0"></div>

      <div className="flex w-full max-w-[1200px] mx-8 overflow-hidden bg-white rounded-3xl shadow-lg z-10">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
