import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faInfoCircle, faProjectDiagram, faEnvelope, faBrain } from '@fortawesome/free-solid-svg-icons';
import { smoothScroll } from '../helpers/smoothScroll';
import { Tooltip } from 'react-tooltip';
import { useLanguage } from '../context/LanguageContext';

const FloatingMenu = () => {
  const { language } = useLanguage();
  const backToTop = language === 'fr' ? 'Retour en haut' : 'Back to top';
  const whoAmI = language === 'fr' ? 'Qui suis-je ?' : 'Who am I ?';
  const moreAbout = language === 'fr' ? 'En savoir plus sur moi' : 'About me';
  const myProjects = language === 'fr' ? 'Mes projets' : 'My projects';
  const mySoftskills = language === 'fr' ? 'Mes soft-skills' : 'My soft-skills';
  const contactMe = language === 'fr' ? 'Contactez-moi' : 'Contact me';

  return (
    <div className="fixed top-1/4 left-2 flex flex-col items-center  md:bg-white bg-opacity-100 md:bg-opacity-80 border-2 md:border-0 rounded-3xl shadow-lg p-2 lg:p-4 z-50">
      <button
        data-testid="menu-button"
        onClick={() => smoothScroll('#menu')}
        className="my-2 text-white md:text-gray-800 hover:text-blue-500 text-sm lg:text-2xl"
        data-tooltip-id="menu-tooltip"
        data-tooltip-content={backToTop}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button
        data-testid="howami-button"
        onClick={() => smoothScroll('#howamI')}
        className="my-2 text-white md:text-gray-800 hover:text-blue-500 text-sm lg:text-2xl"
        data-tooltip-id="howami-tooltip"
        data-tooltip-content={whoAmI}
      >
        <FontAwesomeIcon icon={faUser} />
      </button>
      <button
        data-testid="about-button"
        onClick={() => smoothScroll('#about')}
        className="my-2 text-white md:text-gray-800 hover:text-blue-500 text-sm lg:text-2xl"
        data-tooltip-id="about-tooltip"
        data-tooltip-content={moreAbout}
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
      <button
        data-testid="project-button"
        onClick={() => smoothScroll('#project')}
        className="my-2 text-white md:text-gray-800 hover:text-blue-500 text-sm lg:text-2xl"
        data-tooltip-id="project-tooltip"
        data-tooltip-content={myProjects}
      >
        <FontAwesomeIcon icon={faProjectDiagram} />
      </button>
      <button
        data-testid="softskills-button"
        onClick={() => smoothScroll('#softskills')}
        className="my-2 text-white md:text-gray-800 hover:text-blue-500 text-sm lg:text-2xl"
        data-tooltip-id="softskills-tooltip"
        data-tooltip-content={mySoftskills}
      >
        <FontAwesomeIcon icon={faBrain} />
      </button>
      <button
        data-testid="contact-button"
        onClick={() => smoothScroll('#contact')}
        className="my-2 text-white md:text-gray-800 hover:text-blue-500 text-sm lg:text-2xl"
        data-tooltip-id="contact-tooltip"
        data-tooltip-content={contactMe}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
      <Tooltip id="menu-tooltip" place="right" effect="solid"/>
      <Tooltip id="howami-tooltip" place="right" effect="solid"/>
      <Tooltip id="about-tooltip" place="right" effect="solid"/>
      <Tooltip id="project-tooltip" place="right" effect="solid"/>
      <Tooltip id="softskills-tooltip" place="right" effect="solid"/>
      <Tooltip id="contact-tooltip" place="right" effect="solid"/>
    </div>
  );
};

export default FloatingMenu;
