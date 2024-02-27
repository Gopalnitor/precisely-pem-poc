import React, { useState } from 'react'
import { useDrop } from "react-dnd";
import { ComponentList } from '../leftComponent/constants';

const FormTemplate = () => {

    const [board, setBoard] = useState([]);  

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'InputField',
        drop: (formFields) => addItemsToBoard(formFields),
        collect: (monitor) =>({
            isOver: !!monitor.isOver(),
        }),
        //     hover: (item, monitor) => {
        //         // works fine and prints the correct data
        //         console.log("hover-item",item);
        //         console.log("hover-monitor",monitor.canDrop()) // true
        //    },

        }))

        const addItemsToBoard = (formFields) => {
           //console.log("Drop formFields",formFields.formField)
             const dragedField = ComponentList.filter((field)=> formFields.formField.id === field.id)[0];
             console.log("dragedField",dragedField)
             setBoard((board)=> [...board, dragedField]);
        }

  return (
    <div ref={drop} style={{border:'2px solid blue', height: '100%'}}>
        {
            board.map((field)=>{
                return <div key={field.id}>
                        {
                            <field.Component
                                labelText={field.Name} 
                                id={field.id}
                            />
                        }
                    </div>
                    
            })
        }
    </div>
  )
}

export default FormTemplate;