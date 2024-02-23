import React from 'react';
import { LinkProps } from '../types';
import { Link as CarbonLink } from '@carbon/react';

const Link: React.FC<LinkProps> = ({ text, href }) => {
    return (<div>
        <CarbonLink href={href}>{text}</CarbonLink>
    </div>);
}

export default Link;