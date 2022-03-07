import design from "styles/_export.module.scss";
import { IconFill } from "./Icon";

type DefaultValues = {
    [key: string]: string
}

// Get fill color from props

const colorDefaultValues = ["primary", "secondary"];
const defaultColors: DefaultValues = {
    primary: design.colorText,
    secondary: design.colorTextSecondary
}
export const getFill = (propFill: IconFill): string => {
    if(colorDefaultValues.includes(propFill)){
        return defaultColors[propFill];
    }
    return propFill;
}