//useDebounce Hook

import { useState,useRef, useEffect } from 'react'
import './App.css'


function useDebounce(originalfn){
  const currentClock = useRef();

  const fn = () =>{
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalfn,200);
  }

  return fn;
}

function App() {
  function sendDataToBackend(){
    fetch("api.amazon.com/search/")
  }

  const debouncedfn = useDebounce(sendDataToBackend)

  return (
    <>
    <input type="text" onChange={debouncedfn} />
    </>
  );
}

export default App
