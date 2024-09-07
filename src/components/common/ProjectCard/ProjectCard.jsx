import React from "react";
import "./ProjectCard.scss";
import Button from "../Button/Button";
import { IoIosLink } from "react-icons/io";
import { motion } from "framer-motion";

const ProjectCard = ({ title, tech, img, id, link, tdelay }) => {
  return (
    <div className='proj-card sm:my-5 md:my-5 2xl:my-0 relative overflow-hidden rounded-[16px]'>
      <motion.h3
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: tdelay },
        }}
        className='text-2xl ml-1'
      >
        {title}
      </motion.h3>
      <div className='max-h-[245px] h-full w-full sm:max-h-[290px] md:max-h[332px] sm:max-w-[512px] relative group overflow-hidden rounded-[16px]'>
        <img
          src={img}
          alt={title}
          className='h-full w-full object-cover transform transition-transform duration-1000 ease-in-out group-hover:scale-105 cursor-pointer'
        />
        <div className='proj-link absolute bottom-2 right-2 z-10 opacity-100 scale-100 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-100 md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100'>
          <Button
            initialText='Live site'
            flippedText='Live site'
            icon={IoIosLink}
            width='110px'
            showArrow={false}
            onClick={() => {
              window.open(link, "_blank");
            }}
            backgroundColor='#ffffff'
            textColor='#0c0c0d'
            fontWeight='500'
          />
        </div>
      </div>
      <div className='flex gap-2 2xl:pt-3 pt-5 flex-wrap ml-1'>
        {tech &&
          tech.map((tech, index) => {
            return (
              <span className='border-txt mb-2' key={index}>
                {tech}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectCard;
