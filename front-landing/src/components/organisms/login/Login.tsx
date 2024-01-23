import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@components/molecules/input/Input';
import { Box } from '@mui/material';
import TextButton from '@components/molecules/button/textButton/TextButton';
import { setCookie } from '@util/Cookies';
import clsN from 'classnames';
import axios from 'axios';
import style from './style/Login.module.scss';

const Login = () => {
    const BaseUrl = 'https://deamhome.synology.me/land';
    const [formData, setFormData] = useState({
        id: '',
        pwd: '',
    });
    const handleInputChange = (fieldName: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };
    const handleLogin = async () => {
        console.log('Login Data:', formData);
        try {
            const response = await axios.post(`${BaseUrl}/user/login`, formData);
            console.log(response);
            if (response.status === 200) {
                const { accessToken, refreshToken } = response.data;

                setCookie('accessToken', `JWT${accessToken}`, {
                    path: '/',
                    sameSite: 'strict',
                });

                setCookie('refreshToken', `JWT${accessToken}`, {
                    path: '/',
                    sameSite: 'strict',
                });
                console.log('Login Success');
                navigate('/phone');
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
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
