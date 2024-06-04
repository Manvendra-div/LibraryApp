import "./App.css";
import NavBar from "./components/NavBar";
import SearchSection from "./components/SearchSection";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen text-white">
      <NavBar />
      <div className="flex justify-between w-full min-h-full">
        <SideBar />
        <SearchSection />
      </div>
    </div>
  );
}

export default App;
