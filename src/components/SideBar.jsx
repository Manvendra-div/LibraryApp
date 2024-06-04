import { GiBookshelf } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigation = useNavigate()
  return (
    <aside className={`w-[12%] lg:w-[18%] border-r-[0.5px] border-gray-500 min-h-screen text-base lg:text-lg transition-all duration-300`}>
        <button className="flex justify-center lg:justify-normal items-center w-full bg-white/10 hover:opacity-80 px-2 lg:px-10 py-2 mb-1" onClick={() => navigation("/")}>
            <CiSearch className="lg:mr-2"/> <p className="hidden lg:block">Search</p>
        </button>
        <button className="flex justify-center lg:justify-normal items-center w-full bg-white/10 hover:opacity-80 px-2 lg:px-10 py-2 mb-1" onClick={() => navigation("/mybookshelf")}>
            <GiBookshelf className="lg:mr-2"/><p className="hidden lg:block">My Bookshelf</p>
        </button>
    </aside>
  )
}
