import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { color, motion } from "framer-motion"
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const liWhileTapEffect = {
    backgroundColor: "#00df9a",
    color: "#000300"
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <motion.h1
        drag
        dragConstraints={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          inertia: 100,
          type: "fixed",
          originX: 0,
          originY: 0,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            mass: 1,
            duration: 0.3,
            delay: 0,
            ease: "easeOut",
          },
        }} className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</motion.h1>


      <ul className='hidden md:flex'>
        <motion.li whileHover={liWhileTapEffect} className='p-[16px] cursor-pointer  rounded-[6px]'>Home</motion.li>
        <motion.li whileHover={liWhileTapEffect} className='p-[16px] cursor-pointer  rounded-[6px]'>Company</motion.li>
        <motion.li whileHover={liWhileTapEffect} className='p-[16px] cursor-pointer  rounded-[6px]'>Resources</motion.li>
        <motion.li whileHover={liWhileTapEffect} className='p-[16px] cursor-pointer  rounded-[6px]'>About</motion.li>
        <motion.li whileHover={liWhileTapEffect} className='p-[16px] cursor-pointer  rounded-[6px]'>Contact</motion.li>      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
