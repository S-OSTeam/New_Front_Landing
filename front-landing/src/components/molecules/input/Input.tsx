import React from 'react';
import { FormControl } from '@mui/material';
import InputComponent from '@components/atoms/input/InputComponent';
import Text from '@components/atoms/text/Text';
import clsN from 'classnames';
import style from './style/Input.module.scss';

interface InputProps {
    placeholder: string;
    className: string;
    text: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}

const Input = ({ className, text, placeholder, onChange }: InputProps) => {
    return (
        <FormControl variant="standard">
            <Text text={text} />
            <InputComponent
                className={clsN(className, `${style.form}`)}
                placeholder={placeholder}
                onChange={onChange}
            />
        </FormControl>
    );
};

export default Input;
