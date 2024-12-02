import React, { ReactElement, ReactNode } from 'react'
import { IColor } from '../../utils/types';
import '../assets/Button.css'
import classNames from 'classnames';

interface IButton {
    children?: ReactNode;
    color?: IColor;
    borderRadius?: number;
}

const Button = ({
    children,
    color = "primary",
    borderRadius
}: IButton): ReactElement => {
    return (
        <button
            className={classNames("btn", { "btn-primary": color === "primary", "btn-red": color === "red", "btn-warning": color === "warning" })}
            style={{ borderRadius }}
        >
            {children}
        </button>
    )
}

export default Button