import React from 'react'
import { FiSun } from 'react-icons/fi'
import { MdOutlineNightlight } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
function Navbar({darkMode,isOpen,toggleMenu,toggleTheme}) {
  // console.log(darkMode);
  return (
    <div className='px-0 2xl:px-40'>
      <div className='w-full items-center justify-between py-4 px-10'>
      <div className='flex items-center justify-between w-full'>
        <a href='/' className='text-2xl font-bold text-blue-500 cursor-pointer'>Manishka Gupta</a>
        <ul className='hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200'>
          <li className='cursor-pointer hover:text-blue-500'>
            <a href='#home'> Home </a>
          </li>
          <li className='cursor-pointer hover:text-blue-500'>
            <a href='#home'> About </a>
          </li>
          <li className='cursor-pointer hover:text-blue-500'>
            <a href='#home'> Projects </a>
          </li>
          
        </ul>
        <div className='flex items-center'>
        <button onClick={toggleTheme} className='p-2 '>
          {darkMode?(
            <FiSun size={24} color={"white"}/>
            ):(<MdOutlineNightlight size={24} color={"gray"}/>)
            }
        </button>
        <button
              type="button"
              className='md:hidden ml-4'
              aria-controls='mobile-menu'
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <AiOutlineClose size={26} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <BiMenu size={26} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
      
      {/* Mobile Menu  */}
      <div
      className={`${isOpen ? "block pt-4":"hidden"} md:hidden`}
      id='mobile-menu'>
        <div className='flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200'>
          <a href="#home" onClick={toggleMenu} className='cursor-pointer'>
            Home
          </a>
          <a href="#about" onClick={toggleMenu} className='cursor-pointer'>
            About
          </a>
          <a href="#project" onClick={toggleMenu} className='cursor-pointer'>
            Projects
          </a>
          
        </div>
        </div>
        </div> 

      </div>
      </div>

    </div>
  )
}

export default Navbar