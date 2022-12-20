import React from 'react';
import '../styles/FilmPath.css';

const FilmPath = ({ film }) => {
    return (
        <div className="path">
            <p className='pathTitleBold'>Accueil</p>
            <p className='pathTitle'> / </p>
            <p className='pathTitleBold'>Films</p>
            <p className='pathTitle'> / </p>
            <p className='pathTitleBold'>Action</p>
            <p className='pathTitle'> / </p>
            <p className='pathTitle'>{film.name}</p>
        </div>
    );
};

export default FilmPath;