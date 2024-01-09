import React from "react";
import {Link as ReactLink} from 'react-router-dom';
import clsN from "classnames";
import PropTypes from "prop-types";
import style from './style/Link.module.scss';

export interface LinkProps {
    to: string;
    linkName: React.ReactNode;
    className?: string;
}

const Link = (
    {
        to,
        linkName,
        className
    }: LinkProps
) => {
    return (
        <ReactLink
            to={to}
            className={clsN(className, `${style.link}`)}
        >
            {linkName}
        </ReactLink>
    );
};
Link.propTypes = {
    to: PropTypes.string.isRequired,
    linkName: PropTypes.node.isRequired,
    className: PropTypes.string,
}
Link.defaultProps = {
    className: clsN(`${style.link}`)
}
export default Link;