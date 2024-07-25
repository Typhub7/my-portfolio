import React from 'react';
import Contact from '../components/ContactCard';
import WelcomeAnimation from '../components/Welcome';
import Skills from '../components/Skills';
import LineWithDots from "../helpers/lineWithDots";
import MouseDown from "../components/MouseDown";
import { smoothScroll } from '../helpers/smoothScroll';

const HowAmIPage = () => {
  return (
    <section id="howamI" className="pt-6  bg-bg3">
      <div className="flex flex-col">
        <h2 className="text-main1 text-center font-sans text-6xl my-6">Developpeuse Front End</h2>
        <LineWithDots width="250" />
        <div className="flex justify-around my-10">
          <div className="bg-bg2 shadow-md shadow-main1 rounded-custom border-white w-80 flex justify-center items-center">
            <Contact />
          </div>
          <div className="bg-white shadow-md rounded-3xl p-4">
            <WelcomeAnimation />
          </div>
          <div className="bg-bg2 shadow-3d shadow-white rounded-custom2 p-4 w-1/6">
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