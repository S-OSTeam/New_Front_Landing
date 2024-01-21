import React from 'react';
import Login from '@components/organisms/login/Login';
import { Stack } from '@mui/material';
import Heading from '@components/organisms/heading/Heading';
import clsN from 'classnames';
import style from './style/Login.module.scss';

const TemplateLogin = () => {
    return (
        <Stack className={clsN(`${style.loginWrapper}`)}>
            <Heading content="ExampleTest" className={clsN(`${style.dummy}`)} />
            <Login />
        </Stack>
    );
};

export default TemplateLogin;
