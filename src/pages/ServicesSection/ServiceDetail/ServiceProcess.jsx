import React from 'react'
import { motion } from 'framer-motion'
const ServiceProcess = ({ heading, content, processPoints }) => {
    return (
        <div className='container service-section-four sm:pt-0'>
            <div className='mt-20 md:mt-40 pb-12 grid md:grid-cols-2 gap-32'>
                <div className='flex flex-col-reverse md:flex-col'>
                    <div>


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
                                <span className='dot border-txt'>Why Nipralo</span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, x: 100 }} // Start with opacity 0 (completely invisible)
                                whileInView={{
                                    opacity: 1, // Fade in to full opacity
                                    x: 0,
                                    transition: { duration: 0.8, delay: 0.3 }, // Customize duration and delay
                                }}
                                viewport={{ once: false }}
                                className='font-light text-[32px] md:text-[44px] lg:text-[56px]'
                            >
                                {heading}
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
                        <div className='top-prt-right pt-4 md:pt-6 '>
                            <motion.p
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.8, delay: 0.3 },
                                }}
                                className='text-[16px] md:text-[18px] leading-[1.5]'
                            >
                                {content}
                            </motion.p>
                        </div>
                    </div>
                    <div className='mt-20 md:mt-40'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }} // Start smaller and transparent
                            whileInView={{
                                opacity: 1,
                                scale: 1, // Scale up to full size
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
                                className='mb-video outline-none border-0 h-[144px] w-[144px] md:h-[160px] md:w-[160px] lg:h-[256px] lg:w-[256px] mb-[-40px] md:mb-[auto]'
                                autoPlay
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



                <div className='service-process'>

                    {
                        processPoints && processPoints.map((process, index) => {
                            let delayp = 0.1;
                            if (index > 0) {
                                delayp = delayp + 0.1;
                            }

                            return (
                                <motion.div

                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                        transition: { duration: 0.6, delay: delayp }
                                    }}
                                    key={index} className='pt-8 pb-4 border-t'>
                                    <div className='flex items-center mb-4'>
                                        <span className='cus-dot'></span>
                                        <h3 className='text-[18px] md:text-[24px] mb-0'>{process.title}</h3>
                                    </div>
                                    <p className='text-14px md:text-[16px] leading-[1.5]'>{process.content}</p>
                                </motion.div>
                            )

                        })
                    }
                    {/* <div className='py-4 border-t'>
                        <div className='flex items-center mb-4'>
                            <span className='cus-dot'></span>
                            <h3 className='text-[18px] md:text-[24px] mb-0'>Webflow expertise</h3>
                        </div>
                        <p className='text-14px md:text-[16px] leading-[1.5]'>Our deep understanding of Webflow's platform allows us to optimise your site in a way that leverages its unique features and capabilities. We know how to make Webflow work for your SEO goals, ensuring that your site is built with SEO best practices from the ground up.</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ServiceProcess