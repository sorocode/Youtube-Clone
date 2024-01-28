import ReactPlayer from "react-player";
// import StickyVideo from "react-sticky-video";
// import "react-sticky-video/dist/index.css";

export default function Player() {
  return (
    <div className="playerContainer max-w-[768px] mx-auto sticky top-0">
      <ReactPlayer
        url={"https://youtu.be/yomSywNstWI?si=qi9t9yq5D2WvHM-V"}
        width="100%"
        // height="100%"
        playing="true"
        controls="true"
      />
    </div>
  );
}
