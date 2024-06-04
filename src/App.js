import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchSection from "./components/SearchSection";
import SideBar from "./components/SideBar";
import Loading from "./components/Loading";

function App() {
  const [loadingState,setloadingState] = useState(false)
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen text-white">
      {loadingState && <Loading/>}
      <NavBar />
      <div className="flex justify-between w-full min-h-full">
        <SideBar />
        <SearchSection loadingState={setloadingState} />
      </div>
    </div>
  );
}

export default App;
