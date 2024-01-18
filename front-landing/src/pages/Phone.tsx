import React, { useState } from 'react';
import { Box } from '@mui/material';
import TemplatePhone from '@templates/phone/Phone';
import clsN from 'classnames';
import BottomTabBar from '@components/molecules/BottomTabBar/BottomTabBar';
import style from './style/Phone.module.scss';

export const Phone = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (newTab: number) => {
        setSelectedTab(newTab);
    };

    return (
        <Box component="div" className={clsN(`${style.phoneWrapper}`)}>
            <TemplatePhone activeTab={selectedTab} />
            <BottomTabBar onTabChange={handleTabChange} />
        </Box>
    );
};
