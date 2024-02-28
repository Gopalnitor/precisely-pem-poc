import React from 'react';
import { ILinkProps } from '../types';
import { Link as CarbonLink } from '@carbon/react';

const Link: React.FC<ILinkProps> = ({ text, href }) => {
    return (<div>
        <CarbonLink href={href}>{text}</CarbonLink>
    </div>);
}

export default Link;