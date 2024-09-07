import React from 'react'
import ContactBanner from './ContactSection/SectionOne/ContactBanner'
import HomeClient from './HomeSection/SectionThree/HomeClient'
import ContactSection from './ContactSection/SectionTwo/ContactSection'
import Testimonial from './HomeSection/SectionEight/Testimonial'
import img1 from "../assets/Testimonial/img1.webp"
import comp1 from "../assets/Testimonial/company1.svg"
import { Helmet } from 'react-helmet';

const Contact = () => {
  const testimonialsData = [
    {
      text: "Nipralo Technologies transformed our online presence. Their custom website design truly captured our brand essence, and their ongoing support is unmatched.",
      name: "Priya Sharma",
      title: "CEO at InnovateX Solutions",
      image: img1,
      logo: comp1, 
  },
  {
      text: "From consultation to launch, Nipralo Technologies delivered exactly what we needed. Their ERP system has streamlined our operations, making us more efficient than ever.",
      title: "COO at FinServe Corp",
      name: "Rohan Mehta",
      image: img1,
      logo: comp1,
  },
  {
      text: "We needed a mobile app that could handle our growing customer base, and Nipralo Technologies delivered beyond our expectations. The app is user-friendly, robust, and perfectly aligned with our brand.",
      name: "Sanjana Patel",
      title: "Product Manager at HealthTech Innovations",
      image: img1, 
      logo: comp1,
  },
  {
      text: "Our experience with Nipralo Technologies was exceptional. Their team understood our digital marketing needs and helped us achieve a significant increase in lead generation.",
      name: "Amit Desai",
      title: "Marketing Head at GreenLeaf Industries",
      image: img1, 
      logo: comp1, 
  },
  {
      text: "The custom software developed by Nipralo Technologies has been a game-changer for our business. Their expertise and attention to detail have made all the difference.",


      name: "Anjali Verma",
      title: "Founder at EduTrack Solutions",
      image: img1,
      logo: comp1,
  }

  ];
  return (
    <div className='resp-extra-pdg container'>

      <Helmet>
        <title>Contact Us - Nipralo Technologies | Get in Touch</title>
        <meta name="description" content="Contact Nipralo Technologies for inquiries, support, or to discuss how we can help with your digital solutions. We're here to assist you." />
        <meta name="keywords" content="contact, Nipralo Technologies, digital solutions, support, inquiries" />
      </Helmet>

      <div>
        <ContactBanner />
      </div>
      <div>
        <ContactSection />
      </div>
      <div className='my-4'>
        <HomeClient />
      </div>
      <div className='my-40'>
        <Testimonial data={testimonialsData} />
      </div>
    </div>
  )
}

export default Contact