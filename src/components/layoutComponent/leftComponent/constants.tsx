import React, { Key } from 'react';
import { FieldType } from './itemTypes';
import { InputText, Checkbox } from "../../formComponent";
import { Information } from '@carbon/icons-react';
import { Checkbox as IconCheckbox, TextFill } from '@carbon/icons-react';

export interface IFromComponent{
    id: Key | null | undefined;
    Name: String;
    FieldType: FieldType; 
    Component: React.ElementType;
    Tooltip: String;
    TooltipIcon: React.ReactNode;
    FieldIcon : React.ReactNode;
}


export const ComponentList: Readonly<IFromComponent[]> = Object.freeze([
    {
        id: 1,
        Name: 'Input Field',
        FieldType: FieldType.InputField,
        FieldIcon: <TextFill/>,
        Component: InputText,
        Tooltip: 'Form Input Filed',
        TooltipIcon: <Information/>,
    },

    {
        id: 2,
        Name: 'CheckBox Field',
        FieldType: FieldType.InputField,
        FieldIcon: <IconCheckbox/>,
        Component: Checkbox,
        Tooltip: 'Form CheckBox Filed ',
        TooltipIcon: <Information/>,
    }
])