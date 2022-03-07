import design from "../../styles/_export.module.scss";
import { IconColor } from "./Icon";

type DefaultValues = {
    [key: string]: string
}

// Get color from props

const colorDefaultValues = ["primary", "secondary"];
const defaultColors: DefaultValues = {
    primary: design.colorText,
    secondary: design.colorTextSecondary
}
export const getColor = (propColor: IconColor): string => {
    if(colorDefaultValues.includes(propColor)){
        return defaultColors[propColor];
    }
    return propColor;
}