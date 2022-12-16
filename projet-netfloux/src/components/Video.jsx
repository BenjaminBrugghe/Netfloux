import React from "react";
import "../styles/Video.css";

const Video = () => {
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/BBJa32lCaaY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Video;
