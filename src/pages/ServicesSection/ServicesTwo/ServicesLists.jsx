import React from "react";
import servicesData from "./ServicesList";
import Button from "../../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";

const ServicesLists = () => {
  const navigate = useNavigate();

  const handleNavigation = (service) => {
    const formattedName = service.serviceName
      .toLowerCase()
      .replace(/\s+/g, "-");
    navigate(`/service/${formattedName}`);
  };

  return (
    <div className='services-section-two pt-40 pb-40'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-20'>
        {servicesData.map((service, index) => (
          <div key={index} className='service-card border-t pt-6 sm:pt-14'>
            <h3 className='font-light text-[32px] md:text-[32px] lg:text-[32px] pb-6'>
              {service.serviceName}
            </h3>
            <p className='text-[14px] md:text-[16px] pb-6'>{service.detail}</p>
            <Button
              initialText={service.btnInitialText}
              flippedText={service.btnFlippedText}
              className='ml-2'
              showArrow={true}
              width={`${service.btnWidth}px`}
              onClick={() => handleNavigation(service)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesLists;
