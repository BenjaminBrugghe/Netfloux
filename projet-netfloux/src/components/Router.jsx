import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import FilmsDescription from '../layouts/FilmsDescription'
import { videoList } from '../datas/videoList';
import Header from '../layouts/Header';
import LandingPage from '../layouts/LandingPage';
import SeriesDescription from '../layouts/SeriesDescription';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/films' element={<FilmsDescription film={videoList[0]} />} />
                    <Route path='/series' element={<SeriesDescription film={videoList[0]} />} />
                    <Route path='/*' element={<Header />} />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </>
    );
};

export default Router;
