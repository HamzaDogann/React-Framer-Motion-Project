import React from 'react';
import { motion, useInView } from "framer-motion"


const Hero = () => {



  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <motion.p initial={{ opacity: 0, y: 60, zIndex: -32 }} animate={{ opacity: 1, y: 0, zIndex: -32 }} transition={{ duration: 0.8, ease: "easeOut" }} className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </motion.p>
        <motion.h1 initial={{ opacity: 0, x: -150, zIndex: -32 }} animate={{ opacity: 1, x: 0, zIndex: -32 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }} className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </motion.h1>
        <div className='flex justify-center items-center'>
          <motion.p initial={{ opacity: 0, x: 150, zIndex: -32 }} animate={{ opacity: 1, x: 0, zIndex: -32 }} transition={{ duration: 1.4, ease: "easeOut", delay: 2.1 }} className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </motion.p>
          <div
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          />
        </div>
        <motion.p initial={{ opacity: 0, scale: 0.8, zIndex: -32 }} animate={{ opacity: 1, scale: 1, zIndex: -32 }} transition={{ duration: 1, ease: "easeOut", delay: 3.5 }} className='md:text-xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</motion.p>
        <motion.button initial={{ opacity: 0, y: 60, zIndex: -32 }} animate={{ opacity: 1, y: 0, zIndex: -32 }} transition={{ duration: 0.8, ease: "easeOut", delay: 4.7 }} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</motion.button>
      </div>
    </div>
  );
};

export default Hero;
