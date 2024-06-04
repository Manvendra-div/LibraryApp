import { BiLibrary } from "react-icons/bi";

const NavBar = () => {
  return (
    <header className="flex justify-center items-center w-full backdrop-blur-lg bg-white/5 p-5 border-b-[0.5px] border-gray-500">
      <div className="flex justify-between items-center w-full lg:w-[80%] 2xl:w-[1440px]">
        <div className="flex items-center">
          <BiLibrary size={60} className="mr-2" />{" "}
          <span className="text-2xl lg:text-3xl font-bold">Book Shelf</span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
