import React from 'react';
import javascriptLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import sassLogo from '../assets/sass.png';
import typescriptLogo from '../assets/typescript.png';
import reduxLogo from '../assets/redux.png';
import tailwindLogo from '../assets/tailwind.png';
import apiLogo from '../assets/api.png';
import jestLogo from '../assets/jest.png';
import cypressLogo from '../assets/cypress.png';


const skills = [
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'Sass', logo: sassLogo },
  { name: 'Tailwind', logo: tailwindLogo },
  { name: 'Redux', logo: reduxLogo },
  { name: 'API', logo: apiLogo },
  { name: 'Jest', logo: jestLogo },
  { name: 'Cypress', logo: cypressLogo },
];

const Skills = () => {
  return (
    <div className=''>
      <h2 className=" text-main1 text-2xl font-bold mb-4 ml-6">Compétences</h2>
      <div className="grid grid-cols-4 gap-4 ">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center my-2">
            <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-2" />
            <p className='text-main1'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;