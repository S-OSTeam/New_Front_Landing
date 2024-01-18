import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Phone } from '@pages/Phone';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Phone />} />
        </Routes>
    );
};
