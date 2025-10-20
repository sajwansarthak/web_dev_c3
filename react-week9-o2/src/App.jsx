//Here we learn about useEffect, dependency array,cleanup function
import { useState,useEffect} from 'react'
import { PostComponent } from './post'
import './App.css'
import { Collection } from 'mongodb'

function App() {

  const[currentTab,setCurrentTab] = useState("Feed")

  useEffect(function(){
    //send backend request to get data for the current tab
    console.log("send request to backend to get data for tab " + currentTab)
  },[currentTab])

  return <div>
     <button onClick={function(){
      setCurrentTab("Feed")
     }} style={{color: currentTab == "Feed" ? "red":"black"}}>Feed</button>
     <button onClick={function(){
      setCurrentTab("Notifications")
     }} style={{color: currentTab == "Notifications" ? "red":"black"}}>Notifications</button>
     <button onClick={function(){
      setCurrentTab("Messages")
     }} style={{color: currentTab == "Messages" ? "red":"black"}}>Messages</button>
     <button onClick={function(){
      setCurrentTab("Jobs")
     }} style={{color: currentTab == "Jobs" ? "red":"black"}}>Jobs</button>
  </div>

  
}

export default App


//notification counter
//const [count , setCount] = useState(1);


// function increaseCount(){
  //   setCount(count => count + 1)
  // }
  // useEffect(function(){
  //   console.log("above setInterval")
  //   let clock = setInterval(increaseCount, 1000);
  // },[])//this effect will run on mount, because the array is empty
  // useEffect(function(){
  //   console.log("The count has been upgraded to " + count)
  // },[count])


  //cleanup function
  // return function(){
  //   clearInterval(clock)
  // }



// return <div>
  //   <div style={{display:"flex"}}>
  //     <div style={{background:"red",borderRadius:20,width:20,height:25,paddingLeft:10,paddingTop:5}}>
  //       {count}
  //       </div>
  //   </div>
  //   <img style={{cursor:"pointer",width:40}} src="https://cdn-icons-png.flaticon.com/512/472/472371.png"  />
  // </div>
