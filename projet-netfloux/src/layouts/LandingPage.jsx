import React from 'react';
import Rows from '../components/Rows';
import '../styles/landingPage.css';
import { videoList } from '../datas/videoList';

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <Rows list={videoList} title="Films" />
            <Rows list={videoList} title="Séries" />
            <Rows list={videoList} title="Youtube" />
        </div>
    );
};

export default LandingPage;