import React from 'react'
import { useDrag } from "react-dnd";

const ItemData = ({ id, url }) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type:'image',
        item: { id: id },
        collect: (monitor) =>({
            isDragging: !!monitor.isDragging(),
        }),
    }))

  return (
    <>
    <img 
        ref={drag} 
        id={id} 
        src={url} 
        width='100px' 
        style={{ border: isDragging ? "5px solid pink" : "2px solid", margin : '0.5rem' }}
        draggable="false"
    />
    {/* <div ref={drag} id={id} style={{ border: isDragging ? "5px solid pink" : "2px solid", margin : '0.5rem' }}>
        <p>Column-{id}</p>
    </div>     */}
    </>
  )
}

export default ItemData;
