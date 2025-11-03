import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atom/counter';

//recoil
//1->npm install recoil 
//2->wrapping our application inside recoil 


//Atoms 
//1->import atom from the recoil library 
//2->define your atom outside your component tree



function App() {

  return (
    <>
    <RecoilRoot>
    <Counter/>
    </RecoilRoot>
    </>
  )
}

//creating a state using recoil  


function Counter(){

  return <div>
    <CurrentCounter />
    <Increase />
    <Decrease />
  </div>
}
function CurrentCounter(){
  const count = useRecoilValue(counterAtom)


  return <div>
    {count}
  </div>
}
function Increase (){
  const setCount = useSetRecoilState(counterAtom)



  function increase (){
    setCount( c=> c+1)
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

function Decrease (){
  const setCount = useSetRecoilState(counterAtom)



  function decrease (){
    setCount( c => c-1)
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

export default App
