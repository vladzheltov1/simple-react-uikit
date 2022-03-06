import React, { FC } from "react";
import style from "./Space.module.scss";

export interface ISpaceProps {
    /**
     * @default 0
     */
    height?: string | number
}

export const Space: FC<ISpaceProps> = (props) => {
    const { height = 0 } = props as ISpaceProps;

    const param = {
        className: style.space,
        style: { height }
    }

    return React.createElement("div", param, null);
}