// In this we will learn about children prop
//more we learned about lists and keys refer notion for that
//inline styling 
//class based components and functional components theory mainly

import { useState } from 'react'
import './App.css'

function App() {

  return <div style={{display:"flex",background:"gray",borderRadius:10}}>
    <Card>
    <div style={{color:"green"}}>What do you want to post <br /><input type="text" /></div>
    </Card>
    <Card><div>Hi There</div></Card>
  </div>

  //fragments in react 
  // <>
  // <div>Hi There</div>
  // <div>Hello</div>
  // </>
}
function Card({children}) {
  return <div style={{background:"black",borderRadius:10,color:"white",padding:10,margin:10}}>
    Upper topbar
    {children}
    Lower topbar
  </div>
}

export default App
