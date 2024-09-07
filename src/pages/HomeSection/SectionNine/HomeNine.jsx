import React from "react";
import "./HomeNine.scss";
import home1 from "../../../assets/Images/home1.webp";
import Button from "../../../components/common/Button/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeNine = () => {
  const navigate = useNavigate()
  return (
    <div className='container home-section-nine sm:pt-0'>
      <div className='top-prt lg:grid lg:grid-cols-2 gap-8 lg:gap-40 mt-10 md:mt-20 pb-12 flex flex-col-reverse lg:flex-row'>
        <div className='top-prt-left w-full lg:order-1'>
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
            <span className='dot border-txt'>Our story</span>
          </motion.div>

          <div className='lg:w-10/12'>
            <motion.h2
              initial={{ opacity: 0, x: 100 }} 
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.2 }, 
              }}
              viewport={{ once: false }}
              className='font-light'
            >
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.3 },
                }}
                viewport={{ once: false }}
              >
                Building Scalable, Elegant, and{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.5 },
                }}
                viewport={{ once: false }}
                className='lght-txt-clr'
              >
                Impactful Digital Solutions
              </motion.span>{" "}
            </motion.h2>
          </div>

          <div className='pt-8 lg:pt-10 lg:w-11/12'>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.6 },
              }}
              viewport={{ once: false }}
            >
               At <span className="font-semibold">Nipralo Technologies</span>, we created our brand with a clear mission: <span className="font-semibold">to help businesses align their online presence with their brand identity and elegance</span>. We recognized the need to <span className="font-semibold">reduce manual labor by integrating custom software and ERP systems</span>, which in turn <span className="font-semibold">enhances efficiency, boosts customer service, and scales profitability</span> for our clients.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.7 },
              }}
              viewport={{ once: false }}
            >
             Our approach is about more than just technology—it’s about <span className="font-semibold">amplifying your business’s impact</span>. We <span className="font-semibold">craft mobile apps that generate passive income</span> and <span className="font-semibold">develop e-commerce platforms that keep your business running 24/7, with global scalability</span>. For us, <span className="font-semibold">our services are not just solutions; they are strategic investments</span> for any reputable business looking to thrive in a competitive market.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.8 },
              }}
              viewport={{ once: false }}
            >
               From the first consultation to the final launch and beyond, we are <span className="font-semibold">committed to being your trusted partner in driving growth and success</span>. <span className="font-semibold">Curious about our journey and the values that guide us?</span> We’re excited to share more.
            </motion.p>
          </div>
          <Button
            initialText='Dive deeper'
            flippedText='Into our story'
            width='170px'
            showArrow={true}
            onClick={()=>{
              navigate('/about')
            }}
          />
        </div>
        <div className='top-prt-right rounded-lg lg:order-2'>
          <img
            src={home1}
            alt=''
            className='rounded-[24px] w-full h-full h-[240px] md:h-[340px] lg:h-full object-center object-cover lg:h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNine;
