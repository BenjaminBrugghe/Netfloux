import React from "react";
import "../styles/Header.css";
import logo from "../datas/images/LogoNetfloux.png";

import ConnectionButton from "../components/ConnectionBtn";
import HeaderBtn from "../components/HeaderBtn";
import Searchbar from "../components/Searchbar";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo Netfloux" />
      <div className="Categories">
        <HeaderBtn text="Films" />
        <HeaderBtn text="Séries" />
        <HeaderBtn text="Tendances" />
        <HeaderBtn text="Jeux" />
        <HeaderBtn text="Youtube" />
        <HeaderBtn text="Musique" />
      </div>
      <Searchbar />
      <ConnectionButton />
    </div>
  );
};

export default Header;
