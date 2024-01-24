import React from 'react';
import { Box } from '@mui/material';
import Input from '@molecules/input/Input';
import clsN from 'classnames';

import style from './style/PhoneForm.module.scss';

interface PhoneFormProps {
    className?: string;
    text?: string;
    placeholder?: string;
    //
    onChange?: (value: string) => void;
}

const PhoneForm: React.FC<PhoneFormProps> = ({ className, text, placeholder, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };
    return (
        <Box component="form" className={clsN(className, `${style.form}`)}>
            <Input
                text={text || ''}
                className={clsN(className, `${style.input}`)}
                placeholder={placeholder || ''}
                onChange={handleChange}
            />
        </Box>
    );
};

export default PhoneForm;
