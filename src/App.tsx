import React from "react"
import "./App.scss"
import { InputText, Checkbox, DropDown } from "./components/formComponent/index"
import Indextest from "./components/layoutComponent/indextest"
import ContainerIndex from "./components/layoutComponent/ContainerIndex"

const App: React.FC = () => {
  return <>
    <div>
      {/* <div style={{margin: '1rem'}}>
        <InputText 
          labelText="Name"
          helperText="Helper: Enter your Name"
          value=""
          id="Name"
        />
      </div>
      <div style={{margin: '1rem'}}>
        <Checkbox 
          labelText="CheckBox"
          helperText="Helper: Click for checked"
          id="checkBox"
        />
      </div>
      <div style={{margin: '1rem'}}>
       <DropDown 
        id={1}
        labelText={'DropDown Area'}
        items={[{'id': '1', 'text': 'text-1'}, {'id': '2', 'text': 'text-2'}]}
       />
      </div> */}
      {/* <Indextest /> */}
      <ContainerIndex />
    </div>
  </>
}

export default App
