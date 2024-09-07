import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Button from "../../components/common/Button/Button";
import CareersFormModal from "../../components/Modal/CareersFormModal";
import "./CareerList.scss";
import { MdLocationOn } from "react-icons/md";

const CareersList = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (position) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      // Disable body scroll and lock the background scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%"; // Ensure no horizontal scroll
    } else {
      // Re-enable body scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = ""; // Reset width
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = ""; // Reset width
    };
  }, [isModalOpen]);

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
            <span className='dot border-txt text-gray-700'>Careers</span>
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
            Make a{" "}
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.4 },
              }}
              className='text-gray-500'
            >
              Difference
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
            Your career at Nipralo Technologies isn’t just about a job; it’s
            about making an impact. As we help businesses scale and thrive,
            we’re looking for passionate individuals who want to make a
            difference. Whether it’s crafting a website that becomes a powerful
            business tool, developing software that streamlines operations, or
            creating apps that revolutionize user experiences—here, you’ll be
            part of something bigger, something that truly elevates brands and
            drives innovation.
          </motion.p>
        </div>
      </div>
      <div className='btm-prt mt-20'>
        <div className='services-container grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.2 },
            }}
            className='career-card py-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                <img src='' alt='Icon' className='w-12 h-12 object-contain' />
              </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Frontend Development
                </h3>
                <span className='flex items-center'>
                  <MdLocationOn /> &nbsp; Ghatkopar, Mumbai
                </span>
                <div className='pl-3 mt-3'>
                  <Button
                    initialText='Apply Now'
                    flippedText='Apply Now'
                    width='150px'
                    fontWeight={400}
                    showArrow={true}
                    className='mt-4'
                    onClick={() => openModal("Frontend Development")}
                  />
                </div>
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
            className='career-card  py-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                <img src='' alt='Icon' className='w-12 h-12 object-contain' />
              </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Backend Development
                </h3>
                <span className='flex items-center'>
                  <MdLocationOn /> &nbsp; Ghatkopar, Mumbai
                </span>
                <div className='pl-3 mt-3'>
                  <Button
                    initialText='Apply Now'
                    flippedText='Apply Now'
                    width='150px'
                    fontWeight={400}
                    showArrow={true}
                    className='mt-4'
                    onClick={() => openModal("Backend Development")}
                  />
                </div>
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
            className='career-card py-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                <img src='' alt='Icon' className='w-12 h-12 object-contain' />
              </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Graphic Designers
                </h3>
                <span className='flex items-center'>
                  <MdLocationOn /> &nbsp; Ghatkopar, Mumbai
                </span>
                <div className='pl-3 mt-3'>
                  <Button
                    initialText='Apply Now'
                    flippedText='Apply Now'
                    width='150px'
                    fontWeight={400}
                    showArrow={true}
                    className='mt-4'
                    onClick={() => openModal("Graphic Designer")}
                  />
                </div>
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
            className='career-card py-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                <img src='' alt='Icon' className='w-12 h-12 object-contain' />
              </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Admin Generalist
                </h3>
                <span className='flex items-center'>
                  <MdLocationOn /> &nbsp; Ghatkopar, Mumbai
                </span>
                <div className='pl-3 mt-3'>
                  <Button
                    initialText='Apply Now'
                    flippedText='Apply Now'
                    width='150px'
                    fontWeight={400}
                    showArrow={true}
                    className='mt-4'
                    onClick={() => openModal("Admin Generalist")}
                  />
                </div>
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
            className='career-card py-10'
          >
            <div className='flex-col items-start space-x-4'>
              <div className='service-txt_cntnt flex-grow'>
                {/* <div className='flex-shrink-0'>
                <img src='' alt='Icon' className='w-12 h-12 object-contain' />
              </div> */}
                <h3 className='text-xl font-semibold text-gray-800'>
                  Digital Marketing Specialist
                </h3>

                <span className='flex items-center'>
                  <MdLocationOn /> &nbsp; Ghatkopar, Mumbai
                </span>
                <div className='pl-3 mt-3'>
                  <Button
                    initialText='Apply Now'
                    flippedText='Apply Now'
                    width='150px'
                    fontWeight={400}
                    showArrow={true}
                    className='mt-4'
                    onClick={() => openModal("Digital Marketing Specialist")}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* Repeat similar structure for other service cards */}
        </div>
      </div>
      {isModalOpen && (
        <CareersFormModal
          selectedPosition={selectedPosition}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default CareersList;
