import design from "styles/_export.module.scss";
import { TextColor, TextSize } from "./Text";

type DefaultValues = {
    [key: string]: string
}

// Get color from props

const colorDefaultValues = ["primary", "secondary"];
const defaultColors: DefaultValues = {
    primary: design.colorText,
    secondary: design.colorTextSecondary
}
export const getColor = (propColor: TextColor): string => {
    if(colorDefaultValues.includes(propColor)){
        return defaultColors[propColor];
    }
    return propColor;
}

// Get size from props

const sizeDefaultValues = ["small", "default", "large"];
const defaultSizes: DefaultValues = {
    small: design.fontSizeSmall,
    default: design.fontSizeDefault,
    large: design.fontSizeLarge
}
export const getSize = (propSize: TextSize): string | number => {
    if(typeof propSize === "string" && sizeDefaultValues.includes(propSize)){
        return defaultSizes[propSize];
    }
    return propSize;
}