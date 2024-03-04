import React, { useEffect, useRef, useState } from 'react'
import { useDrop, useDrag } from 'react-dnd';
import { Button } from '@carbon/react';

const DragDropComponent = ({ item, index, board, selectFieldData, removeItemToBoard }) => {

    const [dndItems, setDndItems] = useState(board);
    const combinedRef = useRef(null);

    const [{ isOver }, boarddrop] = useDrop({
        accept: 'FormFileds',
        hover(item, monitor) {
            if (!combinedRef.current){
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if(dragIndex == hoverIndex) {
                return;
            }

            const hoveredRect = combinedRef.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;


            // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            //     return;
            // }

            // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            //     return;
            // }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;

        }
    })

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'FormFileds',
        item: { formField: item, hoverIndex: index },
        collect: (monitor) =>({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const moveItem = (dragIndex:any, hoverIndex:any) => {
        if (dragIndex !== undefined && hoverIndex !== undefined) { 
            localStorage.setItem('dragIndex',dragIndex);
            localStorage.setItem('hoverIndex',hoverIndex);
        }
    };

    drag(boarddrop(combinedRef))
  return (
    <div>
        <Button className='remove-item' kind="tertiary" onClick={()=>removeItemToBoard(item.id)}>
            X
        </Button>
        <div
        ref={combinedRef} 
        className='drop-form-field'
        key={item.id}
        onClick={()=>selectFieldData(item)} 
        style={{border: isDragging ? 'solid blue' : 'solid yellow'}}>
            {
                <item.Component
                    id={item.id}
                    labelText={item.Name}
                />
            }
        </div>
    </div>
  )
}

export default DragDropComponent;
