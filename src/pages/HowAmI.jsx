import React from 'react';
import Contact from '../components/ContactCard';
import WelcomeAnimation from '../components/Welcome';
import Skills from '../components/Skills';
import LineWithDots from "../helpers/lineWithDots";

const HowAmIPage = () => {
  return (
    <section id="portfolio" className="p-6 bg-bg1">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-main1 font-sans text-6xl my-6">Developpeuse Front End</h2>
        <LineWithDots width="250" />
      </div>
      <div className="flex justify-around">
        <div className="bg-bg2 shadow-md shadow-main1 rounded-custom border-white w-80 flex justify-center items-center">
          <Contact />
        </div>
        <div className="bg-white shadow-md rounded-3xl p-4">
          <WelcomeAnimation />
        </div>
        <div className="bg-bg2 shadow-3d shadow-white rounded-custom2 p-4 w-2/6">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default HowAmIPage;