import React from "react";
import "../styles/VideoDescription.css";
import Logo_FB from "../datas/images/logoFB.png";
import Logo_Instagram from "../datas/images/logoInstagram.png";
import Logo_Twitter from "../datas/images/logoTwitter.png";
import Logo_Twitch from "../datas/images/logoTwitch.jpg";

const VideoDescription = () => {
  return (
    <div className="videoDescriptionContainer">
      <div className="flex-container">
        <div className="pub">PUBS</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>

        <div className="reseaux">
          <div className="facebook reseau">
            <img src={Logo_FB} alt="Logo FB" width="30" /> 
            <p>/ Facebook</p>
          </div>
          <div className="instagram reseau">
            <img src={Logo_Instagram} alt="Logo Instagram" width="30" /> 
            <p>/ Instagram</p>
          </div>
          <div className="twitter reseau">
            <img src={Logo_Twitter} alt="Logo Twitter" width="30" /> 
            <p>/ Twitter</p>
          </div>
          <div className="twitch reseau">
            <img src={Logo_Twitch} alt="Logo Twitch" width="30" /> 
            <p>/ Twitch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
