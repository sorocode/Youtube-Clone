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
          <p className="text-base">80</p>
        </div>
        <div>
          <button>
            <FaThumbsDown />
          </button>
          <p className="text-base">3</p>
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
  return (
    <div>
      <span className="text-xl mx-2">
        Cozy Daily Life With Pug | plog | daily{" "}
      </span>
      <button className="text-3xl">
        <FaCaretDown />
      </button>
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
