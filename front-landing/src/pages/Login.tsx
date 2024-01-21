import React from 'react';
import { Box } from '@mui/material';
import TemplateLogin from '@components/templates/login/Login';
import clsN from 'classnames';
import style from './style/Login.module.scss';

export const Login = () => {
    return (
        <Box component="div" className={clsN(`${style.loginWrapper}`)}>
            <TemplateLogin />
        </Box>
    );
};
