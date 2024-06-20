import React, { useRef } from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { animate, color, motion, useInView } from "framer-motion"

const Footer = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  const liHoverEffect = {
    x: 5,
    color: "#00df9a",
    transition: { duration: 0.2, ease: "easeIn" },
    cursor: "pointer"
  }

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <motion.h1
          ref={ref}
          initial={{
            opacity: 0,
            color: "#fff",
            x: -60
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            color: "#00df9a",
            x: isInView ? 0 : -60
          }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className='w-full text-3xl font-bold'>REACT.</motion.h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
        <h6>Solitions</h6>
          <ul>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Analytics</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Marketing</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Commerce</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Insights Status</motion.li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Pricing</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Documentation</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Guides</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>API Status</motion.li>
          </ul>
        </div>
        <div>
        <h6>Company</h6>
          <ul>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>About</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Blog</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Jobs</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Press</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Careers</motion.li>
          </ul>
        </div>
        <div>
        <h6>Legal</h6>
          <ul>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Claim</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Policy</motion.li>
            <motion.li whileHover={liHoverEffect} className='py-2 text-sm'>Terms</motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
