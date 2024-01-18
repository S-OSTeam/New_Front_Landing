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
    return (
        <>
            <Stack className={clsN(`${style.phoneWrapper}`)}>
                <Heading content="ExampleTest" className={clsN(`${style.phone}`)} />
                {activeTab === 0 && (
                    <>
                        <PhoneForm text="이름" placeholder="홍길동" />
                        <PhoneForm text="전화번호" placeholder="010-XXXX-XXXX" />
                        <TextButton context="등록" />
                    </>
                )}
                {activeTab === 1 && (
                    <>
                        <div>확인탭 보여주기</div>
                    </>
                )}
            </Stack>
        </>
    );
};

export default TemplatePhone;
