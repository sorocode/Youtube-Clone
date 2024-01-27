import { FaYoutube, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Header() {
  return (
    <div className="headerIconContainer bg-black flex justify-between pt-3 pl-3 h-16">
      <div className="headerIcon text-red flex items-center text-3xl">
        <button className="mr-1">
          <FaYoutube />
        </button>
        <label className="headerMark text-white font-roboto font-extrabold ">
          Youtube
        </label>
      </div>
      <div className="text-white flex text-3xl mr-2 items-center">
        <div className="search">
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="ioEllips">
          <button>
            <IoEllipsisVertical />
          </button>
        </div>
      </div>
    </div>
  );
}
