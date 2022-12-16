import React from 'react';
import '../styles/HeaderBtn.css'

/**
 * @param {string} props.type le nom de la classe
 * @param {function} props.click l'action effectuée quand on clique
 * @param {string} props.text le texte à afficher dans le bouton
 * @returns un bouton
 */
const HeaderBtn = (props) => {
    return (
        <>
            <button className={props.type || "headerBtn"} onClick={props.click}>{props.text}</button>
        </>
    );
};

export default HeaderBtn;
