import React from 'react'
import { Grid, Column, Tooltip, Row } from '@carbon/react';
import { useDrag } from "react-dnd";

const DragFieldComponent = ({
    formField
}:any) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'FormFileds',
        item: { formField: formField },
        collect: (monitor) =>({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    
  return (
    <div 
        ref={drag}   
        className={isDragging ? 'drag-field-border' : 'field-border'}
    >
        <Grid>
            <Column sm={6}>
                <span>
                {formField.FieldIcon}
                </span>
            </Column>
            <Column sm={2}>
                <span className='field-text'>
                {formField.Name}
                </span>
            </Column>
            <Column sm={6}>
                <span>
                <Tooltip label={formField.Tooltip}>
                    {formField.TooltipIcon}
                </Tooltip>  
                </span>
            </Column>
        </Grid>
    </div>
  )
}
export default DragFieldComponent;
