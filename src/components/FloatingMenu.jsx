import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faInfoCircle, faProjectDiagram, faEnvelope, faBrain } from '@fortawesome/free-solid-svg-icons';
import { smoothScroll } from '../helpers/smoothScroll';

const FloatingMenu = () => {
  return (
    <div className="fixed top-1/4 left-2 flex flex-col items-center bg-white rounded-3xl shadow-lg p-4 z-50">
      <button
        data-testid="menu-button"
        onClick={() => smoothScroll('#menu')}
        className="my-2 text-gray-800 hover:text-blue-500 text-2xl"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button
        data-testid="howami-button"
        onClick={() => smoothScroll('#howamI')}
        className="my-2 text-gray-800 hover:text-blue-500 text-2xl"
      >
        <FontAwesomeIcon icon={faUser} />
      </button>
      <button
        data-testid="about-button"
        onClick={() => smoothScroll('#about')}
        className="my-2 text-gray-800 hover:text-blue-500 text-2xl"
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
      <button
        data-testid="project-button"
        onClick={() => smoothScroll('#project')}
        className="my-2 text-gray-800 hover:text-blue-500 text-2xl"
      >
        <FontAwesomeIcon icon={faProjectDiagram} />
      </button>
      <button
        data-testid="softskills-button"
        onClick={() => smoothScroll('#softskills')}
        className="my-2 text-gray-800 hover:text-blue-500 text-2xl"
      >
        <FontAwesomeIcon icon={faBrain} />
      </button>
      <button
        data-testid="contact-button"
        onClick={() => smoothScroll('#contact')}
        className="my-2 text-gray-800 hover:text-blue-500 text-2xl"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </div>
  );
};

export default FloatingMenu;