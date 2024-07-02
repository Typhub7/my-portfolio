import React, { useState } from 'react';

const Button = ({
  label,
  bgColor,
  textColor,
  bgHoverColor,
  textHoverColor,
  borderRadius = '32px',
  }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? bgHoverColor : bgColor,
    color: isHovered ? textHoverColor : textColor,
    borderRadius: borderRadius,
    padding: '10px 20px',
    border: `2px solid ${bgColor}`,
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
};

export default Button;