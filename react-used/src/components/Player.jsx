import ReactPlayer from "react-player";

export default function Player() {
  return (
    <div className="flex max-w-[1000px] mx-auto sticky">
      <ReactPlayer
        url={"https://youtu.be/yomSywNstWI?si=qi9t9yq5D2WvHM-V"}
        width="100%"
        height="180px"
        // playing="true"
        controls="true"
      />
    </div>
  );
}
