import { useState } from "react";
import {
  FaCaretDown,
  FaFlag,
  FaPlus,
  FaShare,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
function HashTags() {
  const hashtags = ["pug", "plog", "tindog"];
  return (
    <ul className="flex">
      {hashtags.map((hashtag) => (
        <li key={hashtag} className="ml-2 mt-2">
          <span className="text-blue">#{hashtag}</span>
        </li>
      ))}
    </ul>
  );
}
function Icons() {
  return (
    <div className="max-w-[500px] mt-5">
      <div className="flex justify-around items-center text-xl">
        <div>
          <button className="text-blue">
            <FaThumbsUp />
          </button>
          <p className="text-base">8만</p>
        </div>
        <div>
          <button>
            <FaThumbsDown />
          </button>
          <p className="text-base">0</p>
        </div>
        <div>
          <button>
            <FaShare />
          </button>
          <p className="text-sm">공유</p>
        </div>
        <div>
          <button>
            <FaPlus />
          </button>
          <p className="text-sm">추가</p>
        </div>
        <div>
          <button>
            <FaFlag />
          </button>
          <p className="text-sm">신고</p>
        </div>
      </div>
    </div>
  );
}
function Title() {
  const [btnClass, setBtnClass] = useState("text-3xl");
  const [titleClass, setTitleClass] = useState(
    "titleTxt text-xl mx-2 line-clamp-2"
  );

  function handleClamp() {
    setBtnClass((prevClass) =>
      prevClass.includes("rotate-180")
        ? "text-3xl transition duration-500 ease-in-out"
        : "text-3xl transition duration-500 rotate-180"
    );
    setTitleClass((prevClass) =>
      prevClass.includes("line-clamp-2")
        ? "titleTxt text-xl mx-2"
        : "titleTxt text-xl mx-2 line-clamp-2"
    );
  }

  return (
    <div>
      <div className="flex">
        <span className={titleClass}>
          Cozy Daily Life With Pug | plog | daily Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Neque, architecto id ducimus,
          laudantium, tempora officiis ratione nihil ut vel pariatur quam
          nesciunt minus. Similique voluptates exercitationem cum explicabo, a
          minus?{" "}
        </span>
        <div>
          <button className={btnClass} onClick={handleClamp}>
            <FaCaretDown />
          </button>
        </div>
      </div>
      <p className="mx-3 my-2">조회수 100만회 3개월 전</p>
      <Icons />
      <hr className="my-3" />
    </div>
  );
}
export default function Info() {
  return (
    <>
      <HashTags />
      <Title />
    </>
  );
}
