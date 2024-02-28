import React from "react";
import { IInputTextProps } from "../types";
import { TextInput as CarbonTextInput } from "@carbon/react";

const InputText: React.FC<IInputTextProps> = ({ labelText, helperText, value, id }) => {
    return <>
        <CarbonTextInput  
            labelText={labelText} 
            helperText={helperText} 
            value={value} 
            id={id}
        />
    </>
}

export default InputText;