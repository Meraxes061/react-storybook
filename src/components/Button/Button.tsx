import React, { FunctionComponent } from 'react'
import './Button.scss'



interface IProps {
    children: JSX.Element
    primary: boolean
    secondary: boolean,
    success: boolean,
    danger: boolean,
    warning: boolean,
    info: boolean,
    light: boolean,
    dark: boolean,
    link: boolean
    block: boolean,
    disabled: boolean,
    onClick(): void
}
const Button: FunctionComponent<IProps> = ({ children, onClick, ...rest }) => {
    var classNames = require('classnames');
    var classes = classNames({
        'c-button': true,
        'c-button--primary': rest.primary,
        'c-button--secondary': rest.secondary,
        'c-button--success': rest.success,
        'c-button--danger': rest.danger,
        'c-button--warning': rest.warning,
        'c-button--info': rest.info,
        'c-button--light': rest.light,
        'c-button--dark': rest.dark,
        'c-button--link': rest.link,
        'c-button--block': rest.block,
        'c-button--disabled': rest.disabled,
    });
    return (
        <button
            className={classes}
            disabled={rest.disabled}
            onClick={onClick}>{children}</button>
    )
}

export default Button
