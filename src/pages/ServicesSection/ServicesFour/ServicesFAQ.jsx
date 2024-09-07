import React, { useState } from "react";
import "./ServicesFAQ.scss";
import FAQ from "../../../components/common/FAQ/FAQ";

const ServicesFAQ = () => {
  const faqs = [
    {
      title: "Do you design both desktop and mobile versions of a website?",
      content:
        "Absolutely! We ensure a seamless experience across all devices with our fully responsive designs. Whether it's desktop, smartphone, tablet, or other devices, your website will look and perform beautifully. We design both desktop and mobile versions to provide the best user experience possible.",
      delay: 0.2,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "What's your approach to customized web design?",
      content:
        "We start by understanding your brand, goals, and target audience. Our process involves exploring creative concepts, collaborating closely with you, and using innovative design techniques to create a unique design tailored to your needs. From user-centric design to quality assurance, we focus on delivering a solution that fits your specific requirements.",
      delay: 0.3,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "Do you have experience in e-commerce design?",
      content:
        "Yes, we have extensive experience in e-commerce design. Our team is skilled in crafting designs that enhance user experience, drive conversions, and reflect your brand’s identity. Whether you’re launching a new store or refining an existing one, we create e-commerce solutions that resonate with your customers.",
      delay: 0.2,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "How do you ensure the quality of your designs?",
      content:
        "Quality is fundamental to our work. We implement rigorous quality checks, thorough testing, and multiple revisions to ensure that each design meets the highest standards. Our experienced team is dedicated to creating precise, creative, and detail-oriented designs.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "Can you help with ongoing design support and updates?",
      content:
        "Build robust, scalable, and high-performance applications. Our development services cover everything from front-end design to back-end systems, ensuring a seamless user experience.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "How do you ensure the quality of your designs?",
      content:
        "Quality is fundamental to our work. We implement rigorous quality checks, thorough testing, and multiple revisions to ensure that each design meets the highest standards. Our experienced team is dedicated to creating precise, creative, and detail-oriented designs.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "Do you provide custom software and ERP solutions?",
      content:
        "Yes, we specialize in developing custom software and ERP systems tailored to your business needs. Our solutions are designed to streamline operations, improve efficiency, and integrate seamlessly with your existing processes.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "What makes your digital marketing services unique?",
      content:
        "Our digital marketing services are designed to enhance your online presence and drive results. We focus on lead generation, SEO, social media marketing, and management to create comprehensive strategies that align with your business goals and target audience.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "How do you handle website management and maintenance?",
      content:
        "We offer comprehensive website management and maintenance services to ensure your site remains functional, secure, and up-to-date. From regular updates and security checks to performance optimization, we handle all aspects of website management so you can focus on your business.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "Can you assist with cloud solutions and AI automation?",
      content:
        "Yes, we provide cloud solutions for scalable data storage and management, as well as AI automation to enhance operational efficiency. Our team integrates advanced technologies to support your business's growth and streamline processes.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
    {
      title: "How do I get started with your services?",
      content:
        "Getting started is easy! You can call us, use our contact form, email us, or message us on WhatsApp. We're here to answer your questions and help you find the best solutions for your business.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
    },
  ];
  return (
    <div className='services-section-four pb-20 md:pb-40'>
      <div className='grid md:grid-cols-2 gap-10 md:gap-20'>
        <div className='left flex flex-col gap-6'>
          <h2 className='font-light text-[36px] md:text-[44px] lg:text-[56px]'>
            FAQs
          </h2>
          <p className='text-[16px] md:text-[18px]'>
            Embarking on a digital journey can be filled with queries. We've
            curated answers to some of the most pressing questions about our
            design ethos, tools, and expertise. If your curiosity isn't
            satiated, we're just a message away.
          </p>
        </div>
        <div className='right'>
          {faqs.map((faq, index) => (
            <FAQ showFAQBtn={false} key={index} faq={faq} delay={faq.delay} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesFAQ;
