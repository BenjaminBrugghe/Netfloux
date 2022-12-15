import React from "react";
import "../styles/ConnectionBtn.css";
import { useState } from "react";

const ConnectionButton = (props) => {
    const [log, setLog] = useState(false)

    function swap(){
        setLog(!log);
    }
  return (
    <>
      <button onClick={swap}> {log ? "Connecté" : "Se connecter"}</button>
    </>
  );
};

export default ConnectionButton;
