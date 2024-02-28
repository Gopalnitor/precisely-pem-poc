import React from 'react'
import { ICheckboxProps } from '../types'
import { Checkbox as CarbonCheckbox } from '@carbon/react'

const Checkbox: React.FC<ICheckboxProps> = ({ labelText, helperText, id }) => {
  return (
    <>
        <CarbonCheckbox 
            labelText={labelText}
            helperText={helperText}
            id={id}
        />
    </>
  )
}

export default Checkbox