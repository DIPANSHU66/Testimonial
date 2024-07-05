import React, { useState } from 'react'
import  {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Card = (props) => {
    let review=props.reviews;
    const[index,setindex]=useState(0);

    function  leftshifthandler(){
      if(index-1<0){setindex(review.length-1);}
       else  setindex(index-1);
      }
    
    function  rightshifthandler(){
    if(index+1>=review.length){setindex(0);}
   else  setindex(index+1);}

    function  surprisehandler(){
     let  randomindex= Math.floor(Math.random()*review.length);
     setindex(randomindex);
    }

  return (
    <div  className=' flex  flex-col '>
         <div className='  mx-auto z-[10]'>
        <div  className=' absolute flex left-[0px]'> <img className=' aspect-square w-[100px] h-[100px]  rounded-full' src={review[index].image} alt="" />
        </div>

        </div>

      <div  className='flex flex-col '>
      <div  className=' mt-7'><p  className='font-bold  text-2xl  capitalsize'>{review[index].name}</p></div>
        <div  className='text-violet-300'><p>{review[index].job}</p></div>
        <div  className='text-violet-400   mx-auto mt-5'><FaQuoteLeft></FaQuoteLeft></div>
       <div className=' text-wrap mt-4  text-slate-500'>{review[index].text}</div>
       <div className='text-violet-400  mx-auto mt-5'><FaQuoteRight></FaQuoteRight></div>
       </div>

          <div className='flex  text-3xl  mt-5  gap-3 text-violet-400 font-bold justify-center' >
         <button  onClick={leftshifthandler}  className='cursor-pointer hover:text-violet-500'><FiChevronLeft></FiChevronLeft></button>
         <button  onClick={rightshifthandler}   className='cursor-pointer hover:text-violet-500'><FiChevronRight></FiChevronRight></button></div>
        <div ><button onClick={surprisehandler} className='bg-violet-400  hover:bg-violet-500 transition-all  duration-200  cursor-pointer  px-10 py-2  rounded-md  text-white  text-lg font-bold'>Surprise Me</button>
        </div>
      
    </div>
      
  )
}

export default Card
