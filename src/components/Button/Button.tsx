import classNames from "classnames";
import React from "react";
import * as style from "./Button.module.scss";

export type ButtonAppearance =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "dark";

export interface IButtonProps {
    /**
     * Текст внутри кнопки
     */
    children?: any,

    /**
     * html-аттрибут у кнопки
     */
    type?: "button" | "submit" | "reset",

    /**
     * Вариация кнопки
     */
    appearance?: ButtonAppearance,

    /**
     * Визуальная вариация кнопки с белым фоном и цветной рамкой
     */
    ghost?: boolean,

    /**
     * Функция, которая будет вызвана при нажатии на кнопку
     */
    onClick?: Function,

    /**
     * Выключение кнопки. Она будет видна, но не доступна для действий пользователя
     */
    disabled?: boolean
}

export const Button: React.FC<IButtonProps> = (props) => {

    const {
        children,
        type = "button",
        appearance = "default",
        ghost = false,
        onClick = () => void 0,
        ...restProps
    } = props;

    const className = classNames(
        style["button"],
        style[`button_${appearance}`],
        {
            [style[`button_${appearance}_ghost`]]: ghost && appearance !== "secondary",
            [style[`button_${appearance}`]]: appearance !== "default",
        }
    )

    return (
        <button
            type={type}
            onClick={event => onClick(event)}
            className={className}
            {...restProps}
        >
            {children}
        </button>
    )
}