import React, { useState, useCallback } from 'react'
import { Button } from '@carbon/react';

const FormTemplate = ({board, removeItemToBoard, selectFieldData}) => {

    // const [dndCharacters, setDndCharacters] = useState(board);

    // const moveRow = useCallback((dragIndex, hoverIndex) => {
    //     setDndCharacters((prevCharacters) =>
    //       update(prevCharacters, {
    //         $splice: [
    //           [dragIndex, 1],
    //           [hoverIndex, 0, prevCharacters[dragIndex]]
    //         ]
    //       })
    //     );
    //   }, []);

  return (
    <div>
        {
            board.map((field)=>{
                return <div 
                            className='drop-form-field' 
                            key={field.id}
                            onClick={()=>selectFieldData(field)}
                        >
                            <Button className='remove-item' kind="tertiary" onClick={()=>removeItemToBoard(field.id)}>
                                X
                            </Button>
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