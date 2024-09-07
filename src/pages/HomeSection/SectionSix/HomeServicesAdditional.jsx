import React, { useState } from "react";
import "./HomeServicesAdditional.scss";
import { motion } from "framer-motion";
import FAQ from "../../../components/common/FAQ/FAQ";

const HomeServicesAdditional = () => {
  const additionalServices = [
    {
      title: "Website Audit",
      content:
        "Our comprehensive website audit services identify areas for improvement in your website’s performance, SEO, and user experience. We provide actionable insights to optimize your online presence and drive better results.",
      delay: 0.2,
      initialText: "Find out more",
      flippedText: "Find out more",
      link: '/service/website-audit'
    },
    {
      title: "Testing",
      content:
        "Ensure your digital products are flawless with our rigorous testing services. From functionality to performance and security, we meticulously test every aspect of your website or application to deliver a seamless user experience.",
      delay: 0.3,
      initialText: "Find out more",
      flippedText: "Find out more",
      link: "/service/testing"
    },
    {
      title: "UI UX",
      content:
        "Create intuitive and engaging digital experiences with our UI/UX services. We focus on user-centric design to build interfaces that are not only visually appealing but also enhance usability and customer satisfaction.",
      delay: 0.2,
      initialText: "Find out more",
      flippedText: "Find out more",
      link: "/service/ui-ux"
    },
    {
      title: "Cloud Solution",
      content:
        "Leverage the power of the cloud with our tailored cloud solutions. We help businesses migrate, manage, and optimize their cloud infrastructure, ensuring scalability, security, and cost-efficiency.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
      link: '/service/cloud-solution'
    },
    {
      title: "Website Management",
      content:
        "Maintain a high-performing website with our comprehensive website management services. From regular updates and security monitoring to content management, we ensure your site remains optimized and secure.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
      link: "/service/website-management"
    },
    {
      title: "Local SEO",
      content:
        "Boost your visibility in local search results with our targeted local SEO services. We optimize your online presence to attract more local customers and enhance your business’s reputation within your community.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
      link: "/service/local-seo"
    },
    {
      title: "Brand Strategy",
      content:
        "Build a strong and consistent brand identity with our expert brand strategy services. We help you define your brand’s voice, positioning, and visual identity to resonate with your target audience and stand out in the market.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
      link: "/service/brand-strategy"
    },
    {
      title: "AI Automation",
      content:
        "Transform your business operations with AI-powered automation. Our AI automation services streamline processes, improve efficiency, and enable smarter decision-making, giving you a competitive edge in the digital landscape.",
      delay: 0.4,
      initialText: "Find out more",
      flippedText: "Find out more",
      link: "/service/ai-automation"
    },
  ];

  return (
    <div>
      <div className='container home-section-six sm:pt-0'>
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
              <span className='dot border-txt'>Additional services</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.6, x: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              viewport={{ once: false }}
              className='video-prt md:!w-full p-2'
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
                  src='https://attilav.s3.eu-west-2.amazonaws.com/Quarter+Digital/Cross-300.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>

          {/* Dropdowns */}
          <div className='top-prt-right pt-6 md:pt-0'>
            {additionalServices.map((service, index) => (
              <FAQ
                showFAQBtn={true}
                key={index}
                faq={service}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesAdditional;
