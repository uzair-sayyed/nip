import React, { useState, useEffect } from 'react';
import './HomeTestimonial.scss';
import Testimonial from './Testimonial';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        stars: 5,
        text: "Nipralo Technologies transformed our online presence. Their custom website design truly captured our brand essence, and their ongoing support is unmatched.",
        name: "Sam and Millie",
        title: "Co-founders, Just Bottle Ltd",
        company: "just.",
        imgSrc: "/path-to-image1.jpg"
    },
    {
        id: 2,
        stars: 5,
        text: "From consultation to launch, Nipralo Technologies delivered exactly what we needed. Their ERP system has streamlined our operations, making us more efficient than ever.",
        name: "Jason C",
        title: "Founder, Optimal Controls AI",
        company: "optimalcontrolsAI",
        imgSrc: "/path-to-image2.jpg"
    },
    {
        id: 3,
        stars: 5,
        text: "We needed a mobile app that could handle our growing customer base, and Nipralo Technologies delivered beyond our expectations. The app is user-friendly, robust, and perfectly aligned with our brand.",
        name: "Sara B",
        title: "Marketing Director, Brand X",
        company: "brandX",
        imgSrc: "/path-to-image3.jpg"
    },
    {
        id: 4,
        stars: 5,
        text: "Our experience with Nipralo Technologies was exceptional. Their team understood our digital marketing needs and helped us achieve a significant increase in lead generation.",
        name: "John D",
        title: "CEO, Company Y",
        company: "companyY",
        imgSrc: "/path-to-image4.jpg"
    }
];

const HomeTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalTestimonials = testimonials.length;

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='container home-section-eight sm:pt-0 pb-20'>
            <div className='top-prt gap-40 mt-0 md:mt-40 pb-12'>
                <div className='top-prt-left w-full text-center'>
                    <motion.h2 initial={{ opacity: 0, x: 100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, delay: 0.3 },
                        }}
                        viewport={{ once: false }} className='font-light'>
                        <span className='lght-txt-clr'>Join clients</span>{" "}
                        breaking business barriers
                    </motion.h2>
                </div>

            </div>
            <div className='btm-prt'>
                <Testimonial />
            </div>
        </div>
    );
};

export default HomeTestimonial;
