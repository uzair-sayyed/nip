import React, { useState, useRef, useEffect } from "react";
import "./Button.scss";
import arrowIconWhite from "../../../assets/icon/arrowiconwhite.png";
import arrowIconBlack from "../../../assets/icon/arrowiconblack.png";
// import arrowIconWhite from "../../../assets/arrow-icon2.png";
// import arrowIconBlack from "../../../assets/arrow-icon2black.png";
import { motion } from "framer-motion";

const Button = ({
  initialText,
  flippedText,
  onClick,
  className = "",
  icon,
  iconColor = "white", 
  width,
  type,
  showArrow,
  backgroundColor,
  textColor,
  fontWeight,
}) => {
  const [flipped, setFlipped] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!width && buttonRef.current) {
      const buttonWidth = Math.max(
        buttonRef.current.querySelector(".initial").offsetWidth,
        buttonRef.current.querySelector(".flipped-text").offsetWidth
      );
      buttonRef.current.style.width = `${buttonWidth + 30}px`; // 30px extra padding
    }
  }, [width]);

  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  // Determine the icon to use: custom passed icon component, or default based on iconColor
  const selectedIcon =
    icon || (iconColor === "black" ? arrowIconBlack : arrowIconWhite);

  return (
    <motion.button
      ref={buttonRef}
      className={`btn ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        width: width || "auto",
        ...(backgroundColor && { backgroundColor }),
        ...(textColor && { color: textColor }),
        ...(fontWeight && { fontWeight: fontWeight }),
      }}
      type={type || "button"}
    >
      <span
        className={`font-normal btn-text initial ${flipped ? "move-up" : ""}`}
      >
        {initialText}
      </span>
      <span
        className={`font-normal btn-text flipped-text ${
          flipped ? "move-in" : ""
        }`}
      >
        {flippedText}
      </span>
      {showArrow && (
        <span className={`btn-icon ${flipped ? "rotate" : ""}`}>
          {typeof selectedIcon === "string" ? (
            <img src={selectedIcon} alt='Arrow' />
          ) : (
            React.createElement(selectedIcon)
          )}
        </span>
      )}
    </motion.button>
  );
};

export default Button;
