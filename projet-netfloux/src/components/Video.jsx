import React from "react";
import "../styles/Video.css";

const Video = () => {
  return (
    <div className='MusiqueContainer'>
    <iframe 
      src="https://www.youtube.com/embed/A9oB3ZT37MQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
    </div>
  );
};

export default Video;
