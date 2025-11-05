import { useState,useEffect } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import axios from "axios"
import { notifications, totalNotificationSelector } from './atoms'

function App() {

  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}
function MainApp(){
  const [networkCount , setNetworkCount ] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  
  useEffect(() => {
    //fetch
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(res =>{
      setNetworkCount(res.data)
    })
  },[])
  return(
    <>

      <button>Home</button>

      <button>My Network ({networkCount.network >= 100 ? "99+": networkCount.network})</button>
      <button>Jobs (networkCount.Jobs)</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notification ({networkCount.notifications})</button>

      <button>Me({totalNotificationCount})</button>
    </>
  )
}


export default App
