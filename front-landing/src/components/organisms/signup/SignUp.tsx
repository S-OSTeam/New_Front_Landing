import React, { useState } from 'react';
import Input from '@components/molecules/input/Input';
import { Box } from '@mui/material';
import TextButton from '@components/molecules/button/textButton/TextButton';
import axios from 'axios';
import clsN from 'classnames';
import style from './style/SignUp.module.scss';

const SignUp = () => {
    const BaseUrl = 'https://deamhome.synology.me/land';
    const [formData, setFormData] = useState({
        id: '',
        pwd: '',
        pwdConfirm: '',
        userName: '',
        email: '',
    });
    const [authData, setAuthData] = useState('');
    const handleInputChange = (fieldName: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };
    const handleAuthChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAuthData(event.target.value);
    };
    const handleSignUp = () => {
        console.log('Form Data:', formData);
        axios
            .post(`${BaseUrl}/user/signup`, formData)
            .then((response) => {
                console.log('Response', response);

                if (response.status === 200) {
                    console.log('Signup is success');
                } else {
                    console.log('Signup is why not?');
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
    const handleAuthConfirm = () => {
        axios
            .post(`${BaseUrl}/auth/code`, { authCode: authData, email: formData.email })
            .then((response) => {
                if (response.status === 200) {
                    alert('이메일 인증이 완료되었습니다.');
                } else {
                    console.log('Auth Confirmation Pending');
                }
            })
            .catch((error) => {
                console.error('Auth Send Error:', error);
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
            <Input
                text="인증번호"
                placeholder="인증번호 입력"
                className={clsN(`${style.input}`)}
                onChange={(value) => handleAuthChange(value)}
            />
            <TextButton
                context="이메일 인증 확인하기"
                className={clsN(`${style.sendButton}`)}
                onClick={handleAuthConfirm}
            />
            <TextButton context="회원가입" className={clsN(`${style.sendButton}`)} onClick={handleSignUp} />
        </Box>
    );
};

export default SignUp;
