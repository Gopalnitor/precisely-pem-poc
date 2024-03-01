import React, { useEffect, useRef, useState } from 'react'
import { useDrop, useDrag } from 'react-dnd';

const DragDropComponent = ({ item, index, board }) => {

    const [dndItems, setDndItems] = useState(board);
    const combinedRef = useRef(null);

    console.log('final board-',board);

    const [{ isOver }, boarddrop] = useDrop({
        accept: 'FormFileds',
        hover(item, monitor) {
            if (!combinedRef.current){
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            console.log("cc dragIndex,hoverIndex",dragIndex,hoverIndex)

            if(dragIndex == hoverIndex) {
                return;
            }

            const hoveredRect = combinedRef.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            //console.log('1st dragIndex, hoverIndex, hoverClientY < hoverMiddleY',dragIndex, hoverIndex,hoverClientY, hoverMiddleY)


            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            //console.log('2nd - dragIndex, hoverIndex',dragIndex, hoverIndex)
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
    //    const item = dndItems[dragIndex];
    //    setDndItems((prevState) => {
    //     const newItems = prevState.filter((i, idx) => idx !== dragIndex);
    //     newItems.splice(hoverIndex, 0, item);
    //     console.log('newdropitemlist-->',newItems)
    //     return [ ...newItems ];
    //    });
    };

    drag(boarddrop(combinedRef))
  return (
    <div ref={combinedRef} className='drop-form-field' id='myloveText' style={{border: isDragging ? 'solid blue' : 'solid yellow'}}>
        {
            <item.Component
                id={item.id}
                labelText={item.Name}
            />
        }
    </div>
  )
}

export default DragDropComponent;
