import React from "react"
import "./App.scss"
import { InputText, Checkbox } from "./components/formComponent/index"
import Indextest from "./components/layoutComponent/indextest"

const App: React.FC = () => {
  return <>
    <div>
      <div style={{margin: '1rem'}}>
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
      <Indextest />
    </div>
  </>
}

export default App
