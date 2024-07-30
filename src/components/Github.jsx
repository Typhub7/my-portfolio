import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Github = ({ color = 'black' }) => {
  return (
    <a
      href="https://github.com/Typhub7/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 s:text-xs mg:text-sm lg:text-base xl:text-lg hover:underline"
      style={{ color: color }}
    >
      <FontAwesomeIcon icon={faGithub} />
      <span>Mon Github</span>
    </a>
  );
};

export default Github;