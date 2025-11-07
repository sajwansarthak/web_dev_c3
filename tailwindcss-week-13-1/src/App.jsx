import { useState } from 'react'
import "tailwindcss";
import './App.css'

function App() {


  return(
    <>
    <div className='grid grid-cols-12'>
      <div className='col-span-12 sm:col-span-5 bg-blue-300 text-xl rounded'>  {/*font-size,border-radius .. See tailwind docs to see all the components and there usage */}
        hey i am sathak
      </div>
      <div className='col-span-12 sm:col-span-5 bg-green-300'>
        hello
      </div>
      <div className='col-span-12 sm:col-span-2 bg-red-300'>
        namaste
      </div>
    </div>
    </>
  )
}

export default App


// {/* Flex-Box in tailwing  */}
//     {/* <div style={{display:"flex",justifyContent:"space-between"}}> */}
//     <div className='flex justify-center'> {/*'flex-justify-between/center/ just see justify content on tailwindcss doc online ' */}
//     <div>
//       child-1
//     </div>
//     <div>
//       child-2
//     </div>
//     <div>
//       child-3
//     </div>
//   </div>



//  {/* Grids in tailwindcss */}
//  <div className='grid grid-cols-12'>
//  <div className='bg-blue-300 col-span-4'>
//    child-1
//  </div>
//  <div className='bg-red-300 col-span-6'>
//    child-2
//  </div>
//  <div className='bg-green-300 col-span-2'>
//    child-3
//  </div>
// </div>



//Responsiveness items
// {/* The element with the prefix will appear at the breakpoint and above the breakpoint . The command without the prefix will be the default command  */}
// <div className='md:bg-green-300 sm:bg-blue-300 bg-red-300'>
// hi there
// </div>
