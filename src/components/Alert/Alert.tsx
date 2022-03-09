import classNames from "classnames";
import React, { FC, ReactNode, useState } from "react";
import { Button } from "../Button";
import alertStyle from "./Alert.module.scss";

export type AlertSize = "small" | "medium" | "large";

export interface IAlertProps {
    title?: string,
    children?: ReactNode,
    size?: AlertSize,
    controls?: ReactNode | ReactNode[],
    open?: boolean
}

export const Alert: FC<IAlertProps> = (props) => {
    const {
        title = "Внимание!",
        children,
        size = "small",
        controls,
        open = false
    } = props as IAlertProps;

    const [isOpen, setIsOpen] = useState(open);

    const classList = classNames(
        alertStyle["alert"],
        alertStyle[`alert_${size}`]
    )

    const close = () => {
        if(isOpen){
            setIsOpen(false);
        }
    }

    return <>
        {isOpen && (
            <div className={alertStyle.alertWrapper}>
                <div className={alertStyle.alertBackground}></div>
                <div className={classList}>
                    <div className={alertStyle.alert__closeButton} onClick={close}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
                    </div>
                    <div className={alertStyle.alert__title}>{title}</div>
                    <hr className={alertStyle.alert__hr} />
                    <div className={alertStyle.alert__message}>
                        {children}
                    </div>
                    <hr className={alertStyle.alert__hr} />
                    <div className={alertStyle.alert__controls}>
                        {controls || (<Button onClick={close}>Ок</Button>)}
                    </div>
                </div>
            </div>
        )}
    </>
}