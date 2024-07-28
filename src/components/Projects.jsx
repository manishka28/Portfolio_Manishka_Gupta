import React from 'react';
import projects from '../assets/projects.json'
import {tools} from '../components/data.js'

function Projects({}) {
  return (
    <div>
      <div className='w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-10'>
        {projects.map((project) => (
          <div key={project.id} className='flex flex-col gap-2 items-center px-4 py-3 text-black dark:bg-[#0000FF20] dark:text-white rounded-md'>
            <h3 className='dark:text-white text-4xl font-bold'>{project.title}</h3>
            <p className='dark:text-white text-2xl'>{project.description}</p>
            <button className='bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5'>
            <a href={project.link} className=' text-2xl' target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            </button>
          </div>
        ))}
      </div>
      <div className='w-full flex  flex-wrap items-center justify-center gap-10 lg:gap-20 mt-16'>
        {
          tools.map((t,index)=>(
            <div className='flex gap-2 items-center bg-white rounded-md shadow-lg px-5 py-1'>
              <img src={t.icon} className='w-10 h-10'/>
              <p className='text-black text-md'>{t.name}</p>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default Projects;
