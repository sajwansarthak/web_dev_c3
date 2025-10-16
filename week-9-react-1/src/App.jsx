import { useState , useEffect } from "react"


//conditional rendering 
function App() {
  let [counterVisible ,setCounterVisible] = useState(true);

  useEffect(function(){
    setInterval(function() {
      setCounterVisible(c => !c)
    }, 5000);
  },[])
  return <div>
    <b>hi there</b>
    <div style={{visibility: counterVisible ? "hidden":"visible"}}><Counter></Counter></div>
    </div>
} 

// set Interval
// mounting , re-rendering , unmounting 
function Counter(){

  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count + 1)
  }

  console.log("counter")

  // hooking into the life cycle events of react
  //
  //guards our setInterval from re-renders
  useEffect( function(){
    let clock = setInterval(function() {
      setCount(count => count + 1)
    }, 1000);
    console.log("mounted")

    return function(){
      console.log("on unmout")
      clearInterval(clock)
    }
  },[])//dependency array , cleanup,fetch inside useEffect 
  
  function decreaseCount(){
    setCount(count - 1)
  }
  function resetCount(){
    setCount(0);
  }
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={resetCount}>Reset Count</button>
  </div>
}
export default App
