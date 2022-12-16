import React from "react";
import "../styles/PlayingMusic.css";

import stopBtn from "../datas/images/stop.png";
import previousBtn from "../datas/images/previous.png";
import playBtn from "../datas/images/play.png";
import nextBtn from "../datas/images/next.png";

const PlayingMusing = ({ musicName, musicCoverImage, musicTime }) => {
  console.log(musicCoverImage);

  return (
    <div className="playingMusic">
      <img src={musicCoverImage} alt="Musique en cours"></img>
      <div id="progressBar"><div id="chargingBar"></div></div>
      <div className="infos">
        <div>{musicName}</div>
        <div>2:00 / {musicTime}</div>
      </div>
      <div className="Buttons">
        <img id="stopBtn" src={stopBtn} alt="Stop Button" />
        <img src={previousBtn} alt="Previous Button" />
        <img id="playBtn" src={playBtn} alt="Play Button" />
        <img src={nextBtn} alt="Next Button" />
      </div>
    </div>
  );
};

export default PlayingMusing;
