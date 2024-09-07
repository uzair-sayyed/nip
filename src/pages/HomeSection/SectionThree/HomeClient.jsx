import React from "react";
import "./HomeClient.scss";
import { motion } from "framer-motion";
import anblogo from "../../../assets/Images/clientlogos/anb.png"
import ayushyaalogo from "../../../assets/Images/clientlogos/ayushyaa.png"
import bansilogo from "../../../assets/Images/clientlogos/bansi.png"
import beverlyhillslogo from "../../../assets/Images/clientlogos/beverlyhills.png"
import finestlogo from "../../../assets/Images/clientlogos/finest.png"
import iitmindslogo from "../../../assets/Images/clientlogos/iitminds.png"
import karmalogo from "../../../assets/Images/clientlogos/karma.png"
import nutrifurnishlogo from "../../../assets/Images/clientlogos/nutrifurnish.png"
import soeasylogo from "../../../assets/Images/clientlogos/soeasy.png"
import atlantaalogo from "../../../assets/Images/clientlogos/atlantaa.webp"
import equationslogo from "../../../assets/Images/clientlogos/equations.png"
import jaymasihlogo from "../../../assets/Images/clientlogos/jaymasih.png"
import myupavanlogo from "../../../assets/Images/clientlogos/myupavan.png"
import rubyprintlogo from "../../../assets/Images/clientlogos/rubyprint.png"
import policymonklogo from "../../../assets/Images/clientlogos/policymonk.png"
import oneagencylogo from "../../../assets/Images/clientlogos/oneagency.png"

const HomeClient = () => {
  return (
    <div className='container home-section-three'>
      <div className='pt-20 md:pt-40  text-center'>
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.4 },
          }}
          viewport={{ once: false }}
          className='text-lg font mb-8'
        >
          Over 8 years of web design experience, trusted by businesses like
          yours.
        </motion.h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 client-container'>
          {[
            {
              img: anblogo,
              delay: 0.4,
            },
            {
              img: ayushyaalogo,
              delay: 0.4,
            },
            {
              img: bansilogo,
              delay: 0.2,
            },
            {
              img: beverlyhillslogo,
              delay: 0.2,
            },
            {
              img: finestlogo,
              delay: 0.2,
            },
            {
              img: iitmindslogo,
              delay: 0.4,
            },
            {
              img: karmalogo,
              delay: 0.4,
            },
            {
              img: nutrifurnishlogo,
              delay: 0.2,
            },
            {
              img: soeasylogo,
              delay: 0.4,
            },
            {
              img: atlantaalogo,
              delay: 0.4,
            },
            {
              img: equationslogo,
              delay: 0.2,
            },
            {
              img: jaymasihlogo,
              delay: 0.4,
            },
            {
              img: myupavanlogo,
              delay: 0.2,
            },
            {
              img:rubyprintlogo,
              delay: 0.4,
            },
            {
              img: policymonklogo,
              delay: 0.4,
            },
            {
              img: oneagencylogo,
              delay: 0.4,
            },
          ].map((src, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: src.delay },
              }}
              viewport={{ once: false }}
              key={index}
              className='flex items-center justify-center'
            >
              <img
                src={src.img}
                loading='lazy'
                alt={`client logo ${index + 1}`}
                className='client-logo'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeClient;
