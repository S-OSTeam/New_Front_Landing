/* eslint-disable */
import React, { useState } from 'react';
import clsN from 'classnames';
import Heading from '@organisms/heading/Heading';
import { Stack } from '@mui/material';
import style from './style/Phone.module.scss';
import PhoneForm from '@organisms/form/phoneForm/PhoneForm';
import TextButton from '@components/molecules/button/textButton/TextButton';
import { removeCookie } from '@util/Cookies';
import { Navigate, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CreateOrUpdatePerson } from '@api/apollo/gql/showRegister';

interface TemplatePhoneProps {
    activeTab: number;
}

const TemplatePhone = ({ activeTab }: TemplatePhoneProps) => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [createOrUpdatePerson] = useMutation(CreateOrUpdatePerson, {
        onCompleted: () => {
            alert('등록 되었습니다!');
        },
    });
    const handleOnClick = async () => {
        try {
            await createOrUpdatePerson({
                variables: {
                    request: {
                        name: name,
                        phone: phoneNumber,
                    },
                },
            });
        } catch (error) {
            console.error('전화번호 등록 오류:', error);
        }
    };
    const handleLogout = () => {
        removeCookie('accessToken', { path: '/' });
        removeCookie('refreshToken', { path: '/' });
        navigate('/');
    };

    const DummyData = [
        { name: 'robert', phoneNumber: '010-1234-5678' },
        { name: 'robert', phoneNumber: '010-1234-5678' },
        { name: 'robert', phoneNumber: '010-1234-5678' },
        { name: 'robert', phoneNumber: '010-1234-5678' },
    ];

    return (
        <>
            <Stack className={clsN(`${style.phoneWrapper}`)}>
                <Heading content="ExampleTest" className={clsN(`${style.phone}`)} />
                {activeTab === 0 && (
                    <>
                        <PhoneForm text="이름" placeholder="홍길동" onChange={(value) => setName(value)} />
                        <PhoneForm
                            text="전화번호"
                            placeholder="010-XXXX-XXXX"
                            onChange={(value) => setPhoneNumber(value)}
                        />
                        <TextButton context="등록" onClick={handleOnClick} />
                        <TextButton context="로그아웃" onClick={handleLogout} />
                    </>
                )}
                {activeTab === 1 && (
                    <>
                        <div>
                            {DummyData.map((cur) => (
                                <div>
                                    <div>이름: {cur.name}</div>
                                    <div>번호: {cur.phoneNumber}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </Stack>
        </>
    );
};

export default TemplatePhone;
