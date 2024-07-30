import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedIn = ({ color = 'black' }) => {
  return (
    <a
      href="https://www.linkedin.com/in/ton-profil/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-xs mg:text-sm lg:text-base xl:text-lg  hover:underline"
      style={{ color: color }}
    >
      <FontAwesomeIcon icon={faLinkedin} />
      <span>Mon LinkedIn</span>
    </a>
  );
};

export default LinkedIn;
