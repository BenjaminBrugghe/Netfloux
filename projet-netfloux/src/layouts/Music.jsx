import "../styles/Music.css";
import PlayingMusing from "../components/PlayingMusic.jsx";
import Playlist from "../components/Playlist.jsx";

import play from "../datas/images/FlorentPagnyAimeLaVie.jpg";

const MusicLayout = () => {
  return (
    <div class="layout">
      <PlayingMusing id="playingCard" musicName={"Florent Pagny - Aime La Vie"} musicCoverImage={play} musicTime={"4:00"}/>
      <Playlist/>
    </div>
  );
};

export default MusicLayout;
