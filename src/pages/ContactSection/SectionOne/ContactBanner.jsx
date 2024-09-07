import { motion } from 'framer-motion';
import React from 'react';


const ContactBanner = () => {
  return (
    <div className='contact-section-one pt-[10rem] border-b pb-10 mb-20'>
    <div className='flex flex-col gap-6 md:gap-16'>
      <div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.3 },
          }}
          viewport={{ once: false }}
          className='bfr-dot-wrapper pb-4'
        >
          <span className='dot border-txt text-gray-700'>Contact us</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: 100 }} // Start with opacity 0 (completely invisible)
          whileInView={{
            opacity: 1, // Fade in to full opacity
            x: 0,
            transition: { duration: 0.8, delay: 0.3 }, // Customize duration and delay
          }}
          viewport={{ once: false }}
          className='font-light text-[40px] lg:text-[80px] md:text-[52px]  lg:w-8/12'
        >
        Starting a business or have a project in mind?{" "}
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.4 },
            }}
            className='text-gray-500'
          >
          {" "}Let’s chat.
          </motion.span>{" "}
        </motion.h1>
      </div>
    </div>
  </div>
  )
}

export default ContactBanner