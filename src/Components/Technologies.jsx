import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";

import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1 
      whileInView={{opacity:1, y:0 }}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl ">Technologies</motion.h1>
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4 lg:m-12">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p4">
          <RiReactjsLine className="text-7xl text-cyan-400 m-2" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p4">
          <BiLogoPostgresql className="text-7xl text-sky-700 m-2" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p4">
          <SiMongodb className="text-7xl text-green-500 m-2" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p4">
          <SiPrisma className="text-7xl m-2" />
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p4">
          <SiMysql className="text-7xl text-white-400 m-2" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p4">
          <FaNodeJs className="text-7xl text-green-500 m-2" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p4">
          <SiPostman className="text-7xl text-orange-500 m-2" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p4">
          <RiJavascriptFill className="text-7xl text-yellow-500 m-2" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p4">
          <SiSocketdotio className="text-7xl  m-2" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
