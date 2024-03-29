import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>Growing With Data Analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast,Flexible and Financing got </p>
            <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['BTB , BTC, SASS']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <div className='md:text-2xl text-xl font-bold text-gray-500'>Monitor Your Data Analytics to Increase to Increase revenue for BTB,BTC && SASS Platforms</div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto text-black py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero