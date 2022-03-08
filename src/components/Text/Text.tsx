import classNames from "classnames";
import React, { CSSProperties, ReactNode } from "react";
import styles from "./Text.module.scss";
import { getColor, getSize } from "./util";

export type TextModes =
    | "div"
    | "span"
    | "label"
    | "small"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p";

export type TextColor = "primary" | "secondary" | string;
export type TextSize = "small" | "default" | "large" | string | number;

export interface ITextProps {
    /**
     * HTML-тег
     */
    mode?: TextModes,
    children: ReactNode,
    bold?: boolean,
    size?: TextSize,
    light?: boolean,
    italic?: boolean,
    color?: TextColor,
    className?: string,
    style?: CSSProperties
}

/**
 * @param {ITextProps} props 
 */
export const Text: React.FC<ITextProps> = (props) => {
    const { 
        children = "",
        mode = "span",
        bold = false,
        italic = false,
        light = false,
        color = "primary",
        size = "default",
        className = "",
        style = {}, 
        ...restProps
    } = props as ITextProps;

    const classes = classNames(
        styles.text,
        {
            [styles.text_bold]: bold,
            [styles.text_italic]: italic,
            [styles.text_light]: light,
            [styles.text_small]: mode === "small"
        },
        className
    );

    const styleBundle = {
        color: getColor(color),
        fontSize: getSize(size),
        ...style,
    } as CSSProperties

    const Mode = mode;

    return (
        <Mode className={classes} style={styleBundle} {...restProps}>
            {children}
        </Mode>
    )
}