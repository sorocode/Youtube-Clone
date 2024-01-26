import ReactPlayer from "react-player";

export default function Player() {
  return (
    <div className="flex justify-center">
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=7sDY4m8KNLc"}
        width="100%"
        playing="true"
        controls="true"
      />
    </div>
  );
}
