import React from 'react'
import { CheckboxProps } from '../types'
import { Checkbox as CarbonCheckbox } from '@carbon/react'

const Checkbox: React.FC<CheckboxProps> = ({ labelText, helperText, id }) => {
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