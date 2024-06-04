import { useState } from "react";
import MyBookshelfSection from "./components/MyBookshelfSection";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Loading from "./components/Loading";

export default function MyBookshelf() {
    const [loadingState,setloadingState] = useState(false)
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen text-white">
        {loadingState && <Loading/>}
      <NavBar />
      <div className="flex justify-between w-full min-h-full">
        <SideBar />
        <MyBookshelfSection loadingState={setloadingState} />
      </div>
    </div>
  );
}
