/* eslint-disable */
import React from 'react';
import clsN from 'classnames';
import Heading from '@organisms/heading/Heading';
import { Stack } from '@mui/material';
import style from './style/Phone.module.scss';
import PhoneForm from '@organisms/form/phoneForm/PhoneForm';
import TextButton from '@components/molecules/button/textButton/TextButton';

interface TemplatePhoneProps {
    activeTab: number;
}

const TemplatePhone = ({ activeTab }: TemplatePhoneProps) => {
    const handleOnClick = () => {
        alert('등록 되었습니다!');
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
                        <PhoneForm text="이름" placeholder="홍길동" />
                        <PhoneForm text="전화번호" placeholder="010-XXXX-XXXX" />
                        <TextButton context="등록" onClick={handleOnClick} />
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
