import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faInfoCircle, faProjectDiagram, faEnvelope, faBrain } from '@fortawesome/free-solid-svg-icons';
import { smoothScroll } from '../helpers/smoothScroll';

const FloatingMenu = () => {
  return (
    <div className="fixed top-1/4 left-2 flex flex-col items-center bg-white rounded-3xl shadow-lg p-2 z-50">
      <button onClick={() => smoothScroll('#menu')} className="my-2 text-gray-800 hover:text-blue-500 text-2xl">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button onClick={() => smoothScroll('#howamI')} className="my-2 text-gray-800 hover:text-blue-500 text-2xl">
        <FontAwesomeIcon icon={faUser} />
      </button>
      <button onClick={() => smoothScroll('#about')} className="my-2 text-gray-800 hover:text-blue-500 text-2xl">
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
      <button onClick={() => smoothScroll('#project')} className="my-2 text-gray-800 hover:text-blue-500 text-2xl">
        <FontAwesomeIcon icon={faProjectDiagram} />
      </button>
      <button onClick={() => smoothScroll('#softskills')} className="my-2 text-gray-800 hover:text-blue-500 text-2xl">
        <FontAwesomeIcon icon={faBrain} />
      </button>
      <button onClick={() => smoothScroll('#contact')} className="my-2 text-gray-800 hover:text-blue-500 text-2xl">
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </div>
  );
};

export default FloatingMenu;