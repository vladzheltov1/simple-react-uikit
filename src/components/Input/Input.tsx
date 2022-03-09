import classNames from "classnames";
import React, { ChangeEventHandler, FC, KeyboardEventHandler, MouseEventHandler } from "react";
import inputStyles from "styles/components/Input.module.scss";
import { ContainerElement } from "../../types";

export type InputType = 
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "reset"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

export interface IInputProps {
    type?: InputType,
    value?: string,
    disabled?: boolean,
    placeholder?: string,
    onChange?: ChangeEventHandler<ContainerElement>,
    onKeyDown?: KeyboardEventHandler<ContainerElement>,
    onKeyUp?: KeyboardEventHandler<ContainerElement>,
    onClick?: MouseEventHandler<ContainerElement>,
    onMouseDown?: MouseEventHandler<ContainerElement>,
    onMouseUp?: MouseEventHandler<ContainerElement>,
    onMouseLeave?: MouseEventHandler<ContainerElement>,
}

export const Input: FC<IInputProps> = (props) => {
    const {
        type = "text",
        value = "",
        disabled = false,
        placeholder = "",
        ...restProps
    } = props as IInputProps;

    const classList = classNames(
        inputStyles.input
    )

    return (
        <input 
            type={type} 
            value={value} 
            disabled={disabled} 
            className={classList}
            placeholder={placeholder}
            {...restProps}
        />
    )
}