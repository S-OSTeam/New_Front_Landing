import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@components/molecules/input/Input';
import { Box } from '@mui/material';
import TextButton from '@components/molecules/button/textButton/TextButton';
import clsN from 'classnames';
import style from './style/Login.module.scss';

const Login = () => {
    const [formData, setFormData] = useState({
        id: '',
        pwd: '',
        pwdConfirm: '',
        userName: '',
        email: '',
    });
    const handleInputChange = (fieldName: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };
    const handleLogin = () => {
        console.log('Login Data:', formData);
    };
    const navigate = useNavigate();
    return (
        <Box className={clsN(`${style.signUpWrapper}`)}>
            <Input
                text="id"
                placeholder="아이디입력"
                className={clsN(`${style.input}`)}
                onChange={(value) => handleInputChange('id', value)}
            />
            <Input
                text="pwd"
                placeholder="비밀번호입력"
                className={clsN(`${style.input}`)}
                onChange={(value) => handleInputChange('pwd', value)}
            />

            <TextButton context="로그인" className={clsN(`${style.sendButton}`)} onClick={handleLogin} />

            <TextButton
                context="회원가입"
                className={clsN(`${style.sendButton}`)}
                onClick={() => {
                    navigate('/signup');
                }}
            />
        </Box>
    );
};

export default Login;
