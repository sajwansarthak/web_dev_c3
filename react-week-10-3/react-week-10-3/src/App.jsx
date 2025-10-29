//context api,Rolling up the state, unoptimal re-renders
import { useState,createContext,useContext } from 'react'
import './App.css'

//using context api's
const BulbContext = createContext();

function BulbProvider ({children}){ //created a wrapper component 
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>  
} 

function App() {
  return <div>
    <BulbProvider>
      <Light/>
    </BulbProvider>
  </div>
}


function Light(){
  //bulbOn is a prop to the bulb state component
  //bulbOn , setBulbOn are the prop to the ToggleBulbState component

  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}


function LightBulb(){
  const {bulbOn} = useContext(BulbContext)
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off"} 
  </div>
}


function LightSwitch(){
  const{bulbOn,setBulbOn} = useContext(BulbContext)


  function toggle(){
    setBulbOn(!bulbOn)
    //OR
    //setBulbOn(currentState => !currentState)
    //OR
    // setBulbOn(function(currentState){
    //   if(currentState == true){
    //     return false
    //   } else{
    //     return ture
    //   }
    // })
  }
  return <div>
    <button onClick={toggle}>Toggle the button</button>
  </div>
}


  
export default App
