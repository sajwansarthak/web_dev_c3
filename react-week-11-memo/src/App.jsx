//React says anytime a component re-renders its children also re-renders
//But if you wrap a component inside a memo then
//Only if the props/state in that child has changed then only it will re-render



import { useEffect, useState,memo } from 'react'
import './App.css'

function App() {

  return (
    <>
    <Counter />
    </>
  )
}
function Counter (){
  const[count,setCount] = useState(0);

  useEffect(()=>{
    setInterval(() => {
      setCount(c => c+1)
    }, 3000);
  })


  return <div>
    <CurrentCount count={count} />
    <Increase />
    <Decrease />
  </div>
}


const CurrentCount = memo(function({count}){
  return <div>
    {count}
  </div>
})
const Increase = memo(function (){

  function increase(){

  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

const Decrease = memo(function (){

  function decrease(){

  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})

export default App
