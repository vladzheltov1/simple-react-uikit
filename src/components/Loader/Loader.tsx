import React, { CSSProperties, FC, ReactNode } from "react";
import loaderStyles from "./Loader.module.scss";

export interface ILoaderProps {
    size?: string | number,
    label?: ReactNode | string
}

export const Loader: FC<ILoaderProps> = (props) => {
    const {label="", size="1rem"} = props as ILoaderProps;

    const styles = {
        width: size,
        height: size
    } as CSSProperties

    return (
        <div className={loaderStyles.loader} style={styles}>
            <div className={loaderStyles.loader__spinner}></div>
            <label className={loaderStyles.loader__label}>{label}</label>
        </div>
    )
}