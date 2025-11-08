import { useState } from 'react'
import "tailwindcss";
import { Button } from './components/buttons';
import { Input } from './components/input';
import { Otp } from './components/otp';
import './App.css'

function App() {
  

  return (
    <>
    <div className='h-screen bg-blue-700'>
    <div>
      <br />
      <br />
      <br />
      <br />
      {/* <Input type="text" placeholder={"Username"}></Input>
      <Button disabled={true}>Continue</Button> */}
      <Otp number={10}/>
    </div>
    </div>
    </>
  )
}

export default App
