import { useEffect, useState } from 'react'
import './App.css'
import { SidebarClass1 } from './components/answers/1-basic-project'
import { Sidebar2Transition } from './components/sidebar/sidebar2transition'
import { SidebarToggle } from './components/icons/sidebartoggle'



//useMedia Queries


const useMediaQuery = (query) =>{
  const [matches , setMatches] = useState(false);

  useEffect(()=>{
    const media = window.matchMedia(query);
    if(media.matches !== matches ){
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  },[matches,]);

  return matches;
}
function App() {
  const [sidebarOpen,setSidebarOpen] = useState(true)

  const isDesktop = useMediaQuery("min-width: 768px")

  useEffect(()=>{
    if(isDesktop == false){
      setSidebarOpen(false)
    }else{
      setSidebarOpen(true)
    }
  },[isDesktop])

  return (
    <div className='flex'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <MainContent sidebarOpen={sidebarOpen}/>
    </div>
  )
}
function Sidebar({sidebarOpen,setSidebarOpen}){

  if(sidebarOpen){
    return <div className='w-96 h-screen bg-red-100 fixed top-0 left-0 md:relative'>
    <div>
      <div className='cursor-pointer hover:bg-slate-200' onClick={()=>{
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarToggle/>
      </div>
    </div>
  </div>
  } else{
    return <div className='fixed top-0 left-0 bg-white'>
      <div className='cursor-pointer hower:bg-slate-200' onClick={() =>{
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarToggle/>
      </div>
    </div>
  }
}

function MainContent(){
  return (
  <div className='w-full'>
    <div className='h-52 bg-black hidden md:block'></div>
    <div className='grid grid-cols-10 gap-8 p-8'>
      <div className='h-96 rounded-2xl shadow bg-red-200 md:col-span-2 -translate-y-18 shadow-lg col-span-10 hidden md:block'>

      </div>
      <div className='h-96 rounded-2xl shadow bg-green-200 md:col-span-5 shadow-lg col-span-10'>

      </div>
      <div className='h-96 rounded-2xl shadow bg-yellow-200 md:col-span-3 shadow-lg col-span-10'>

      </div>
    </div>
  </div>
  )
}
export default App



//darkmode (not best)
{/* <div className={`h-screen ${darkmode ? 'bg-white' :'bg-blue-800'}`}> normally we will do like this  */}


    {/* but in tailwind we will do like this  */}
    {/* <div className='h-screen bg-white dark:bg-blue-800 text-black dark:text-white'>
      <h1>Toggle Theme</h1>
      <button onClick={()=>{
        console.log(document.querySelector("html").classList)
      }}>Toggle Item</button>
    </div> */}


    //if you want to toggle manually then go to darkmode selector on tailwindcss
