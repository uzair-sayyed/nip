import React from "react";
import "./HomeCta.scss";
import CTA from "../../../components/common/CTA/CTA";

const HomeCta = () => {
  return (
    <div className='container home-section-ten sm:pt-20 pb-40 '>
      <div className='resp-extra-pdg'>
        <CTA
          firstTitle='Let’s show your customers what you’re made of.'
          secondTitle='But first, let’s get to know each other.'
          detailText='We’re currently accepting projects for Q2 of 2024. Book a call to
            explore how we can collaborate.'
          btnInitialText='Get Started with Custom Solutions'
          btnFlippedText='Transform Your Business Today'
          btnWidth='325px'
        />
      </div>
    </div>
  );
};

export default HomeCta;
