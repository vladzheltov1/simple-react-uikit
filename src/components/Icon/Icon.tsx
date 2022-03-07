import classNames from "classnames";
import React, { CSSProperties, FC, ReactNode } from "react";
import iconStyle from "./Icon.module.scss";
import { getFill } from "./util";

export type IconSize = "ns" | "xs" | "s" | "m" | "n" | "l";
export type IconFill = "primary" | "secondary" | string;

export interface IIconProps {
    /**
     * SVG only
     */
    srcUrl?: string,
    
    /**
     * SVG only
     */
    icon?: ReactNode,
    
    size?: IconSize,
    fill?: IconFill,
    style?: CSSProperties
}

/**
 * @param {IIconProps} props 
 */
export const Icon: FC<IIconProps> = (props) => {
    const {
        srcUrl,
        size="s",
        icon="",
        fill="primary",
        style={}
    } = props as IIconProps;
    
    const styles = {
        backgroundImage: srcUrl,
        fill: getFill(fill),
        ...style
    } as CSSProperties

    const classList = classNames(
        iconStyle.icon,
        iconStyle[`icon_${size}`]
    )

    return (
        <span className={classList} style={styles}>
            {icon}
        </span>
    )
}