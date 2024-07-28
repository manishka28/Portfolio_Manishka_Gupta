import React from 'react'
import photo from '../assets/images/photo.jpg';
export default function Header() {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20 justify-around'>
      <div className='flex flex-col w-7/10 mb-20 lg:mb-0'>
        <span className='text-lg font-bold text-orange-700'>
          FULL STACK DEVELOPER
        </span>
        <div className='flex gap-4 items-center my-4'>
          <h1 className='text-gray-800 dark:text-neutral-100 text-5xl 2xl:text-7xl font-bold text-center'>
            I'm
          </h1>
          {/* <div className='flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] 
          dark:text-[#224cff] rounded-full'>
            <p className='text-3xl 2xl:text-5xl font-bolf px-5 py-2 pb-2 text-center'>Developer
              
            </p>

          </div> */}

        </div>
        <h1 className='text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider'>
        Manishka Gupta
        </h1>
        <p className='text-md text-black dark:text-gray-100 mt-5 2xl:mt-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi esse vitae et numquam maiores quaerat ab? Beatae itaque voluptate explicabo laudantium rem provident earum nemo fugit nesciunt! Optio, culpa!
        </p>
        <div className='mt-10 flex gap-10'>
          <button className='bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5'>
            Hire Me
          </button>
          <a href="#projects">
            <button className='text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-[#224cff10]'>
              Projects
            </button>
          </a>
        </div>
        </div>
        <div className='w-3/10'>
        <div className='w-[400px] h-[400px]  md:w-[400px] md:h-[400px] 2xl:w-[600px] 2xl:h-[600px] rounded-full border border-r-2 border-black dark:border-white relative mx-auto mt-auto md:mt-20 lg:mt-0 flex items-center'>
          <img src={photo} className='rounded-full'/>
        </div>
        </div>
      

    </div>
  )
}
