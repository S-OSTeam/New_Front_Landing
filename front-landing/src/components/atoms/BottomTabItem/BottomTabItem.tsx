import React from 'react';

interface BottomTabItemProps {
    label: string;
}

const BottomTabItem = ({ label }: BottomTabItemProps) => {
    return <div>{label}</div>;
};
export default BottomTabItem;
