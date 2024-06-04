import MyBookshelfSection from "./components/MyBookshelfSection";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default function MyBookshelf() {
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen text-white">
      <NavBar />
      <div className="flex justify-between w-full min-h-full">
        <SideBar />
        <MyBookshelfSection />
      </div>
    </div>
  );
}
