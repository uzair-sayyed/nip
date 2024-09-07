import React from "react";
import CTA from "../../../components/common/CTA/CTA";
import "./ServicesCTA.scss"

const ServicesCTA = () => {
  return (
    <div className='services-section-five pb-40'>
      <CTA
        firstTitle="Ready to Elevate Your Business?"
        detailText='Discover how our custom solutions can transform your digital presence.'
        btnInitialText='Contact us today to get started!'
        btnFlippedText='Contact us today to get started!'
        btnWidth='300px'
      />
    </div>
  );
};

export default ServicesCTA;
