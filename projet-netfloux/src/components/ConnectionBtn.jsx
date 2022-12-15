import React from "react";
import "../styles/ConnectionBtn.css";
import { useState } from "react";

const ConnectionButton = (props) => {
    const [log, checklog] = useState(false)

    function swap(){
        checklog(!log);
    }
  return (
    <>
      <button onClick={swap}> {log ? "Connecté" : "Se connecter"}</button>
    </>
  );
};

export default ConnectionButton;
