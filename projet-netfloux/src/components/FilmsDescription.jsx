import React from 'react';
import '../styles/filmsDescription.css'
import HeaderBtn from "./HeaderBtn"

const FilmsDescription = ({ film }) => {
    return (
        <div className='filmDescriptionContainer'>
            <div className='filmImageContainer'>
                <img className='filmImage' src={film.image} alt="" />
            </div>
            <div className='filmInformations'>
                <h2 className='filmName'>{film.name}</h2>
                <div className='filmInfos'>{film.category} - {film.country} - {film.releaseDate} - {film.category} - {film.length}</div>
                <div className='filmDescription'>{film.description}</div>
                <div className="filmButtons">
                    <HeaderBtn text="Play" />
                    <HeaderBtn text="Bande Annonce" />
                    <HeaderBtn text="Notes" />
                </div>
            </div>
        </div>
    );
};

export default FilmsDescription;
