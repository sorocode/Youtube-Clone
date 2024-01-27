import { FaEllipsisVertical } from "react-icons/fa6";

import img_1 from "../assets/1.png";
import img_2 from "../assets/2.png";
import img_3 from "../assets/3.png";
const images = [img_1, img_2, img_3];
function UpNext() {
  return (
    <div className="UpNextContainer flex-col">
      <div className="UpNextTxt text-gray-500 ml-1">
        <p>다음 동영상</p>
      </div>
      <div className="NextVideoList mt-2">
        <ul>
          {images.map((item) => (
            <li key={item} className="flex mb-2">
              <img src={item} className="h-[150px] min-w-72 rounded-lg ml-2" />
              <div className="info flex">
                <div className="metadata ml-2">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam
                  </p>
                  <div className="uploader text-gray-700">Pugtube</div>
                  <p className="views text-gray-700">조회수 4510만회</p>
                </div>
                <div className="infoIcon mx-2 my-2 text-xl">
                  <button>
                    <FaEllipsisVertical />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UpNext;
