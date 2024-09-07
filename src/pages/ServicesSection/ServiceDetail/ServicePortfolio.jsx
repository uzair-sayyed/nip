import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../../components/common/ProjectCard/ProjectCard";
const ServicePortfolio = ({ heading, content, portfolioDetail }) => {
  return (
    <div className='container home-section-four sm:pt-0'>
      <div className='top-prt lg:grid md:grid-cols-2 gap-40 mt-20 md:mt-40 pb-12'>
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
            <span className='dot border-txt'>Our work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            viewport={{ once: false }}
            className='font-light'
          >
            {heading}
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.5 },
              }}
            ></motion.span>
          </motion.h2>
        </div>
        <div className='top-prt-right pt-6 md:pt-12 '>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            className='text-[18px] leading-[1.5]'
          >
            {content}
          </motion.p>
        </div>
      </div>

      <div className='cards-container grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {portfolioDetail &&
          portfolioDetail.map((portfolio, index) => {
            return (
              <ProjectCard
                key={index}
                tech={portfolio.tech}
                title={portfolio.title}
                img={portfolio.img}
                link={portfolio.link}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ServicePortfolio;
