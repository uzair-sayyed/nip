import React, { useState } from "react";
import "./ServiceFAQ.scss";
import FAQ from "../../../components/common/FAQ/FAQ";

const ServiceFAQ = ({content, FAQ : faqs}) => {
    console.log(content)
    console.log(FAQ)
  return (
    <div className='services-section-four pb-20 md:pb-40'>
      <div className='grid md:grid-cols-2 gap-10 md:gap-20'>
        <div className='left flex flex-col gap-6'>
          <h2 className='font-light text-[36px] md:text-[44px] lg:text-[56px]'>
            FAQs
          </h2>
          <p className='text-[16px] md:text-[18px]'>
            {content}
          </p>
        </div>
        <div className='right'>
          {faqs.map((faq, index) => (
            <FAQ showFAQBtn={false} key={index} faq={faq} delay={faq.delay} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ;
