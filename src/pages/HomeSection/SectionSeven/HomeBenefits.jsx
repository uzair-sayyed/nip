import React from 'react';
import "./HomeBenefits.scss";
import { motion } from 'framer-motion';

const HomeBenefits = () => {
    return (
        <div className='container home-section-seven sm:pt-0 pb-10'>
            <div className='top-prt gap-40 mt-0 md:mt-40 pb-10'>
                <div className='top-prt-left w-full'>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, delay: 0.3 },
                        }}
                        viewport={{ once: false }}
                        className='bfr-dot-wrapper pb-4'>
                        <span className='dot border-txt'>Benefits</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, delay: 0.3 },
                        }}
                        viewport={{ once: false }}
                        className='font-light'>
                        Unleash Your Business Potential {" "}
                        <span className='lght-txt-clr'> with Nipralo Technologies</span>{" "}
                    </motion.h2>
                </div>
            </div>
            <div className='cntnt grid md:grid-cols-2 md:gap-y-8 lg:grid-cols-4'>
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.3 },
                    }}
                    viewport={{ once: false }} className='md:border-l py-5 md:border-r md:px-8'>
                    <h3>Flexible Timelines and Transparent Communication</h3>
                    <p>Your project will be delivered on your schedule—whether in 2 months or 2 weeks. Enjoy timely updates and prompt responses, 7 days a week, with no long delays.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.4 },
                    }}
                    viewport={{ once: false }} className='md:border-r py-5 md:px-8 border-t md:border-t-0'>
                    <h3>Drive Interest and Investment</h3>
                    <p>Our designs and solutions are crafted with both aesthetics and business impact in mind. Many of our clients have secured major deals and partnerships following their launch.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.5 },
                    }}
                    viewport={{ once: false }} className='md:border-r py-5  md:px-8 border-t md:border-t-0'>
                    <h3>Maximize Efficiency with Your Personal Tech Partner</h3>
                    <p>Unlike others, we stay engaged as an extension of your team, providing continuous support for new features, landing pages, and marketing assets. Achieve results faster and more effectively.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.6 },
                    }}
                    viewport={{ once: false }} className='md:border-r py-5 md:px-8 border-t border-b md:border-t-0 md:border-b-0'>
                    <h3>Confidently Embrace Your Future</h3>
                    <p>Our services, from website design to ERP and mobile apps, are designed to elevate your business. Experience a seamless, high-performing solution that highlights your value and consistently attracts new opportunities.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default HomeBenefits;