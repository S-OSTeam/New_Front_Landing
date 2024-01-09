import React from "react";
import PropTypes from "prop-types";
import clsN from "classnames";
import style from './style/TextButton.module.scss';
import Button, {ButtonProps} from "#atoms/button/Button";

// 인터페이스 : 참고사항 mui 버튼은텍스트를 기본적으로 넣으므로 텍스트 or icon 즉 원자만 넣기
interface MyTextButtonProps {
    id?: string;
    className?: string;
    variant?: ButtonProps['variant'];
    context: string; // children text only
    onClick?: () => void;
    onMouseOver?: () => void;
    ariaLabel?: string;
}

const TextButton = (
    {
        id,
        className,
        variant,
        context,
        onClick,
        onMouseOver,
        ariaLabel
    }: MyTextButtonProps
) => {
    return (
        <Button
            id={id}
            className={clsN(className, `${style.textButton}`)}
            variant={variant}
            onClick={onClick}
            onMouseOver={onMouseOver}
            ariaLabel={ariaLabel}
        >
            {context}
        </Button>
    );
};
TextButton.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained', undefined]),
    context: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    ariaLabel: PropTypes.string
};
TextButton.defaultProps = {
    id: undefined,
    className: clsN(`${style.textButton}`),
    variant: 'contained',
    onClick: () => {
    },
    onMouseOver: () => {
    },
    ariaLabel: undefined,
};
export default TextButton;