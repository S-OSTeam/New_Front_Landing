import React from "react";
import {Box} from "@mui/material";
import PropTypes from "prop-types";
import clsN from "classnames";
import style from './style/Navigate.module.scss';
import Link, {LinkProps} from "#molecules/link/Link";

interface NavigateProps {
    Links: LinkProps[];
}

const Navigate = ({Links}: NavigateProps) => {
    const renderLink = Links.map((item) => {
        const {to, className, linkName} = item;
        return (
            <li className={clsN(`${style.linkLi}`)}>
                {/*eslint-disable*/}
                <Link to={to} linkName={linkName} className={clsN(className, `${style.link}`)}/>
            </li>
        )
    })
    return (
        <Box>
            <ul>
                {renderLink}
            </ul>
        </Box>
    );
}
Navigate.propTypes = {
    Links: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        linkName: PropTypes.node.isRequired,
        className: PropTypes.string,
    })).isRequired,
}
// default 프롭이 존재할 수 없음
// Navigate.defaultProps = {
//     Links: [],
// }
export default Navigate;