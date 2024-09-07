import React from 'react'
import AboutBanner from './AboutSection/SectionOne/AboutBanner'
import Testimonial from './HomeSection/SectionEight/Testimonial'
import HomeClient from "./HomeSection/SectionThree/HomeClient"
import CTA from "../components/common/CTA/CTA"
import AboutProcess from './AboutSection/SectionTwo/AboutProcess'
import AboutDetail from './AboutSection/SectionFour/AboutDetail'
import AboutFounders from './AboutSection/SectionThree/AboutFounders'
import { Helmet } from 'react-helmet'
const About = () => {
  return (
    <div className='resp-extra-pdg container pt-40'>
      <Helmet>
        <title>About Us - Nipralo Technologies | Learn More About Our Team</title>
        <meta name="description" content="Discover more about Nipralo Technologies, our mission, vision, and the team behind our innovative digital solutions." />
        <meta name="keywords" content="about us, Nipralo Technologies, team, mission, vision, digital solutions" />
      </Helmet>
      <div>
        <AboutBanner />
      </div>
      <div className='py-[5rem] md:py-[10rem]'>
        <AboutDetail />
      </div>
      <div className='mb-20 md:mb-40'>
        <AboutFounders />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <HomeClient />
      </div>
      <div>
        <AboutProcess />
      </div>
      <div className='py-20 md:py-40'>
        <CTA firstTitle={"Ready to stand out? Let's craft your unique digital identity with Webflow."} btnInitialText={"Contact us"}
          btnFlippedText={"Contact us"}
          btnWidth={"140px"} />
      </div>
    </div>
  )
}

export default About