import React from "react";
import { motion } from "framer-motion";
const ServicePageBanner = ({ heading, content }) => {
  return (
    <div className='services-section-one border-b pb-20 md:pb-40'>
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
            className='bfr-dot-wrapper pb-4 !pl-[5%] md:!pl-[3%] lg:!pl-[2%]'
          >
            <span className='dot border-txt text-gray-700'>Service</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            viewport={{ once: false }}
            className='font-light text-[40px] lg:text-[80px] md:text-[52px]  lg:w-8/12'
          >
            {heading}
          </motion.h2>
        </div>

        <div className='sm:flex items-center justify-between'>
          <motion.p
            className='w-full sm:w-8/12 md:w-6/12 text-[18px] md:text-[20px] lg:text-[24px] leading-[1.3]'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.3 },
            }}
          >
            {content}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }} 
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                opacity: { duration: 0.6, ease: "easeOut" },
                scale: { duration: 0.6, ease: "easeOut" },
                delay: 0.2,
              },
            }}
            viewport={{ once: false }}
            className='video-prt p-2 justify-self-end'
          >
            <video
              className='mb-video outline-none border-0 h-[128px] w-[128px]'
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source
                src='https://attilav.s3.eu-west-2.amazonaws.com/Quarter+Digital/Animation+3.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageBanner;
