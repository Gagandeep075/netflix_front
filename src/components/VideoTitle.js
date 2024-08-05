import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {

  console.log("video Title is re rendering");
  return (
    <div className='w-[vw] absolute text-white pt-[18%] p-12'>
        <h1 className='lg:text-3xl sm:text-xl font-bold'>{title}</h1>
        <p className='lg:w-1/2 sm:w-full mt-4'> {overview} </p>
        <div className=' flex items-center mt-8'>
            <button className=' flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                <FaPlay size={20}/>
                <span className='lg:text-md sm:text-sm'>Play</span></button>
            <button className='flex lg:text-md sm:text-sm items-center ml-5 px-6 py-2 bg-gray-500 bg-opacity-60 text-black rounded-md hover:bg-opacity-80'>
                <FaInfoCircle size={20} />
                <span>Watch More</span>
                </button>
        </div>
    </div>
  )
}

export default VideoTitle