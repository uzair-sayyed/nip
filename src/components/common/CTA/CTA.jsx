import React from "react";
import "./CTA.scss";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const CTA = ({
  firstTitle,
  secondTitle,
  detailText,
  btnInitialText,
  btnFlippedText,
  btnWidth,
}) => {

  const navigate=useNavigate()
  return (
    // <div className='cta-card grid grid-cols grid-cols-2 md:grid-cols-12 gap-20 px-20 rounded-[32px]'>
    <div className='cta-card flex flex-col-reverse lg:flex-row lg:gap-20 px-6 lg:px-20 rounded-[32px]'>
      <div className='py-6 lg:py-24'>
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
          <span className='dot border-txt'>Get in touch</span>
        </motion.div>
        <div className="lg:w-9/12">
          <motion.h2
            initial={{ opacity: 0, x: 100 }} // Start with opacity 0 (completely invisible)
            whileInView={{
              opacity: 1, // Fade in to full opacity
              x: 0,
              transition: { duration: 0.8, delay: 0.3 }, // Customize duration and delay
            }}
            viewport={{ once: false }}
            className='font-light mb-6 lg:mb-10'
          >
            <motion.span
              initial={{ opacity: 0, x: 100 }} // Start with opacity 0 (completely invisible)
              whileInView={{
                opacity: 1, // Fade in to full opacity
                x: 0,
                transition: { duration: 0.8, delay: 0.4 }, // Customize duration and delay
              }}
              viewport={{ once: false }}
            >
              {firstTitle}
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 100 }} // Start with opacity 0 (completely invisible)
              whileInView={{
                opacity: 1, // Fade in to full opacity
                x: 0,
                transition: { duration: 0.8, delay: 0.5 }, // Customize duration and delay
              }}
              viewport={{ once: false }}
              className='lght-txt-clr'
            >
              {secondTitle}
            </motion.span>
          </motion.h2>
          {detailText && (
            <motion.p
              initial={{ opacity: 0, x: 100 }} // Start with opacity 0 (completely invisible)
              whileInView={{
                opacity: 1, // Fade in to full opacity
                x: 0,
                transition: { duration: 0.7, delay: 0.5 }, // Customize duration and delay
              }}
              viewport={{ once: false }}
              className='lg:w-8/12 mb-6 lg:mb-10'
            >
              {detailText}
            </motion.p>
          )}
          <Button
            initialText={btnInitialText}
            flippedText={btnFlippedText}
            showArrow={true}
            width={btnWidth}
            onClick={()=>{
              navigate('/contact')
            }}
          />
        </div>
      </div>
      <div className='lg:py-24'>
        <div className='video-prt md:!w-full p-2 flex lg:block justify-end'>
          <video
            className='mb-video outline-none border-0'
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
        </div>
      </div>
    </div>
  );
};

export default CTA;
