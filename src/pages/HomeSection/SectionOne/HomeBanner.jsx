import React, { useState, useEffect } from "react";
import "./HomeBanner.scss";
import Button from "../../../components/common/Button/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const navigate = useNavigate();

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='container home-section-one lg:pt-16 sm:pt-0'>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: false }}
        className='hd-prt lg:pb-10 sm:pb-8'
      >
        <h1 className='w-full md:w-7/12'>
          Nipralo Technologies <br /> Your Preferred{"  "}
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
            viewport={{ once: false }}
            className='lght-hd-clr'
          >
            Tech Partner
          </motion.span>
        </h1>
      </motion.div>

      <div className='content-prt flex'>
        {isWideScreen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                opacity: { duration: 0.6, ease: "easeOut" },
                scale: { duration: 0.6, ease: "easeOut" },
                delay: 0.2,
              },
            }}
            viewport={{ once: false }}
            className='video-prt !w-full p-2'
          >
            <video
              className='mb-video outline-none border-0'
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source
                src='https://attilav.s3.eu-west-2.amazonaws.com/Quarter+Digital/layers-240.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ) : (
          <div className='video-prt !w-full p-2'>
            <video
              className='mb-video outline-none border-0'
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source
                src='https://attilav.s3.eu-west-2.amazonaws.com/Quarter+Digital/layers-240.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className='para-prt w-full lg:w-10/12 md:w-12/12 p-2 flex align-center lg:justify-start'>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: false }}
            className='flex flex-col'
          >
            We’re Nipralo Technologies, your tech partner for custom websites,
            software, and apps. We help startups and established firms grow
            globally with our expertise in designing websites, providing tailor
            made softwares and ERP and Mobile Apps for your Business. Our
            Digital Marketing Solutions makes sure your online presence is
            maintained 24/7.
            <Button
              className='hm-btn lg:ml-0 md:ml-8'
              initialText='Book your free discovery call'
              flippedText="Let's go!"
              showArrow={true}
              width={290}
              onClick={() => {
                navigate("/contact");
              }}
            />
          </motion.p>
        </div>
      </div>

      <div className='line-divider'></div>

      <div className='cta-prt lg:flex gap-4 mb-12'>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.5 },
          }}
          viewport={{ once: false }}
        >
          Congrats 🎉 to our client{" "}
          <span className='drk-hd-clr'>Glyphic AI</span> for raising{" "}
          <span className='drk-hd-clr'>$5.5M in pre-seed round.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.5 },
          }}
          viewport={{ once: false }}
          className='sliding-text text-center rounded-full !w-25 !md:w-25  !h-6 '
        >
          <div className='cta-btn rounded-full flex align-center justify-center'>
            <a href='#' className='text-base font-medium !leading-6'>
              View case study
            </a>
            <a
              href='#'
              className='text-base overlay-text font-medium !leading-6'
            >
              View case study
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBanner;
