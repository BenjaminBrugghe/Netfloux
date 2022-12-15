import React from "react";
import "../styles/Searchbar.css";

function Searchbar() {
  return (
    <div className="navbar">
      <input type="text" className="border" placeholder="Rechercher sur Netfloux..."></input>
    </div>
  );
}

export default Searchbar;