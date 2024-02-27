import React from 'react'
import { ComponentList } from './itemTypes'
import { Tooltip } from "@carbon/react";
import { Grid, Column } from '@carbon/react';
import '../layout.css'

const FormCompoents = () => {

  return (  
    <>
      {
        ComponentList.map((item)=>{
          return <Grid className='field-border' key={item.id}>
            <Column sm={6}>
              <span>
                {item.FiledIcon}
              </span>
             </Column>
             <Column sm={2}>
              <span className='field-text'>
                {item.Name}
              </span>
             </Column>
             <Column sm={6}>
              <span>
                <Tooltip label={item.Tooltip}>
                  {item.TooltipIcon}
                </Tooltip>  
              </span>
            </Column>
          </Grid>
        })
      }
    </>
  )
}

export default FormCompoents;
