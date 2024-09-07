import React from "react";
import "./HomeProjects.scss";
import ProjectCard from "../../../components/common/ProjectCard/ProjectCard";
import Button from "../../../components/common/Button/Button";
import { motion } from "framer-motion";
import portfolioListData from "../../../assets/Data/protfoliolists";
import { useNavigate } from "react-router-dom";

const HomeProjects = () => {
  const navigate = useNavigate()
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
            <span className='dot border-txt'>Our Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 100 }} // Start with opacity 0 (completely invisible)
            whileInView={{
              opacity: 1, // Fade in to full opacity
              x: 0,
              transition: { duration: 0.8, delay: 0.3 }, // Customize duration and delay
            }}
            viewport={{ once: false }}
            className='font-light'
          >
            Look at projects that win over        {" "}
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.4 },
              }}
              viewport={{ once: false }}
              className='lght-txt-clr'
            >
          both stakeholders and customers. 
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.5 },
              }}
            >
            </motion.span>
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
            className='text-lg '
          >
           If you're like our previous clients, you're making a big impact in your field. So why choose something average when you're creating something exceptional?
          </motion.p>
        </div>
      </div>
      <div className='btm-prt'>
        <div className='cards-container grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {portfolioListData &&
            portfolioListData.slice(0,9).map((list) => {
              return (
                <ProjectCard
                  key={list.id}
                  title={list.title}
                  tech={list.tech}
                  img={list.img}
                  link={list.link}
                  tdelay={list.titledelay}
                />
              );
            })}
        </div>
      </div>
      <div className='text-center my-8'>
        <Button
          initialText='View all'
          flippedText="Let's go!"
          width='130px'
          showArrow={true}
          onClick={()=> navigate('/projects')}
        />
      </div>
    </div>
  );
};

export default HomeProjects;
