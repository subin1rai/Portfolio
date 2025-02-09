import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
      
     <motion.h1 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}

     className='my-20 text-center text-4xl'>
        About
        <span className='text-neutral-500'>Me</span>
     </motion.h1>
     <div className='flex flex-wrap'>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex items-center justify-center '>
            <img src={aboutImg} alt="about logo"  className='rounded'  height={400} width={400}/>
        </div>
      
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}

        className='w-full lg:w-1/2'>
            <div className="flex justify-center lg:justify-start">
                <p className='MY-2 MAXW-XL PY-6'>{ABOUT_TEXT}</p>
            </div>

        </motion.div>
     </div>
    </div>
  )
}

export default About
