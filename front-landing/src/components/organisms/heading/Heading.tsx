import React from 'react';
import Text from '@components/atoms/text/Text';
import { Box } from '@mui/material';
import clsN from 'classnames';
import style from './style/Heading.module.scss';

interface HeadingProps {
    content: string;
    className?: string;
    textClass?: string;
}

const Heading = ({ content, className, textClass }: HeadingProps) => {
    return (
        <Box component="div" className={clsN(className, `${style.head}`)}>
            <Text text={content} variant="h3" className={clsN(textClass, `${style.textWrapper}`)} />
        </Box>
    );
};

export default Heading;
