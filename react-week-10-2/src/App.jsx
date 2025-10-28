//working with useRef and custom hooks
//useRef
//reference to the value, such that when you change the value,the components does not re-renders 
import { useState,useRef } from 'react'
import './App.css'
//a clock with start stop button 
function App() {
  const [currentCount,setCurrentCount] = useState(1);
  //let timer = 0 ; bad approach
  //const [timer , setTimer] = useState(0); worst approach because of an extra re-render we should useRef where we want to store a variable but dont want to display it in our raw html
  const timer = useRef();

  function startClock(){
    let value = setInterval(function() {
      setCurrentCount(c=>c+1)
    }, 1000);
    timer.current = value;
  }
  function stopClock(){
    clearInterval(timer.current)
  }

  return <div>
    {currentCount}
    <br />
    <button onClick={startClock}>start</button>
    <button onClick={stopClock}>stop</button>
  </div>
}

export default App


//useRef example



// const inputRef = useRef();

//   function focusOnInput(){
//     //document.getElementById("name").focus()
//     inputRef.current.focus();
//   }
// <div>
//     Sign up
//     <input ref={inputRef} type="text" />
//     <input type="text" />
//     <button onClick={focusOnInput}>Submit</button>
//   </div>
