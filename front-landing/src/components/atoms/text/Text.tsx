import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TypographyProps } from '@mui/material';
import clsN from 'classnames';
import style from './style/text.module.scss';

export interface TextProps extends TypographyProps {
    text: string;
    className?: string;
    variant?: TypographyProps['variant'];
    align?: TypographyProps['align'];
    onClick?: TypographyProps['onClick'];
    onMouseOver?: TypographyProps['onMouseOver'];
}

const Text = ({ text, className, variant, align, onClick, onMouseOver }: TextProps) => {
    return (
        <Typography
            className={clsN(className, `${style.text}`)}
            variant={variant}
            align={align}
            onClick={onClick}
            onMouseOver={onMouseOver}
        >
            {text}
        </Typography>
    );
};

Text.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
    ]),
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
};

Text.defaultProps = {
    className: `${style.text}`,
    variant: 'body1',
    align: 'inherit',
    onClick: undefined,
    onMouseOver: undefined,
};

export default Text;
