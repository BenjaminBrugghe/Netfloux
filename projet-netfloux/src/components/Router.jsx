import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' />
                    <Route path='/*' />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </div>
    );
};

export default Router;
