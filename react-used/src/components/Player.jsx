import ReactPlayer from "react-player";

export default function Player() {
  return (
    <div className="flex max-w-[1000px] mx-auto max-h-[800px]">
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=7sDY4m8KNLc"}
        width="100%"
        // height="100%"
        // playing="true"
        controls="true"
      />
    </div>
  );
}
