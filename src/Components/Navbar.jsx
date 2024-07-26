import React from 'react'
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Navbar = () => {
  return (
  <div className='mb-20 flex items-center justify-between py-6'>
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className='mx-2 w-10 lg:w-12'/>

    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
    </div>
  </div>
  )
}

export default Navbar;