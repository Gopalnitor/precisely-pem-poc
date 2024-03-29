import React, { useState } from 'react';
import FormFieldsCompoent from './left-Component/FormFieldsCompoent';
import { Tabs, Tab, TabList, TabPanels, TabPanel, Column, Grid } from '@carbon/react';
import FormTemplate from './canvas/FormTemplate';
import { useDrop } from "react-dnd";
import { ComponentList } from './left-Component/constants';
import DragDropComponent from './canvas/DragDropComponent';

const ContainerIndex = () => {

    const [board, setBoard] = useState([]);

    const [shcemaBoard, setSchemaBoard] = useState([]);  

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'FormFileds',
        drop: (formFields) => addItemsToBoard(formFields),
        collect: (monitor) =>({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addItemsToBoard = (formFields:any) => {
        if (formFields?.index !== undefined){
            moveItem();
        }else{
            const dragedField = ComponentList.filter((field)=> formFields.formField.id === field.id)[0];
            dragedField.id = Date.now().toString(36);
            setBoard((board)=> [...board, dragedField]);
        }
    }

    const moveItem = () => {
        let hoverIndex = localStorage.getItem('hoverIndex');
        let dragIndex = localStorage.getItem('dragIndex')
        if (hoverIndex !== undefined && dragIndex !== undefined) {
            setBoard((prevState) => {
            const item = prevState[dragIndex]
            const newItems = prevState.filter((i, idx) => prevState.filter((i, idx) => idx !== Number(dragIndex)));
            newItems.splice(Number(hoverIndex), 0, item);
            return [ ...newItems ];
            });
        }
     };

    const removeItemToBoard = (fieldId:any) => {
        const updatedboard = board.filter((field)=> fieldId != field.id);
        setBoard(updatedboard);
    }

    const selectFieldData = (fieldObj: any) => {
        setSchemaBoard((shcemaBoard)=> [...shcemaBoard, fieldObj.Name]);
    }
    
    return (
        <>
            <Tabs>
                <TabList aria-label="List of tabs" activation="manual">
                    <Tab>Edit</Tab>
                    <Tab>PreView</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid>
                            <Column sm={4}> 
                                <FormFieldsCompoent />
                            </Column>
                            <Column style={{border: 'solid'}} sm={4}> 
                                <div className='drop-board' ref={drop}>
                                    {/* <FormTemplate 
                                        board={board}
                                        removeItemToBoard={removeItemToBoard}
                                        selectFieldData={selectFieldData}
                                    /> */}
                                   {
                                    board.map((item, idx) =>{
                                        return <DragDropComponent
                                            item={item}
                                            index={idx}
                                            board={board}
                                            selectFieldData={selectFieldData}
                                            removeItemToBoard={removeItemToBoard}
                                        />
                                    })
                                   }
                                </div>
                            </Column>
                            <Column style={{border: 'solid'}} sm={4}> 
                                {
                                    shcemaBoard.map((fieldItem)=>{
                                        return <div style={{margin:'1rem'}}>
                                           {fieldItem}
                                        </div>
                                    })
                                }
                            </Column>
                        </Grid>
                    </TabPanel>

                    <TabPanel>PreView</TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default ContainerIndex;
