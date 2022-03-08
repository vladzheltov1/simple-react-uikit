import React, {
    FC,
    FocusEventHandler,
    FormEventHandler,
    MouseEventHandler,
    ReactNode
} from "react";
import "styles/global.scss";
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
        checked = false,
        ...restProps
    } = props as ICheckBoxProps;
    
    return (
        <label className={styles.check}>
            <input 
                className={`visually-hidden ${styles.check__input}`} 
                disabled={disabled} 
                checked={checked} 
                type={"checkbox"}
                {...restProps}
            />
            <span className={styles.check__box}></span>
            {label}
        </label>
    )
}