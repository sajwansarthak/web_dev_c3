import { useState } from 'react'
import './App.css'
import { usePrev } from './hooks/usePrev'

function App() {

  const [state,setState] = useState(0);// 3 => 4
  const prev = usePrev(state); // 3
  

  return(
    <>
    <p>{state}</p>
    <button onClick={() => {setState((curr) => curr + 1)}}>Click me </button>
    <p>The previous value was {prev}</p>
    </>
  )
}

export default App
