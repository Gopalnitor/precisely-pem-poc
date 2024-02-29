import React, { Key } from 'react';
import { FieldType } from './itemTypes';
import { InputText, Checkbox, TextArea } from "../../formComponent";
import { Information } from '@carbon/icons-react';
import { Checkbox as IconCheckbox, TextFill, TextAllCaps } from '@carbon/icons-react';

export interface IFromComponent{
    id: Key | null | undefined;
    Name: String;
    FieldType: FieldType; 
    Component: React.ElementType;
    Tooltip: String;
    TooltipIcon: React.ReactNode;
    FieldIcon : React.ReactNode;
    EditableProps: IEditableProps[];
    DefaultValProps?: [];
}

export interface IEditableProps {
    propName: string;
    label: string;
    Component: React.ElementType;
    defaultValue?: any; 
  }


export const ComponentList: Readonly<IFromComponent[]> = Object.freeze([
    {
        id: '1',
        Name: 'Input Field',
        FieldType: FieldType.InputField,
        FieldIcon: <TextFill/>,
        Component: InputText,
        Tooltip: 'Form Input Filed',
        TooltipIcon: <Information/>,
        EditableProps: [{
            propName: 'inputValue',
            label: 'Input Field',
            Component: InputText,
            defaultValue: '',
        }],
        DefaultValProps: [],
        
    },

    {
        id: '2',
        Name: 'CheckBox Field',
        FieldType: FieldType.InputField,
        FieldIcon: <IconCheckbox/>,
        Component: Checkbox,
        Tooltip: 'Form CheckBox Filed ',
        TooltipIcon: <Information/>,
        EditableProps: [{
            propName: 'checkboxValue',
            label: 'CheckBox Field',
            Component: InputText,
            defaultValue: '',
        }],
        DefaultValProps: [],
    },

    {
        id: '3',
        Name: 'TextArea Field',
        FieldType: FieldType.TextArea,
        FieldIcon: <TextAllCaps/>,
        Component: TextArea,
        Tooltip: 'Form TextArea Filed ',
        TooltipIcon: <Information/>,
        EditableProps: [{
            propName: 'textareaValue',
            label: 'TextArea Field',
            Component: InputText,
            defaultValue: '',
        }],
        DefaultValProps: [],
    }

])