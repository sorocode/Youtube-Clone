import griffon from "../assets/griffon.png";

export default function Profile() {
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
          <button className="text-red hover:bg-rose-100 text-lg rounded-lg p-2">
            구독
          </button>
        </div>
      </div>
      <hr className="my-3" />
    </div>
  );
}
