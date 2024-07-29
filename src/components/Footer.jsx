import React from 'react';
import {  BsTwitter, BsInstagram, BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <hr/>
      <div className='mt-3 flex gap-10 justify-center dark:text-white text-2xl mb-10'>
      <a href='https://github.com/manishka28' target='_blank' rel='noopener noreferrer'>
          <BsGithub />
        </a>
        <a href='https://www.linkedin.com/in/manishkagupta' target='_blank' rel='noopener noreferrer'>
          <BsLinkedin />
        </a>
        
        <a href='https://www.instagram.com/_manishka/' target='_blank' rel='noopener noreferrer'>
          <BsInstagram />
        </a>
        
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
          <BsFacebook />
        </a>
        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
          <BsTwitter />
        </a>
        
      </div>
      <p className='text-gray-400 font-dancing font-extrabold text-center pb-4 text-md tracking-wider'>
        @2024 Manishka Gupta
      </p>

    </footer>
  );
}

export default Footer;
