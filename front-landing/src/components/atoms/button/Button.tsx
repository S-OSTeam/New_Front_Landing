import React from 'react';
// Mui 버튼 이름 혼동 방지를 위해 별칭 설정
import {Button as OriginMuiButton, ButtonProps as OriginMUIBUTTONPROPS} from '@mui/material';
// PropTypes : 유효성을 검증하기위해 사용됨
import PropTypes from 'prop-types';
// classnames 를 사용하는 이유는 조건에 따라 클래스를 넣거나 뺼 수 있음 clsN('one', { tow:false }); => one
import clsN from "classnames";
// css.module
import style from './style/Button.module.scss';

// 인터페이스 설정 OverrideProps<ButtonTypeMap<P, D>, D>
export interface ButtonProps extends OriginMUIBUTTONPROPS {
    id?: string; // 태그 아이디
    className?: string; // 태그 클래스명
    variant?: OriginMUIBUTTONPROPS['variant']; // 컴포넌트 스타일 종류 선택
    children: React.ReactNode; // React.ReactNode : jsx, tsx 리액트 컴포넌트 포함가능
    onClick?: OriginMUIBUTTONPROPS['onClick']; // onClick?:  React.MouseEventHandler<HTMLButtonElement> | undefined
    onMouseOver?: OriginMUIBUTTONPROPS['onMouseOver']; // onMouseOver?: React.MouseEventHandler<HTMLButtonElement> | undefined
    ariaLabel?: string; // aria-label?: 해당 컴포넌트가 무엇인지 알려주는 설명서와 같음, 즉 접근성을 지원해줌
}

const Button = (
    {
        id, className, variant, children, onClick, onMouseOver, disabled, ariaLabel
    }: ButtonProps
) => {
    return (
        <OriginMuiButton
            id={id}
            aria-label={ariaLabel}
            className={clsN(className, `${style.button}`)}
            variant={variant}
            onClick={onClick}
            onMouseOver={onMouseOver}
            disabled={disabled}
        >
            {children}
        </OriginMuiButton>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained', undefined]),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    ariaLabel: PropTypes.string,
};

Button.defaultProps = {
    id: undefined,
    className: ``,
    variant: 'contained',
    onClick: () => {
    },
    onMouseOver: () => {
    },
    ariaLabel: undefined,
};

export default Button;
