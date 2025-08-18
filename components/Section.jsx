import React from 'react'

const Section = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white mt-20 h-50 relative px-20'>
        <h1 className='text-6xl font-overpass'>A modern publishing platform</h1>
        <p className='text-xl mt-4'>Grow you audience and build you online brand</p>
        <div className='flex justify-center gap-3 mt-8 p-2'>
            <div><button className='bg-white text-red-400 font-ubuntu font-bold rounded-4xl p-3 w-35'>Start for Free</button></div>
            <div><button className='border border-white font-ubuntu font-bold rounded-4xl p-3 w-35'>Learn More</button></div>
        </div>
    </div>
  )
}

export default Section