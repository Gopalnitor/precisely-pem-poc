import React, { useRef, useState } from "react";
import { Grid, Row, Column } from '@carbon/react';
import { useDrop } from "react-dnd";
import ItemData from "./itemData";

const Indextest = () => {

    const [board, setBoard] = useState([]);
    const ref = useRef();
    const itemIds = [
        {
            id:'1',
            url:'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w'
        },
        {
            id:'2',
            url:'https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o'
        },
        {
            id:'3',
            url:'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w'
        },
        {
            id:'4',
            url:'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU'
        },
    ];

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item) => addItemsToBoard(item.id),
        collect: (monitor) =>({
            isOver: !!monitor.isOver(),
        }),
    //     hover: (item, monitor) => {
    //         // works fine and prints the correct data
    //         console.log("hover-item",item);
    //         console.log("hover-monitor",monitor.canDrop()) // true
    //    },

    }))

    const addItemsToBoard = (id) => {
        const pictureList = itemIds.filter((pic)=> id=== pic.id);
        setBoard((board)=> [...board, pictureList[0]]);
    }

    return (
        <Grid>
            <Column style={{border: 'solid', margin: '0.5rem'}} sm={4}>
                {
                    itemIds.map((itemid)=>{
                        return <ItemData key={itemid.id} id={itemid.id} url={itemid.url} />
                    })
                }
                {/* <div ref={drag} id="4" style={{ border: isDragging ? "5px solid pink" : "2px solid", margin : '0.5rem' }}>
                    <p>Column1.4</p>
                </div> */}
            </Column>
            <Column style={{border: 'solid'}} sm={4}>
                <div ref={drop} style={{height:'100%', border: 'solid blue'}}>
                    {
                        board.map((itemid)=>{
                            return <ItemData key={itemid.id} id={itemid.id} url={itemid.url} />
                        })
                    }
                </div>
            </Column>
            <Column style={{border: 'solid'}} sm={4}> column -3 </Column>
        </Grid>
  )
}

export default Indextest;