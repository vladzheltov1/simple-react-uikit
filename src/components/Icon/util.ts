import { design } from "../..";
import { IconColor } from "./Icon";

type DefaultValues = {
    [key: string]: string
}

const colorDefaultValues = ["primary", "secondary"]; 
const defaultColors: DefaultValues = {
    primary: design.default.colorIcon,
    secondary: design.default.colorIconSecondary
}

export const getColor = (propColor: IconColor): string => {
    if(colorDefaultValues.includes(propColor)){
        console.log(design.default)
        return defaultColors[propColor];
    }
    return propColor;
}