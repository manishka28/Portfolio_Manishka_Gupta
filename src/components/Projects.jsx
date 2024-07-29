import React from 'react'
import { projects } from './data'

function Projects() {
  return (
    <div className='w-full flex flex-col pb-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-15 lg:px-20'>
      <h4 className='text-3xl font-bold text-center text-black dark:text-white mt-10'>
        Projects
      </h4>
      <div className='flex flex-wrap gap-10 lg:gap-20 justify-center'>
        {
          projects.map((p,index)=>(
            <div key={index}
            className='w-[350px] h-[450px] cursor-pointer shadow-xl hover:scale-105 ease-in-out duration-200 rounded-md '>
              <img src={p.img} alt={p.name} className='w-full h-[250px] object-cover rounded-md'/>
              <div className='w-full h-[250px] mx-3 bg-white dark:bg-[#04133e]'>
                <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-1'>{p.title}</h4>
                <p className='text-sm dark:text-white flex gap-2 px-1 uppercase'>
                  {
                    p.tech.map((t,index)=>(
                      <img src={t} className='w-[40px] h-[40px] rounded-md'/>
                    ))
                  }
                </p>
                <p className='text-sm text-orange-600 px-1'>{p.details}</p>
                <button className='text-lg text-white font-semibold rounded-md py-1 px-3 mt-3 bg-black dark:bg-[#224cff10]'>
                  Check out
                </button>
              </div>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Projects

