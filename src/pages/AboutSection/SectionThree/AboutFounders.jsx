import React from 'react'
import "./AboutFounders.scss"
import { motion } from 'framer-motion'
import founder1 from "../../../assets/founder/founder1.webp"

const AboutFounders = () => {
    return (
        <div className='about-section-three sm:pt-0'>
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
                        <span className='dot border-txt'>Our Founders</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: 100 }} 
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, delay: 0.3 }, 
                        }}
                        viewport={{ once: false }}
                        className='font-light text-[32px] md:text-[44px] lg:text-[56px]'
                    >
                        Meet our founders

                        <motion.span
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, delay: 0.5 },
                            }}
                            viewport={{ once: false }}
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
                        viewport={{ once: false }}
                        className='text-[18px] leading-[1.5]'
                    >
                        Here's a brief overview of our process. This is exactly the kind of thing that puts people off, that's why we've tried to keep things as simple and pain-free as possible.
                    </motion.p>
                </div>
            </div>

            <div className="founders-wrapper items-center justify-items-center">
                <div className="mx-auto text-start grid md:grid-cols-2">
                    <div>
                        <motion.img initial={{ opacity: 0, y: 80 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.7, delay: 0.3 },
                            }}
                            viewport={{ once: false }} src={founder1} alt="Attila" className="md:max-w-[80%] rounded-[2rem]" />
                    </div>
                    <div className='flex flex-col-reverse md:flex-col justify-center'>

                        <div>
                            <motion.p initial={{ opacity: 0, y: 100 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.7, delay: 0.3 },
                                }}
                                viewport={{ once: false }} className='text-14px md:text-[16px] leading-[1.5]'>I’m one of those people who knew since high school that I wanted to be a designer and won a few small design competitions. My true career began while I was a student at AUB and worked as a freelancer in my spare time.</motion.p>
                            <motion.p initial={{ opacity: 0, y: 100 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.7, delay: 0.4 },
                                }}
                                viewport={{ once: false }} className='text-14px md:text-[16px] leading-[1.5]'>Throughout my professional life as a Designer has allowed me to hone and develop skills in Web Design, Webflow Development, Wireframing, and Branding. I have also designed more than 100 websites and a number of apps. Some of my projects were previously featured in web design awards lists. Typically, I collaborated with businesses from diverse industries across the UK, Canada, the US, and Dubai to achieve various marketing goals.</motion.p>
                            <motion.p initial={{ opacity: 0, y: 100 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.7, delay: 0.5 },
                                }}
                                viewport={{ once: false }} className='text-14px md:text-[16px] leading-[1.5]'>In addition to my passion for design, I'm a profound photographer and I know all about the latest technology because of my fondness for it. I also enjoy cycling, travelling, and am overly obsessed with my puppy.</motion.p>
                        </div>
                        <div>
                            <motion.h3 initial={{ opacity: 0, y: 100 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.7, delay: 0.3 },
                                }}
                                viewport={{ once: false }} className='font-light text-[24px] md:text-[28px] lg:text-[32px] mt-8 md:mt-6 mb-6  '>Nishant Lokhande - Founder</motion.h3>
               
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default AboutFounders