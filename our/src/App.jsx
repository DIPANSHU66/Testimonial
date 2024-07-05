import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/Testimonials'


function App() {
  return (
     <div  className='flex flex-col    justify-center
       w-[100vw] h-[100vh]  items-center bg-gray-300'>
       <div  className='text-center'>
        <h1 className="text-5xl font-bold">Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] w-[1/5] mt-1'></div>
         <Testimonials></Testimonials>
  </div>
   </div>
  )
}



export default App
