import { motion } from 'framer-motion'
import React from 'react'

const AboutProcess = () => {
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
                        initial={{ opacity: 0, x: 100 }} 
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, delay: 0.3 },
                        }}
                        viewport={{ once: false }}
                        className='font-light'
                    >
                        How we do things

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
                        Here's a brief overview of our process. This is exactly the kind of thing that puts people off, that's why we've tried to keep things as simple and pain-free as possible.
                    </motion.p>
                </div>
            </div>

            <div className='services-point grid md:grid-cols-2 lg:grid-cols-3 gap-x-20'>

                <div className='service point-card flex flex-col gap-4 pb-6 md:pb-10 mt-[-20px] hidden md:block'>
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
                            className='mb-video outline-none border-0 lg:h-[186px] lg:w-[256px]'
                            autoPlay={true}
                            loop
                            muted
                            playsInline
                            controls={false}
                        >
                            <source
                                src="https://attilav.s3.eu-west-2.amazonaws.com/Quarter+Digital/Cross-300.mp4"
                                type='video/mp4'
                            />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </div>

                {/* =========================================================== */}
                <div className='service point-card flex flex-col gap-4 border-t py-6 md:py-10'>
                    <div className='flex items-center mb-2'>
                        <span className='cus-dot'></span>
                        <h3 className='text-[18px] sm:text-[20px] md:text-[24px] mb-0'>
                            Scoping session
                        </h3>
                    </div>
                    <p className='text-[14px] md:text-[16px] leading-[1.5] mb-0'>
                        A friendly and informal chat over a cup of tea is the best way to get started. We’ll learn about your business and get a sense of your timeline and when you’d like this new website project to go live.
                    </p>
                </div>
                {/* =========================================================== */}
                <div className='service point-card flex flex-col gap-4 border-t py-6 md:py-10'>
                    <div className='flex items-center mb-2'>
                        <span className='cus-dot'></span>
                        <h3 className='text-[18px] sm:text-[20px] md:text-[24px] mb-0'>
                            Proposal
                        </h3>
                    </div>
                    <p className='text-[14px] md:text-[16px] leading-[1.5] mb-0'>
                        A friendly and informal chat over a cup of tea is the best way to get started. We’ll learn about your business and get a sense of your timeline and when you’d like this new website project to go live.
                    </p>
                </div>
                {/* =========================================================== */}
                <div className='service point-card flex flex-col gap-4 border-t py-6 md:py-10'>
                    <div className='flex items-center mb-2'>
                        <span className='cus-dot'></span>
                        <h3 className='text-[18px] sm:text-[20px] md:text-[24px] mb-0'>
                            Strategy
                        </h3>
                    </div>
                    <p className='text-[14px] md:text-[16px] leading-[1.5] mb-0'>
                        A friendly and informal chat over a cup of tea is the best way to get started. We’ll learn about your business and get a sense of your timeline and when you’d like this new website project to go live.
                    </p>
                </div>
                {/* =========================================================== */}
                <div className='service point-card flex flex-col gap-4 border-t py-6 md:py-10'>
                    <div className='flex items-center mb-2'>
                        <span className='cus-dot'></span>
                        <h3 className='text-[18px] sm:text-[20px] md:text-[24px] mb-0'>

                            Build
                        </h3>
                    </div>
                    <p className='text-[14px] md:text-[16px] leading-[1.5] mb-0'>
                        A friendly and informal chat over a cup of tea is the best way to get started. We’ll learn about your business and get a sense of your timeline and when you’d like this new website project to go live.
                    </p>
                </div>
                {/* =========================================================== */}
                <div className='service point-card flex flex-col gap-4 border-t py-6 md:py-10'>
                    <div className='flex items-center mb-2'>
                        <span className='cus-dot'></span>
                        <h3 className='text-[18px] sm:text-[20px] md:text-[24px] mb-0'>
                            Deliver
                        </h3>
                    </div>
                    <p className='text-[14px] md:text-[16px] leading-[1.5] mb-0'>
                        A friendly and informal chat over a cup of tea is the best way to get started. We’ll learn about your business and get a sense of your timeline and when you’d like this new website project to go live.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutProcess