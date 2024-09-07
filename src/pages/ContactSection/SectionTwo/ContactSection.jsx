import React from 'react'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion'
import "./ContactSection.scss";
import Button from '../../../components/common/Button/Button';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


const ContactSection = () => {
    return (
        <div className='contact-section-two grid md:grid-cols-2 gap-10 md:gap-20'>
            <div>
                <div className='mb-6 md:mb-10'>
                    <motion.h3
                        initial={{ opacity: 0, x: 100 }} 
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, delay: 0.3 },
                        }}
                        viewport={{ once: false }}
                        className='font-light text-[48px]'
                    >
                        From tiny to huge.{" "}
                        <motion.span
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, delay: 0.4 },
                            }}
                            className='text-gray-500'
                        >
                            {" "}If we love your project, we'll take it.
                        </motion.span>{" "}
                    </motion.h3>
                </div>
                <div className='sm:flex items-center justify-between mb-4'>
                    <motion.p
                        className='w-full text-[18px]'
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, delay: 0.3 },
                        }}
                    >
                        This email is open 24/7. The phone... not so much. But we're always here for you! Whether you want to start a new project, improve your existing website, request a quote, partner with us, or just say hi, don't hesitate to reach out.
                    </motion.p>
                </div>
                <div className='flex items-center mt-6'>
                    <div  className='bg-[#f4f4f4] p-2 rounded-[50%]'>
                        <span>
                            <IoMdMail style={{ color: '#143cff', fontSize: '20px'  }} />
                        </span>
                    </div>
                    <Button
                        initialText='info@nipralo.com'
                        flippedText='info@nipralo.com'
                        width='170px'
                        fontWeight={400}
                        onClick={() =>
                            window.location.href = 'mailto:info@nipralo.com'
                        }
                        backgroundColor='transparent'
                        textColor='#000'
                        showArrow={false}
                        className='mt-0  text-[16px] md:text-[18px]'
                        iconColor='black'
                    />
                </div>
                <div className='flex items-center mt-6'>
                    <div className='bg-[#f4f4f4] p-2 rounded-[50%]'>
                        <span>
                            <FaPhoneAlt style={{ color: '#143cff', fontSize: '20px' }} />
                        </span>
                    </div>
                    <Button
                        initialText='+91 79770 28431'
                        flippedText='+91 79770 28431'
                        width='170px'
                        fontWeight={400}
                        onClick={() =>
                            window.location.href = 'tel:+91-79770-28431'
                        }
                        backgroundColor='transparent'
                        textColor='#000'
                        showArrow={false}
                        className='mt-0 text-[16px] md:text-[18px]'
                        iconColor='black'
                    />
                </div>
            </div>
            <div>

                <ContactForm />
            </div>
        </div>
    )
}

export default ContactSection