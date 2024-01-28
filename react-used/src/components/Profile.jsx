import griffon from "../assets/griffon.png";
import { useState } from "react";

export default function Profile() {
  const [isSubs, setIsSubs] = useState(false);
  function handleSubClick() {
    setIsSubs(!isSubs);
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="profileContainer flex w-11 h-11 ml-2">
          <img className="profileImg mr-2" src={griffon} alt="griffon image" />
          <div className="flex-col">
            <div className="profileName text-lg">PugIsYours</div>
            <div className="subscribers text-sm">구독자 100만명</div>
          </div>
        </div>
        <div className="subscribeBtn border-red mr-3">
          <button
            onClick={handleSubClick}
            className="transition ease-linear active:-translate-y-1 hover:scale-110 mr-2"
          >
            {isSubs ? (
              <span>구독중</span>
            ) : (
              <span className="text-red text-lg rounded-lg p-2">구독</span>
            )}
          </button>
        </div>
      </div>
      <hr className="my-3" />
    </div>
  );
}
