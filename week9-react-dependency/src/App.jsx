import { useEffect, useState } from 'react'

//Re-learning Cleanup,useEffect. Learning about dependency array
function App() {

  const[count,setCount] = useState(0);
  const[count2,setCount2] = useState(0);

  function increaseCount(){
    setCount(c => c+1)
  }
  function decreaseCount(){
    setCount2(c => c-1)
  }
  return <div>
    <Counter count={count} count2={count2} ></Counter>

    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
  </div>
}

//mounting , re-rendering , unmounting
function Counter(props){



  useEffect(function(){
    console.log("mount")

    return function(){
      console.log("unmount")
    }
  },[])

  useEffect(function(){
    console.log("count has changed")

    return function(){
      console.log("cleanup inside second effect")
    }
  },[props.count])

  useEffect(function(){

  })

  return <div>
    Counter1 {props.count}
    Counter2 {props.count2}
  </div>


}
export default App
