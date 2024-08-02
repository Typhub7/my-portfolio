import React from 'react';
import javascriptLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import sassLogo from '../assets/sass.png';
import typescriptLogo from '../assets/typescript.png';
import reduxLogo from '../assets/redux.png';
import tailwindLogo from '../assets/tailwind.png';
import strapi from '../assets/strapi.png';
import jestLogo from '../assets/jest.png';
import cypressLogo from '../assets/cypress.png';
import figmaLogo from '../assets/figma.png';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'Tailwind', logo: tailwindLogo },
  { name: 'Sass', logo: sassLogo },
  { name: 'Jest', logo: jestLogo },
  { name: 'Cypress', logo: cypressLogo },
  { name: 'Redux', logo: reduxLogo },
  { name: 'Strapi', logo: strapi },
];

const Skills = () => {
  const { language } = useLanguage();
  const title = language === 'fr' ? 'Compétences' : 'Skills';
  return (
    <div>
      <h2 className=" text-main1 text-base lg:text-2xl font-bold mt-0 mb-2 lg:my-6 text-center">{title}</h2>
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center my-2">
            <img src={skill.logo} alt={skill.name} className="w-7 h-7 lg:w-12 lg:h-12 mb-2" />
            <p className='text-main1 text-xs lg:text-base'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;