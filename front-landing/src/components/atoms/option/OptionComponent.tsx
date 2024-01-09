import React from 'react';
import { MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

interface OptionProps {
    content: string;
    className?: string;
    value: string;
    key: string;
}

const OptionComponent = ({ key, content, className, value }: OptionProps) => {
    return (
        <MenuItem key={key} className={className} value={value}>
            {content}
        </MenuItem>
    );
};

OptionComponent.prototype = {
    content: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    key: PropTypes.string,
};

OptionComponent.defaultProps = {
    className: ``,
};

export default OptionComponent;
