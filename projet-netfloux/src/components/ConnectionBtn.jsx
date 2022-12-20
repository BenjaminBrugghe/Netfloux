import React from "react";
import "../styles/ConnectionBtn.css";
import { useState } from "react";

/**
 * Boutton de connexion et de déconnexion de son compte Netfloux
 * @returns Un bouton de connection
 */
const ConnectionButton = () => {
    const [log, setLog] = useState(false)

    function swap(){
        setLog(!log);
    }
  return (
    <>
      <button className="Connection" onClick={swap}> {log ? "Connecté" : "Se connecter"}</button>
    </>
  );
};

export default ConnectionButton;
