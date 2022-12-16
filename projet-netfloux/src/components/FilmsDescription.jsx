import React from 'react';
import '../styles/filmsDescription.css'
import FilmPath from './FilmPath';
import HeaderBtn from "./HeaderBtn"
import { videoList } from '../datas/videoList';
import PubContainer from './PubContainer';

const FilmsDescription = ({ film }) => {
    return (
        <>
            <FilmPath film={videoList[0]} />
            <div className='filmDescriptionContainer'>
                <div className='filmImageContainer'>
                    <img className='filmImage' src={film.image} alt="" />
                </div>
                <div className='filmInformations'>
                    <h2 className='filmName'>{film.name}</h2>
                    <div className='filmInfos'>{film.category} - {film.country} - {film.releaseDate} - {film.subCategory} - {film.length}</div>
                    <div className='filmDescription'>{film.description}</div>
                    <div className="filmButtons">
                        <HeaderBtn type='descriptionBtnPlay descriptionBtn' text="Play" />
                        <HeaderBtn type='descriptionBtnBA descriptionBtn' text="Bande Annonce" />
                        <HeaderBtn type='descriptionBtnNotes descriptionBtn' text="Notes" />
                    </div>
                </div>
                <PubContainer />
            </div>
        </>
    );
};

export default FilmsDescription;
