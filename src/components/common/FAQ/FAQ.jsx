// src/components/common/FAQ/FAQ.js

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import arrowIconBlack from "../../../assets/icon/arrowiconblack.png";
import "./FAQ.scss";
import { useNavigate } from "react-router-dom";

const FAQ = ({ faq, delay = 0.2, showFAQBtn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  // console.log(faq.initialText, "from faq");
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: delay },
      }}
      viewport={{ once: false }}
      className={`drpdown border-t border-t-[#d9d9d9] ${
        isOpen ? "active" : ""
      }`}
    >
      <div className='' onClick={toggleFAQ} style={{ cursor: "pointer" }}>
        <div className='flex items-center drpdown-head justify-between p-5'>
          <div className='2xl:ml-2 pr-2'>
            <span className='cus-dot mt-[7px]'></span>
            {faq.title && <h3 className=' mb-0'>{faq.title}</h3>}
            {faq.question && <h3 className=' mb-0'>{faq.question}</h3>}
          </div>
          <div className='absolute right-0'>
            <img src={arrowIconBlack} className='h-5' alt='Arrow Icon' />
          </div>
        </div>
      </div>
      <div className={`drpdown-content ${isOpen ? "active" : ""}`}>
        <p>{faq.content && faq.content}</p>
        <p>{faq.answer && faq.answer}</p>
        {showFAQBtn && (
          <div className='pb-4 ml-[5px]'>
            <Button
              initialText={faq.initialText}
              flippedText={faq.flippedText}
              showArrow={true}
              width='180px'
              onClick={() => {
                navigate(faq.link);
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FAQ;
