import classNames from "classnames";
import React, { KeyboardEventHandler, MouseEventHandler, ReactNode } from "react";
import style from "./Button.module.scss";

export type ButtonAppearance =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "dark";

export type ButtonType = "button" | "submit" | "reset"; 
export type ButtonSize = "small" | "default" | "large";

export type ContainerElement = HTMLButtonElement | HTMLAnchorElement;

export interface IButtonProps {
    onKeyDown?: KeyboardEventHandler<ContainerElement>,
    onKeyUp?: KeyboardEventHandler<ContainerElement>,
    onClick?: MouseEventHandler<ContainerElement>,
    onMouseDown?: MouseEventHandler<ContainerElement>,
    onMouseUp?: MouseEventHandler<ContainerElement>,
    onMouseLeave?: MouseEventHandler<ContainerElement>,
    disabled?: boolean,
    children?: ReactNode,
    round?: boolean,

    /**
     * @default "button"
     */
     type?: ButtonType,

    /**
     * Вариация кнопки
     * @default "primary"
     */
    appearance?: ButtonAppearance,

    /**
     * Визуальная вариация кнопки с белым фоном и цветной рамкой
     * @default false
     */
    ghost?: boolean,

    /**
     * Размер кнопки
     * @default "default"
     */
    size?: ButtonSize
}

/**
 * @todo добавить `iconLeft` и `iconRight`
 * @param {IButtonProps} props
 */
export const Button: React.FC<IButtonProps> = (props) => {
    const {
        appearance = "primary",
        size = "default",
        type = "button",
        ghost = false,
        round = false,
        children,
        ...restProps
    } = props as IButtonProps;

    const className = classNames(
        style.button,
        style[`button_${appearance}`],
        {
            [style[`button_${appearance}_ghost`]]: ghost && appearance !== "secondary",
            [style.button_small]: size === "small",
            [style.button_large]: size === "large",
            [style.button_round]: round,
        }
    );

    return (
        <button
            type={type}
            className={className}
            {...restProps}
        >
            {children}
        </button>
    );
};