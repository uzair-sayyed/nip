import React from "react";
import "./Footer.scss";
import NipraloLogo from "../../../assets/Logo/nipraloblack.png";
import { NavLink as Link, useNavigate } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className='footer text-black'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12'>
        {/* Footer Left */}
        <div className='flex flex-col space-y-6'>
          <img className='w-48' src={NipraloLogo} alt='Nipralo Logo' />
          <p className='w-12/12 md:w-8/12'>
            Nipralo Digital is your partnership-driven Webflow agency, dedicated
            to crafting unique and high-converting digital experiences. Explore
            our services and discover how we can help you stand out in the
            digital world. Your success is our mission.
          </p>
          <div className='footer_social-links flex space-x-4'>
            <a href='#' className='text-black '>
              <FaLinkedin style={{ color: "#0c0c0d" }} />
            </a>
            <a href='#' className='text-black'>
              <FaTwitter style={{ color: "#0c0c0d" }} />
            </a>
            <a
              href='https://www.instagram.com/nipralo?igsh=MThvd3RoMHN0dmlqbA=='
              target='_blank'
              className='text-black'
            >
              <FaInstagram style={{ color: "#0c0c0d" }} />
            </a>
            <a href='#' className='text-black'>
              <FaDribbble style={{ color: "#0c0c0d" }} />
            </a>
          </div>
        </div>

        {/* Footer Right */}
        <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 justify-end'>
          {/* Services */}

          {/* Quick Links */}
          <div className='flex flex-col space-y-4'>
            <h3 className='text-xl font-semibold'>Quick links</h3>
            <ul className='space-y-4'>
              <li className='sliding-text'>
                <Link to='/' className='text-base'>
                  Home
                </Link>
                <Link to='/' className='text-base overlay-text'>
                  Home
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/about' className='text-base'>
                  About us
                </Link>
                <Link to='/about' className='text-base overlay-text'>
                  About us
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='services' className='text-base'>
                  Services
                </Link>
                <Link to='services' className='text-base overlay-text'>
                  Services
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='projects' className='text-base'>
                  Projects
                </Link>
                <Link to='projects' className='text-base overlay-text'>
                  Projects
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='careers' className='text-base'>
                  Careers
                </Link>
                <Link to='careers' className='text-base overlay-text'>
                  Careers
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='contact' className='text-base'>
                  Contact
                </Link>
                <Link to='contact' className='text-base overlay-text'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col space-y-4'>
            <h3 className='text-xl font-semibold'>Services</h3>
            <ul className='space-y-4'>
              <li className='sliding-text'>
                <Link to='/service/custom-website-design' className='text-base'>
                  Web Design
                </Link>
                <Link
                  to='/service/custom-website-design'
                  className='text-base overlay-text'
                >
                  Web Design
                </Link>
              </li>
              <li className='sliding-text'>
                <Link
                  to='/service/custom-website-development'
                  className='text-base'
                >
                  Web Development
                </Link>
                <Link
                  to='/service/custom-website-development'
                  className='text-base overlay-text'
                >
                  Web Development
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/ui-ux' className='text-base'>
                  UI/UX
                </Link>
                <Link to='/service/ui-ux' className='text-base overlay-text'>
                  UI/UX
                </Link>
              </li>
              <li className='sliding-text'>
                <Link
                  to='/service/e-commerce-platform-development'
                  className='text-base'
                >
                  Ecommerce
                </Link>
                <Link
                  to='/service/e-commerce-platform-development'
                  className='text-base overlay-text'
                >
                  Ecommerce
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/website-management' className='text-base'>
                  Website Management
                </Link>
                <Link
                  to='/service/website-management'
                  className='text-base overlay-text'
                >
                  Website Management
                </Link>
              </li>

              <li className='sliding-text'>
                <Link to='/service/website-audit' className='text-base'>
                  Website Audit
                </Link>
                <Link
                  to='/service/website-audit'
                  className='text-base overlay-text'
                >
                  Website Audit
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/testing' className='text-base'>
                  Testing
                </Link>
                <Link to='/service/testing' className='text-base overlay-text'>
                  Testing
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/cloud-solution' className='text-base'>
                  Cloud Solution
                </Link>
                <Link
                  to='/service/cloud-solution'
                  className='text-base overlay-text'
                >
                  Cloud Solution
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/seo' className='text-base'>
                  SEO
                </Link>
                <Link to='/service/seo' className='text-base overlay-text'>
                  SEO
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/lead-generation' className='text-base'>
                  Lead Generation
                </Link>
                <Link
                  to='/service/lead-generation'
                  className='text-base overlay-text'
                >
                  Lead Generation
                </Link>
              </li>
              <li className='sliding-text'>
                <Link
                  to='/service/social-media-management-&-marketing'
                  className='text-base'
                >
                  SMM
                </Link>
                <Link
                  to='/service/social-media-management-&-marketing'
                  className='text-base overlay-text'
                >
                  SMM
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/brand-strategy' className='text-base'>
                  Brand Strategy
                </Link>
                <Link
                  to='/service/brand-strategy'
                  className='text-base overlay-text'
                >
                  Brand Strategy
                </Link>
              </li>

              <li className='sliding-text'>
                <Link
                  to='/service/mobile-app-development'
                  className='text-base'
                >
                  Application Development
                </Link>
                <Link
                  to='/service/mobile-app-development'
                  className='text-base overlay-text'
                >
                  Application Development
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/custom-erp-solutions' className='text-base'>
                  ERP Development
                </Link>
                <Link
                  to='/service/custom-erp-solutions'
                  className='text-base overlay-text'
                >
                  ERP Development
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/local-seo' className='text-base'>
                  Local SEO
                </Link>
                <Link
                  to='/service/local-seo'
                  className='text-base overlay-text'
                >
                  Local SEO
                </Link>
              </li>
              <li className='sliding-text'>
                <Link to='/service/ai-automation' className='text-base'>
                  AI Automation
                </Link>
                <Link
                  to='/service/ai-automation'
                  className='text-base overlay-text'
                >
                  AI Automation
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col space-y-4'>
            <h3 className='text-xl font-semibold'>Contact</h3>
            <ul className='space-y-4'>
              <li className='sliding-text'>
                <a href='mailto:info@nipralo.com' className='text-base'>
                  info@nipralo.com
                </a>
                <a
                  href='mailto:info@nipralo.com'
                  className='text-base overlay-text'
                >
                  info@nipralo.com
                </a>
              </li>

              <li className='sliding-text'>
                <a href='tel:+91 79770 28431' className='text-base'>
                  +91 79770 28431
                </a>
                <Link
                  to='tel:+91 79770 28431'
                  className='text-base overlay-text'
                >
                  +91 79770 28431
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container mx-auto border-t border-gray-300 mt-8 pt-5 text-gray-500 text-sm flex text-center flex-col md:flex-row md:justify-between items-center pb-5 !md:pb-40'>
        <p className='text-lg'>&copy; 2024 Nipralo. All rights reserved.</p>
        <div className='flex flex-row md:flex-row md:space-x-4 mt-2 md:mt-[-10px]'>
          <Link
            to='privacy-policy'
            className='hover:underline mr-3 font-medium'
          >
            Privacy Policy
          </Link>
          <Link to='terms-conditions' className='hover:underline font-medium'>
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
