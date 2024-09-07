import React from "react";
import "./ServicesTestimonial.scss";
import { FaStar } from "react-icons/fa";

const ServicesTestimonial = () => {
  const servicesTestiData = [
    {
      name: "Annie F",
      detail: "Co-founder, The Athelets House →",
      review:
        "Nipralo Technologies delivered a UI/UX design that perfectly captured our brand and provided an exceptional user experience.",
    },
    {
      name: "Annie F",
      detail: "Co-founder, The Athelets House →",
      review:
        "Thanks to Nipralo Technologies, our ecommerce app has become a major driver of sales and customer engagement.",
    },
    {
      name: "Annie F",
      detail: "Co-founder, The Athelets House →",
      review:
        "The work they delivered was exceptional, really forward thinking & developed my company more than I could’ve hoped for. I am getting fantastic feedback about the site now that it has launched.",
    },
    {
      name: "Annie F",
      detail: "Co-founder, The Athelets House →",
      review:
        "The lead generation campaigns by Nipralo Technologies have consistently delivered high-quality leads that have significantly boosted our sales.",
    },
    {
      name: "Annie F",
      detail: "Co-founder, The Athelets House →",
      review:"Nipralo Technologies has transformed our social media presence, helping us connect with our audience and build a strong brand following.",
    },
    {
      name: "Annie F",
      detail: "Co-founder, The Athelets House →",
      review:
        "Nipralo Technologies’ website audit helped us uncover critical issues and provided clear steps to improve our site’s performance and security.",
    },
  ];
  return (
    <div className='services-section-three pb-40 '>
      <div>
        <div className='text-center'>
          <h2
            className='font-light text-[36px] md:text-[44px]
          lg:text-[56px] mb-16 sm:w-9/12 mx-auto'
          >
            Make a killer first impression, just like these clients
          </h2>
        </div>

        <div className='testimonial-cards gap-5 grid md:grid-cols-2 lg:grid-cols-3'>
          {servicesTestiData &&
            servicesTestiData.map((data) => {
              return (
                <div className='card rounded-[24px] p-8'>
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
                  <div className='pb-2'>
                    <p className='text-[18px] '>{data.review}</p>
                  </div>
                  <div className='flex gap-4 items-center'>
                    <img
                      className='h-[48px] rounded-[50%]'
                      src='https://cdn.prod.website-files.com/63c930fba98e967cbf90f602/64cca34ee65c923534048bcf_AF.webp'
                      alt=''
                    />
                    <div>
                      <p className='mb-0 font-bold text-[16px]'>{data.name}</p>
                      <p className='mb-0 text-[14px]'>{data.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ServicesTestimonial;
