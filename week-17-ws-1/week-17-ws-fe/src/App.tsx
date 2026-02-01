
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket,setSocket] = useState();
  //to read the value which user is inputting 
  const inputRef = useRef();

  function sendMessage(){
    if(!socket){
      return;
    }
    const message = inputRef.current.value
    //@ts-ignore
     socket.send(message)
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")

    // ws.onerror = () =>{

    // }
    // ws.close = ()=>{

    // }

    // ws.onopen = () =>{

    // }

    ws.onmessage = (ev) =>{
      alert(ev.data)
    }
  },[])


  return (
    <div>
      <input type="text" placeholder='Message..'></input> 
      <button onClick={sendMessage}>Send</button>
      hi there
    </div>
  )
}

export default App
