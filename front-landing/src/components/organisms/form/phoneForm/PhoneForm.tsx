import React from 'react';
import { Box } from '@mui/material';
import Input from '@molecules/input/Input';
import clsN from 'classnames';

import style from './style/PhoneForm.module.scss';

interface PhoneFormProps {
    className?: string;
    text?: string;
    placeholder?: string;
}

const PhoneForm = ({ className, text, placeholder }: PhoneFormProps) => {
    return (
        <Box component="form" className={clsN(className, `${style.form}`)}>
            <Input text={text || ''} className={clsN(className, `${style.input}`)} placeholder={placeholder || ''} />
        </Box>
    );
};

export default PhoneForm;
