import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.scss"; // Import your custom CSS for styling
import arrowIcon from "../../../assets/icon/arrowiconblack.png";
import arrowIconFlipped from "../../../assets/icon/arrowiconblackflipped.png";
import img1 from "../../../assets/Testimonial/img1.webp";
import comp1 from "../../../assets/Testimonial/company1.svg";
import { FaStar } from "react-icons/fa";



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <div><img src={arrowIcon} alt="Prev" /></div>,
    nextArrow: <div><img src={arrowIconFlipped} alt="Next" /></div>,
    pauseOnHover: true,
    arrows: true, // Keep arrows enabled
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1, // Show 1 slide at a time for smaller screens
            },
        },
    ],
};

const testimonials = [
    {
        text: "Nipralo Technologies transformed our online presence. Their custom website design truly captured our brand essence, and their ongoing support is unmatched.",
        name: "Priya Sharma",
        title: "CEO at InnovateX Solutions",
        image: img1, // Update with the correct path
        logo: comp1, // Update with the correct path
    },
    {
        text: "From consultation to launch, Nipralo Technologies delivered exactly what we needed. Their ERP system has streamlined our operations, making us more efficient than ever.",
        title: "COO at FinServe Corp",
        name: "Rohan Mehta",
        image: img1, // Update with the correct path
        logo: comp1, // Update with the correct path
    },
    {
        text: "We needed a mobile app that could handle our growing customer base, and Nipralo Technologies delivered beyond our expectations. The app is user-friendly, robust, and perfectly aligned with our brand.",
        name: "Sanjana Patel",
        title: "Product Manager at HealthTech Innovations",
        image: img1, // Update with the correct path
        logo: comp1, // Update with the correct path
    },
    {
        text: "Our experience with Nipralo Technologies was exceptional. Their team understood our digital marketing needs and helped us achieve a significant increase in lead generation.",
        name: "Amit Desai",
        title: "Marketing Head at GreenLeaf Industries",
        image: img1, // Update with the correct path
        logo: comp1, // Update with the correct path
    },
    {
        text: "The custom software developed by Nipralo Technologies has been a game-changer for our business. Their expertise and attention to detail have made all the difference.",


        name: "Anjali Verma",
        title: "Founder at EduTrack Solutions",
        image: img1, // Update with the correct path
        logo: comp1, // Update with the correct path
    }
];

const Testimonial = ({ data }) => (
    <div className="slider-container">
        <Slider {...settings}>


            {data && data.map((testimonial, index) => (
                <div key={index} className="testimonial-card pb-14">
                    <div className="testimonial-content flex flex-col">
                    <div className='flex gap-1 mb-4'>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                  </div>
                        <p className="text-base md:text-xl">{testimonial.text}</p>
                    </div>
                    <div className="testimonial-footer">
                        <div className="testimonial-info flex items-center">
                            {/* <img src={testimonial.image} alt={testimonial.name}
                                className="testimonial-image" /> */}
                            <div className="pr-10">
                                <h4 className="text-lg">{testimonial.name}</h4>
                                <p>{testimonial.title}</p>
                            </div>
                            {/* <div className="divider-line"></div> */}
                            {/* <div className="ml-10">
                                <img src={testimonial.logo} alt="Company Logo" className="testimonial-logo w-[90px]" />
                            </div> */}
                        </div>
                    </div>
                </div>
            ))}
            {testimonials && !data && testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card pb-14">
                    <div className="testimonial-content flex flex-col">
                    <div className='flex gap-1 mb-4'>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                    <span>
                      <FaStar style={{ color: "#143cff", fontSize: "16px" }} />
                    </span>
                  </div>
                        <p className="text-base md:text-xl">{testimonial.text}</p>
                    </div>
                    <div className="testimonial-footer">
                        <div className="testimonial-info flex items-center">
                            {/* <img src={testimonial.image} alt={testimonial.name}
                                className="testimonial-image" /> */}
                            <div className="pr-10">
                                <h4 className="text-lg">{testimonial.name}</h4>
                                <p>{testimonial.title}</p>
                            </div>
                            {/* <div className="divider-line"></div> */}
                            {/* <div className="ml-10">
                                <img src={testimonial.logo} alt="Company Logo" className="testimonial-logo w-[90px]" />
                            </div> */}
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
);

export default Testimonial;
