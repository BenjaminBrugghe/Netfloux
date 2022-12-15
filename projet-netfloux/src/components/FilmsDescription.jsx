import React from 'react';
import '../styles/filmsDescription.css'

const FilmsDescription = ({ film }) => {
    console.log(film)
    return (
        <div className='filmDescriptionContainer'>
            <h2 className='filmName'>{film.name}</h2>
            <div className='filmInfos'>{film.category} - {film.country} - {film.releaseDate} - {film.category} - {film.length}</div>
            <div className='filmDescription'>{film.description}</div>
        </div>
    );
};

export default FilmsDescription;
