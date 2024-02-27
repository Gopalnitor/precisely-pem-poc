import { TextInputProps } from "@carbon/react/lib/components/TextInput/TextInput";

export interface InputTextProps extends TextInputProps {
    labelText : string;
    helperText: string;
    value: string;
    id: string;
}

export interface CheckboxProps {
    labelText: string;
    id: string;
    helperText: string;
}

export interface LinkProps {
    text: string;
    href: string;
};

