import React from "react";
import ServicesBanner from "./ServicesSection/ServicesOne/ServicesBanner";
import ServicesLists from "./ServicesSection/ServicesTwo/ServicesLists";
import ServicesFAQ from "./ServicesSection/ServicesFour/ServicesFAQ";
import ServicesCTA from "./ServicesSection/ServicesFive/ServicesCTA";
import ServicesTestimonial from "./ServicesSection/ServicesThree/ServicesTestimonial";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div className='services-wrapper resp-extra-pdg container pt-40'>
      <Helmet>
        <title>Our Services - Nipralo Technologies | Web Development, App Development, and More</title>
        <meta name="description" content="Discover the range of services offered by Nipralo Technologies, including website development, mobile app development, ERP solutions, and digital marketing. Learn how we can help your business thrive." />
        <meta name="keywords" content="website development, mobile app development, ERP solutions, custom software, digital marketing" />
      </Helmet>
      <ServicesBanner />
      <ServicesLists />
      <ServicesTestimonial />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
};

export default Services;
