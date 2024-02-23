import React from 'react';
import { Button as CarbonButton } from '@carbon/react';

type ButtonKind = 'primary' |
    'secondary' |
    'danger' |
    'ghost' |
    'danger--primary' |
    'danger--ghost' |
    'danger--tertiary' |
    'tertiary'

export interface ButtonProps {
    text: string;
    kind: ButtonKind;
    onClick: () => void;
    disabled: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, kind, onClick }) => {
    return (<div>
        <CarbonButton kind={kind} onClick={onClick}>{text}</CarbonButton>
    </div>);
}

export default Button;