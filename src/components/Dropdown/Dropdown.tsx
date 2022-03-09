import classNames from "classnames";
import React, { ChangeEventHandler, FC } from "react";
import inputStyles from "styles/components/Input.module.scss";
import dropdownStyles from "./Dropdown.module.scss";

export interface IDropdownProps {
    dropList?: Array<string>,
    onChange?: ChangeEventHandler<HTMLElement>
}

export const Dropdown: FC<IDropdownProps> = (props) => {
    const {dropList = [], onChange, ...restProps} = props as IDropdownProps;

    const classList = classNames(
        inputStyles.input,
        dropdownStyles.dropdown
    );

    return (
        <select className={classList} onChange={onChange} {...restProps}>
            {dropList.length > 0 && dropList.map((item, index) => (
                <option key={index} className={dropdownStyles.option}>{item}</option>     
            ))}
        </select>
    )   
}