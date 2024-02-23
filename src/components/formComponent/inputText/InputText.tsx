import React from "react";
import { InputTextProps } from "../types";
import { TextInput as CarbonTextInput } from "@carbon/react";

const InputText: React.FC<InputTextProps> = ({ labelText, helperText, value, id }) => {
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