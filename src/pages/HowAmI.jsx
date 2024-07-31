import React from 'react';
import Contact from '../components/ContactCard';
import WelcomeAnimation from '../components/Welcome';
import Skills from '../components/Skills';
import LineWithDots from "../helpers/lineWithDots";
import MouseDown from "../components/MouseDown";
import { smoothScroll } from '../helpers/smoothScroll';

const HowAmIPage = () => {
  return (
    <section id="howamI" className="pt-2 lg:pt-6 bg-bg3">
      <div className="flex flex-col">
        <h2 className="text-main1 text-center font-sans text-2xl md:text-4xl lg:text-6xl mt-4 mb-2 lg:mt-6 lg:mb-6">Developpeuse Front End</h2>
        <LineWithDots />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-around my-4 lg:my-10">
          <div className="bg-bg2 shadow-md shadow-main1 rounded-custom2 border-white w-64 lg:w-96 h-72 lg:h-custom-h flex justify-center items-center">
            <Contact />
          </div>
          <div className="bg-white shadow-md rounded-3xl p-4">
            <WelcomeAnimation />
          </div>
          <div className="bg-bg2 shadow-3d shadow-white rounded-custom2 p-4 w-64 sm:w-80 lg:w-96">
            <Skills />
          </div>
        </div>
        <button onClick={() => smoothScroll('#about')} className="flex justify-center items-end pt-4">
          <MouseDown mouseColor="#12F7D6" />
        </button>
      </div>
    </section>
  );
};

export default HowAmIPage;