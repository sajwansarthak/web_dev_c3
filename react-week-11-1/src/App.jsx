
//useState => Store a state variable, re-renders a component when the variable changes
//useEffect => Run an effect when the dependency changes

//custom hooks  ---structure---
// function useValue(){
//   const [ value , setValue ] = useState(1)


//   return value 
// }


//creating useFetch hook
import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'


function App() {
  const [currentPost,setCurrentPost] = useState(1)

  const {finalData,loading} = useFetch("url/posts/"+ currentPost);

  if(loading){
    return <div>
      loading....
    </div>
  }




  return <div>
    <button onClick={() => setCurrentPost(1)}>1</button>
    <button onClick={() => setCurrentPost(2)}>2</button>
    <button onClick={() => setCurrentPost(3)}>3</button>
    {JSON.stringify(finalData)}
  </div>
}
export default App
