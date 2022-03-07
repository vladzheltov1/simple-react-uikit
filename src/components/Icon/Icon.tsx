import classNames from "classnames";
import React, { CSSProperties, FC, ReactNode } from "react";
import style from "./Icon.module.scss";
import { getColor } from "./util";

export type IconSize = 'ns' | 'xs' | 's' | 'm' | 'n' | 'l';
export type IconColor = "primary" | "secondary" | string;

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
    color?: IconColor
}

/**
 * @param {IIconProps} props 
 */
export const Icon: FC<IIconProps> = (props) => {
    const {srcUrl, size="s", icon="", color="primary"} = props as IIconProps;
    
    const styles = {
        backgroundImage: srcUrl,
        fill: getColor(color)
    } as CSSProperties

    const classList = classNames(
        style.icon,
        style[`icon_${size}`]
    )

    return (
        <span className={classList} style={styles}>
            {icon}
        </span>
    )
}