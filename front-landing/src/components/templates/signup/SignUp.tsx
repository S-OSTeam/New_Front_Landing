import React from 'react';
import SignUp from '@components/organisms/signup/SignUp';
import { Stack } from '@mui/material';
import Heading from '@components/organisms/heading/Heading';
import clsN from 'classnames';
import style from './style/SignUp.module.scss';

const TemplateSignUp = () => {
    return (
        <Stack className={clsN(`${style.signupWrapper}`)}>
            <Heading content="ExampleTest" className={clsN(`${style.dummy}`)} />
            <SignUp />
        </Stack>
    );
};

export default TemplateSignUp;
