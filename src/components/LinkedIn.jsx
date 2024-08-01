import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../context/LanguageContext';

const LinkedIn = ({ color = 'black' }) => {
  const { language } = useLanguage();
  const label = language === 'fr' ? 'Mon LinkedIn' : 'My LinkedIn';

  return (
    <a
      href="https://www.linkedin.com/in/ton-profil/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-xs mg:text-sm lg:text-base xl:text-lg  hover:underline"
      style={{ color: color }}
    >
      <FontAwesomeIcon icon={faLinkedin} />
      <span>{label}</span>
    </a>
  );
};

export default LinkedIn;
