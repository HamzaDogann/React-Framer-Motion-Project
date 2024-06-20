import React, { useRef } from 'react';
import Laptop from '../assets/laptop.jpg';
import { motion, useInView } from "framer-motion";

const Analytics = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <motion.img
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
          className='w-[500px] mx-auto my-4' src={Laptop} alt='Laptop' />
        <div className='flex flex-col justify-center'>
          <motion.p
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
       
            className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</motion.p>
          <motion.h1
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s"

            }}
            className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</motion.h1>
          <motion.p
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"

            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </motion.p>
          <motion.button
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 3s"

            }}
            className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</motion.button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
