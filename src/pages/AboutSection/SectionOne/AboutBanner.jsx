import React from 'react'
import "./AboutBanner.scss"
import { motion } from 'framer-motion'

const AboutBanner = () => {
    return (
        <div className='about-section-one-one border-b pb-10 mb-20'>
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
                        <span className='dot border-txt text-gray-700'>Our story</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: 100 }} 
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, delay: 0.3 },
                        }}
                        viewport={{ once: false }}
                        className='font-light text-[40px] lg:text-[80px] md:text-[52px]  lg:w-6/12'
                    >
                       Small, but mighty {" "}
                        <motion.span
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, delay: 0.4 },
                            }}
                            className='text-gray-500'
                        >
                           Webflow agency
                        </motion.span>{" "}
                    </motion.h1>
                </div>

                <div className='sm:flex items-center justify-between'>
                    <motion.p
                        className='w-full sm:w-8/12 md:w-6/12 text-[18px] md:text-[20px] lg:text-[24px]'
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, delay: 0.3 },
                        }}
                    >
                       At Nipralo Technologies, we value the strength of creativity and innovation and we are committed to providing exceptional Webflow design and development services. With a focus on quality and collaboration, we work closely with our clients to create websites that truly resonate with their target audience.
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
                            autoPlay={true}
                            loop
                            muted
                            playsInline
                            controls={false}
                        >
                            <source
                                src='https://attilav.s3.eu-west-2.amazonaws.com/Quarter+Digital/Pyramid-480.mp4'
                                type='video/mp4'
                            />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
         
                </div>
            </div>
        </div>
    )
}

export default AboutBanner