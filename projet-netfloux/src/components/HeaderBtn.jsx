import React from 'react';
import '../styles/HeaderBtn.css'

/**
 * 
 * @param {function} onClick L'action quand on clique
 * @param {string} text le texte à afficher dans le bouton
 * @returns un bouton
 */
const HeaderBtn = ({ onClick, text }) => {
    return (
        <>
            <button className='headerBtn' onClick={onClick}>{text}</button>
        </>
    );
};

export default HeaderBtn;
