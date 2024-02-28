import React from 'react'
import { TextArea as CarbonTextArea } from '@carbon/react';
import { ITextAreaProps } from '../types';

const TextArea: React.FC<ITextAreaProps> = ({ labelText, id }) => {
  return (
    <>
        <CarbonTextArea 
            labelText={labelText}     
            id={id}   
        />
    </>
  )
}

export default TextArea;
