import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import logoDefault from "../../../assets/Logo/nipraloblack.png";
import logoScrolled from "../../../assets/Logo/nipralowhite.png";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { NavLink as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.8, delay: 0.3 },
      }}
      viewport={{ once: false }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className='container navbar-container'>
        <div className='navbar-logo'>
          <Link to='/'>
            <img src={scrolled ? logoScrolled : logoDefault} alt='Logo' />
          </Link>
        </div>
        <nav className={`navbar-links ${menuOpen ? "open" : ""}`} ref={menuRef}>
          <Link to='/' onClick={handleLinkClick}>
            <span className='dot'></span> Home
          </Link>
          <Link to='/about' onClick={handleLinkClick}>
            <span className='dot'></span> About
          </Link>
          <Link to='/services' onClick={handleLinkClick}>
            <span className='dot'></span> Services
          </Link>
          <Link to='/projects' onClick={handleLinkClick}>
            <span className='dot'></span> Projects
          </Link>
          {/* <Link to='/blog' onClick={handleLinkClick}>
            <span className='dot'></span> Blog
          </Link> */}
        </nav>
        <div className='navbar-cta'>
          <Button
            type='button'
            initialText='Contact'
            flippedText='Contact'
            width='109px'
            showArrow={false}
            onClick={() => navigate("/contact")}
          />
        </div>
        <div
          className={`navbar-menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          ref={menuButtonRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
