import React from "react";
import { motion } from "framer-motion";

const ServicePagePoints = ({ heading1, heading2, content, servicePoints }) => {
  return (
    <div className='container home-section-four sm:pt-0'>
      <div className='top-prt lg:grid md:grid-cols-2 gap-40 mt-20 md:mt-40 pb-12'>
        <div className='top-prt-left w-full'>
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
            <span className='dot border-txt'>Our Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 100 }} // Start with opacity 0 (completely invisible)
            whileInView={{
              opacity: 1, // Fade in to full opacity
              x: 0,
              transition: { duration: 0.8, delay: 0.3 }, // Customize duration and delay
            }}
            viewport={{ once: false }}
            className='font-light'
          >
            {heading2}
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.4 },
              }}
              viewport={{ once: false }}
              className='lght-txt-clr'
            >
              {heading1}
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.5 },
              }}
            ></motion.span>
          </motion.h2>
        </div>
        <div className='top-prt-right pt-6 md:pt-12 '>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            className='text-[18px] leading-[1.5]'
          >
            {content}
          </motion.p>
        </div>
      </div>

      <div className='services-point grid md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
        {servicePoints &&
          servicePoints.map((point, index) => {
            return (
              <div
                key={index}
                className='service point-card flex flex-col gap-4 border-t py-6 md:py-10'
              >
                <div className='flex items-center mb-2'>
                  <span className='cus-dot'></span>
                  <h3 className='text-[18px] sm:text-[20px] md:text-[24px] mb-0'>
                    {point.heading}
                  </h3>
                </div>
                <p className='text-[14px] md:text-[16px] leading-[1.5] mb-0'>
                  {point.content}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ServicePagePoints;
