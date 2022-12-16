import React from "react";
import "../styles/Header.css";
import logo from "../datas/images/LogoNetfloux.png";

import ConnectionButton from "../components/ConnectionBtn";
import HeaderBtn from "../components/HeaderBtn";
import Searchbar from "../components/Searchbar";

const Header = () => {
  return (
    <div className="header">
      <img class="logo" src={logo} alt="Logo Netfloux" />
      <div class="Categories">
        <HeaderBtn onClick={null} text="Films" />
        <HeaderBtn onClick={null} text="Séries" />
        <HeaderBtn onClick={null} text="Tendances" />
        <HeaderBtn onClick={null} text="Jeux" />
        <HeaderBtn onClick={null} text="Youtube" />
        <HeaderBtn onClick={null} text="Musique" />
      </div>
      <Searchbar />
      <ConnectionButton />
    </div>
  );
};

export default Header;
