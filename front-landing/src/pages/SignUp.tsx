import React from 'react';
import { Box } from '@mui/material';
import TemplateSignUp from '@components/templates/signup/SignUp';
import clsN from 'classnames';
import style from './style/Signup.module.scss';

export const SignUp = () => {
    return (
        <Box component="div" className={clsN(`${style.signupWrapper}`)}>
            <TemplateSignUp />
        </Box>
    );
};
