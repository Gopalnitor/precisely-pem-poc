import React from 'react'
import { Dropdown as CarbonDropdown } from '@carbon/react';

const DropDown = ({ id, labelText, items}) => {
  return (
    <>
        <CarbonDropdown 
            id={id}
            label={labelText}
            items={items}
            titleText= {labelText}
            itemToString={item => item ? item.text : ''}
        />
    </>
  )
}

export default DropDown;
