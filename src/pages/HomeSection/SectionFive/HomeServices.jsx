import React from "react";
import Button from "../../../components/common/Button/Button";
import "./HomeServices.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const HomeServices = () => {
  const navigate = useNavigate();
  return (
    <div className='container home-section-five mx-auto px-4 sm:pt-0'>
      <div className='top-prt grid md:grid-cols-2 gap-2 md:gap-10 mt-20 md:mt-40 pb-12'>
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
            <span className='dot border-txt text-gray-700'>Core services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 100 }} // Start with opacity 0 (completely invisible)
            whileInView={{
              opacity: 1, // Fade in to full opacity
              x: 0,
              transition: { duration: 0.8, delay: 0.3 }, // Customize duration and delay
            }}
            viewport={{ once: false }}
            className='font-light text-4xl md:text-5xl'
          >
            Custom Websites. Tailored Software.{" "}
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.4 },
              }}
              className='text-gray-500'
            >
              Apps & Digital Marketing.
            </motion.span>{" "}
          </motion.h2>
        </div>
        <div className='top-prt-right pt-6 md:pt-12 text-lg text-gray-600'>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.3 },
            }}
          >
            When your business is in a growth phase, a basic website won’t get
            you where you need to go. But you know what will? A website that’s
            more than just a website—it’s a powerful tool that drives growth.
            One that not only represents your brand but elevates it. That’s what
            Nipralo Technologies is here to deliver.
          </motion.p>
        </div>
      </div>
      <div className='btm-prt'>
        <div className='services-container grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.2 },
            }}
            className='service-card rounded-[32px] p-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                  <img src='' alt='Icon' className='w-12 h-12 object-contain' />
                </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Custom Website Design
                </h3>
                <div className='text-gray-600 space-y-2 mt-3'>
                  <p className='flex items-center mb-0'>
                    <span className='cus-dot'></span>Brand-aligned custom designs
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>Engaging, user-friendly layouts
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>
                    Responsive and SEO-optimized
                  </p>
                </div>
                <Button
                  initialText='Learn more'
                  flippedText='Learn more'
                  width='150px'
                  fontWeight={400}
                  backgroundColor='transparent'
                  textColor='#000'
                  showArrow={true}
                  className='mt-4'
                  onClick={() => 
                    navigate('/service/custom-wesbite-design')
                  }
                  iconColor='black'
                />
              </div>
            </div>
          </motion.div>
          {/* Repeat similar structure for other service cards */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className='service-card rounded-[32px] p-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                  <img src='' alt='Icon' className='w-12 h-12 object-contain' />
                </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Custom website development
                </h3>
                <div className='text-gray-600 space-y-2 mt-3'>
                  <p className='flex items-center mb-0'>
                    <span className='cus-dot'></span>Robust, secure core technologies
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>Custom made, anti-hackable websites
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>
                    Optimized for speed and security
                  </p>
                </div>
                <Button
                  initialText='Learn more'
                  flippedText='Learn more'
                  onClick={() => 
                    navigate('/service/custom-website-development')
                  }
                  width='150px'
                  fontWeight={400}
                  backgroundColor='transparent'
                  textColor='#000'
                  showArrow={true}
                  className='mt-4'
                  iconColor='black'
                />
              </div>
            </div>
          </motion.div>
          {/* Repeat similar structure for other service cards */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.4 },
            }}
            className='service-card rounded-[32px] p-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                  <img src='' alt='Icon' className='w-12 h-12 object-contain' />
                </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  E commerce platform development
                </h3>
                <div className='text-gray-600 space-y-2 mt-3'>
                  <p className='flex items-center mb-0'>
                    <span className='cus-dot'></span>Precisely tailored e-commerce solutions
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>Seamless API integration for efficiency
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>
                    Engaging designs boosting conversions
                  </p>
                </div>
                <Button
                  initialText='Learn more'
                  flippedText='Learn more'
                  onClick={() => 
                    navigate('/service/e-commerce-platform-development')
                  }
                  width='150px'
                  fontWeight={400}
                  backgroundColor='transparent'
                  textColor='#000'
                  showArrow={true}
                  className='mt-4'
                  iconColor='black'
                />
              </div>
            </div>
          </motion.div>
          {/* Repeat similar structure for other service cards */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.2 },
            }}
            className='service-card rounded-[32px] p-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                  <img src='' alt='Icon' className='w-12 h-12 object-contain' />
                </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Mobile App development
                </h3>
                <div className='text-gray-600 space-y-2 mt-3'>
                  <p className='flex items-center mb-0'>
                    <span className='cus-dot'></span>Your vision, perfectly realized
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>Custom features, seamless experience
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>
                    Scalable apps for future growth
                  </p>
                </div>
                <Button
                  initialText='Learn more'
                  flippedText='Learn more'
                  width='150px'
                  fontWeight={400}
                  onClick={() => 
                    navigate('/service/mobile-app-development')
                  }
                  backgroundColor='transparent'
                  textColor='#000'
                  showArrow={true}
                  className='mt-4'
                  iconColor='black'
                />
              </div>
            </div>
          </motion.div>
          {/* Repeat similar structure for other service cards */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className='service-card rounded-[32px] p-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                  <img src='' alt='Icon' className='w-12 h-12 object-contain' />
                </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Custom ERP Solutions:
                </h3>
                <div className='text-gray-600 space-y-2 mt-3'>
                  <p className='flex items-center mb-0'>
                    <span className='cus-dot'></span>ERP tailored to your needs
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>Custom modules for every function
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>
                    Flexible solutions for all sectors

                  </p>
                </div>
                <Button
                  initialText='Learn more'
                  flippedText='Learn more'
                  onClick={() => 
                    navigate('/service/custom-erp-solutions')
                  }
                  width='150px'
                  fontWeight={400}
                  backgroundColor='transparent'
                  textColor='#000'
                  showArrow={true}
                  className='mt-4'
                  iconColor='black'
                />
              </div>
            </div>
          </motion.div>
          {/* Repeat similar structure for other service cards */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.4 },
            }}
            className='service-card rounded-[32px] p-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                  <img src='' alt='Icon' className='w-12 h-12 object-contain' />
                </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Digital Marketing
                </h3>
                <div className='text-gray-600 space-y-2 mt-3'>
                  <p className='flex items-center mb-0'>
                    <span className='cus-dot'></span>Boost brand value and loyalty
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>Leads with 10x-20x returns
                  </p>
                  <p className='flex items-center'>
                    <span className='cus-dot'></span>
                    Comprehensive digital marketing expertise
                  </p>
                </div>
                <Button
                  initialText='Learn more'
                  flippedText='Learn more'
                  onClick={() => 
                    navigate('/service/digital-marketing')
                  }
                  width='150px'
                  fontWeight={400}
                  backgroundColor='transparent'
                  textColor='#000'
                  showArrow={true}
                  className='mt-4'
                  iconColor='black'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
