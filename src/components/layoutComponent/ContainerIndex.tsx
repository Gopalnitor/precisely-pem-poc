import React, { useState } from 'react';
import FormFieldsCompoent from './leftComponent/FormFieldsCompoent';
import { Tabs, Tab, TabList, TabPanels, TabPanel, Column, Grid } from '@carbon/react';
import FormTemplate from './middleComponent/FormTemplate';

const ContainerIndex = () => {
    
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
                                <FormTemplate/>
                            </Column>
                            <Column style={{border: 'solid'}} sm={4}> 
                                column -3 
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
