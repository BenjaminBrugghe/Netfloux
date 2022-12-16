import React from "react";
import "../styles/Playlist.css";

import PagnyCommend from "../datas/images/FlorentPagnyAimeLaVieMinia.jpg";

const Playlist = () => {
  return (
    <div class="playlist">
      <div>
        <p id="title">My Playlist</p>
      </div>
      <div id="commendList">
        <div class="commend">
          <img
            class="commendImage"
            src={PagnyCommend}
            alt="Chanson Recommandée"
          />
          <p class="songName">Florent Pagny - Aime La Vie</p>
        </div>
        <div class="commend">
          <img
            class="commendImage"
            src={PagnyCommend}
            alt="Chanson Recommandée"
          />
          <p class="songName">Florent Pagny - Aime La Vie</p>
        </div>
        <div class="commend">
          <img
            class="commendImage"
            src={PagnyCommend}
            alt="Chanson Recommandée"
          />
          <p class="songName">Florent Pagny - Aime La Vie</p>
        </div>
        <div class="commend">
          <img
            class="commendImage"
            src={PagnyCommend}
            alt="Chanson Recommandée"
          />
          <p class="songName">Florent Pagny - Aime La Vie</p>
        </div>
        <div class="commend">
          <img
            class="commendImage"
            src={PagnyCommend}
            alt="Chanson Recommandée"
          />
          <p class="songName">Florent Pagny - Aime La Vie</p>
        </div>
        <div class="commend">
          <img
            class="commendImage"
            src={PagnyCommend}
            alt="Chanson Recommandée"
          />
          <p class="songName">Florent Pagny - Aime La Vie</p>
        </div>
        <div class="commend">
          <img
            class="commendImage"
            src={PagnyCommend}
            alt="Chanson Recommandée"
          />
          <p class="songName">Florent Pagny - Aime La Vie</p>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
