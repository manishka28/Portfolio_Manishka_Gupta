import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
function About() {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
      <div className='w-full flex flex-col '>
        <p className='text-3xl font-bold text-black dark:text-white'>
          About Me
        </p>
        <p className='text-lg text-black dark:text-gray-400 leading-10'> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa ratione id laudantium voluptatum tempora ut facere cumque deleniti exercitationem, similique quibusdam, unde et excepturi aliquid facilis minima laborum odio. Debitis obcaecati, doloremque ullam assumenda omnis dolorum nihil ipsa repudiandae!
        </p>
        <div className='mt-5 2xl:mt-10 flex flex-wrap gap-5'>
          <a href="https://www.linkedin.com/in/manishkagupta" target="_blank" rel="noopener noreferrer" className='flex gap-3 items-center just rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaLinkedin size={14}/>Manishka Gupta
          </a>
          <a href="mailto:manishkagupta2808@gmail.com" target="_blank" rel="noopener noreferrer" className='flex gap-3 items-center just rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaEnvelope size={14}/>manishkagupta2808@gmail.com
          </a>
          <a href="https://github.com/manishka28" target="_blank" rel="noopener noreferrer" className='flex gap-3 items-center just rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaGithub size={14}/>Manishka Gupta
          </a>
          <a href="https://wa.me/919076736310" target="_blank" rel="noopener noreferrer" className='flex gap-3 items-center just rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaWhatsapp size={14}/>+91 9076736310
          </a>
        </div>

      </div>

    </div>
  )
}

export default About