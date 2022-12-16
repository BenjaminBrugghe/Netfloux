import React from 'react';
import HeaderBtn from "../components/HeaderBtn"
import '../styles/seriesButtons.css'
import { useState } from 'react'

const SeriesButtons = () => {

    const [showSeasons, setShowSeasons] = useState(false);
    const [showEpisodes, setShowEpisodes] = useState(false);

    function seasonsClick() {
        setShowSeasons(!showSeasons);
    }

    function episodesClick() {
        setShowEpisodes(!showEpisodes)
    }

    return (
        <div className='seriesButtons'>
            <HeaderBtn click={seasonsClick} type='seriesBtn' text='Saisons' />
            {showSeasons &&
                <ul className='seasonsUL'>
                    <li className='seasonsLI'>Saison 1</li>
                    <li className='seasonsLI'>Saison 2</li>
                    <li className='seasonsLI'>Saison 3</li>
                    <li className='seasonsLI'>Saison 4</li>
                </ul>}
            <HeaderBtn click={episodesClick} type='seriesBtn' text='Episodes' />
            {showEpisodes &&
                <ul className='episodesUL'>
                    <li className='seasonsLI'>Episode 1</li>
                    <li className='seasonsLI'>Episode 2</li>
                    <li className='seasonsLI'>Episode 3</li>
                    <li className='seasonsLI'>Episode 4</li>
                    <li className='seasonsLI'>Episode 5</li>
                    <li className='seasonsLI'>Episode 6</li>
                    <li className='seasonsLI'>Episode 7</li>
                    <li className='seasonsLI'>Episode 8</li>
                    <li className='seasonsLI'>Episode 9</li>
                </ul>
            }
        </div>
    );
};

export default SeriesButtons;
