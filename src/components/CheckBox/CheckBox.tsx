import React, { FC, FocusEventHandler, FormEventHandler, MouseEventHandler, ReactNode, useState } from "react";
import "../../styles/global.scss";
import styles from "./CheckBox.module.scss";

export interface ICheckBoxProps {
    label?: ReactNode,
    checked?: boolean,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLElement>,
    onFocus?: FocusEventHandler<HTMLElement>,
    onMouseDown?: MouseEventHandler<HTMLElement>,
    onMouseUp?: MouseEventHandler<HTMLElement>,
    onMouseLeave?: MouseEventHandler<HTMLElement>,
    onMouseEnter?: MouseEventHandler<HTMLElement>,
    onChange?: FormEventHandler<HTMLElement>
}

/**
 * @param {ICheckBoxProps} props  
 * @todo now the box size is kinda fixed, so when the text gets larger, it looks weird
 */
export const CheckBox: FC<ICheckBoxProps> = (props) => {
    const { 
        label = "",
        disabled = false,
        checked,
        onClick,
        onFocus,
        onMouseDown,
        onMouseEnter,
        onMouseLeave,
        onMouseUp,
        onChange
    } = props as ICheckBoxProps;

    const [isChecked, setIsChecked] = useState(checked || false); 

    const handleChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <label className={styles.check}>
            <input 
                className={`visually-hidden ${styles.check__input}`} 
                disabled={disabled} 
                checked={isChecked} 
                type={"checkbox"}
                onClick={onClick}
                onFocus={onFocus}
                onMouseDown={onMouseDown}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onChange={onChange || handleChange}
            />
            <span className={styles.check__box}></span>
            {label}
        </label>
    )
}