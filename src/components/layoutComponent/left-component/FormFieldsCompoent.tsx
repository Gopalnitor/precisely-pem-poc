import React from 'react'
import { ComponentList } from './constants'; 
import { Accordion, AccordionItem } from '@carbon/react';
import '../layout.css'
import DragFieldComponent from './DragFieldComponent';

const FormFieldsCompoent = () => {

  return (  
    <>
        <Accordion className="custom-class">
          <AccordionItem title="Basic">
            {
              ComponentList.map((item)=>{
                return <DragFieldComponent key={item.id} formField={item} />
              })
            }
          </AccordionItem>
          <AccordionItem title="Advanced">
              Advance Form Fields...
          </AccordionItem>
        </Accordion>
    </>
  )
}

export default FormFieldsCompoent;
