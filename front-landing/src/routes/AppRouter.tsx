import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Phone } from '@pages/Phone';
import { Login } from '@pages/Login';
import { SignUp } from '@pages/SignUp';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};
