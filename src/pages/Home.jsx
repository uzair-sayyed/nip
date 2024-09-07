import React from "react";
import { Helmet } from "react-helmet";
import HomeBanner from "./HomeSection/SectionOne/HomeBanner";
import HomeVideo from "./HomeSection/SectionTwo/HomeVideo";
import HomeClient from "./HomeSection/SectionThree/HomeClient";
import HomeProjects from "./HomeSection/SectionFour/HomeProjects";
import HomeServices from "./HomeSection/SectionFive/HomeServices";
import HomeServicesAdditional from "./HomeSection/SectionSix/HomeServicesAdditional";
import HomeBenefits from "./HomeSection/SectionSeven/HomeBenefits";
import HomeTestimonial from "./HomeSection/SectionEight/HomeTestimonial";
import HomeNine from "./HomeSection/SectionNine/HomeNine";
import HomeCta from "./HomeSection/SectionTen/HomeCta";

const Home = () => {
  return (
    <div className='resp-extra-pdg' style={{ marginTop: "100px" }}>
      <Helmet>
        <title>Nipralo Technologies - Leading Digital Solutions Provider</title>
        <meta
          name='description'
          content='Nipralo Technologies offers cutting-edge solutions in website development, mobile app development, ERP systems, and digital marketing. Partner with us for your digital transformation.'
        />
        <meta
          name='keywords'
          content='website development, mobile app development, ERP solutions, digital marketing, custom software, Nipralo Technologies, Nipralo, nipralo, software solutions'
        />
        <meta name='author' content='Nipralo Technologies' />
      </Helmet>
      <HomeBanner />
      <HomeVideo />
      <HomeClient />
      <HomeServices />
      <HomeServicesAdditional />
      <HomeBenefits />
      <HomeProjects />
      <HomeTestimonial />
      <HomeNine />
      <HomeCta />
    </div>
  );
};

export default Home;
