
import { CheckboxProps, LinkProps } from "@carbon/react";
import { DropdownProps } from "@carbon/react/lib/components/Dropdown/Dropdown";
import { TextAreaProps } from "@carbon/react/lib/components/TextArea/TextArea";
import { TextInputProps } from "@carbon/react/lib/components/TextInput/TextInput";

export interface IInputTextProps extends TextInputProps {
    labelText : string;
    helperText: string;
    value: string;
    id: string;
}

export interface ICheckboxProps extends CheckboxProps {
    labelText: string;
    id: string;
    helperText: string;
}

export interface ILinkProps extends LinkProps {
    text: string;
    href: string;
};

export interface ITextAreaProps extends TextAreaProps {

};

export interface IDropDownProps extends DropdownProps<any> {

}

