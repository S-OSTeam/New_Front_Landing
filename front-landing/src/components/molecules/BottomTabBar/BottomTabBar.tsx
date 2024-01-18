import React from 'react';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';

interface BottomTabBarProps {
    onTabChange: (newValue: number) => void;
}

const BottomTabBar = ({ onTabChange }: BottomTabBarProps) => {
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        onTabChange(newValue);
    };

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation showLabels onChange={handleChange}>
                <BottomNavigationAction label="등록" icon={<AddIcon />} />
                <BottomNavigationAction label="확인" icon={<ListAltIcon />} />
            </BottomNavigation>
        </Box>
    );
};

export default BottomTabBar;
