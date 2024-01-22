import React, { useState } from 'react';
import Input from '@components/molecules/input/Input';
import { Box } from '@mui/material';
import TextButton from '@components/molecules/button/textButton/TextButton';
import axios from 'axios';
import clsN from 'classnames';
import style from './style/SignUp.module.scss';

const SignUp = () => {
    const BaseUrl = 'http://127.0.0.1:8080/land';
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
    const handleSignUp = () => {
        console.log('Form Data:', formData);
        axios
            .post(`${BaseUrl}/user/signup`, formData)
            .then((response) => {
                console.log('Response', response);

                if (response.data.isEmailConfirmed) {
                    console.log('Email Confirmation Success');
                } else {
                    console.log('Email Confirmation Pending');
                }
            })
            .catch((error) => {
                console.error('Error Ocurred', error);
            });
    };
    const handleEmailSend = () => {
        axios
            .post(`${BaseUrl}/auth/mail`, { email: formData.email })
            .then((response) => {
                console.log('Email Send Response:', response.data);
            })
            .catch((error) => {
                console.error('Email Send Error:', error);
            });
    };
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
            <Input
                text="pwdConfirm"
                placeholder="비밀번호 재입력"
                className={clsN(`${style.input}`)}
                onChange={(value) => handleInputChange('pwdConfirm', value)}
            />
            <Input
                text="userName"
                placeholder="유저 이름"
                className={clsN(`${style.input}`)}
                onChange={(value) => handleInputChange('userName', value)}
            />
            <Input
                text="email"
                placeholder="이메일"
                className={clsN(`${style.input}`)}
                onChange={(value) => handleInputChange('email', value)}
            />

            <TextButton context="이메일 인증" className={clsN(`${style.sendButton}`)} onClick={handleEmailSend} />
            <TextButton context="회원가입" className={clsN(`${style.sendButton}`)} onClick={handleSignUp} />
        </Box>
    );
};

export default SignUp;
