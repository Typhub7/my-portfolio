import React from 'react';
import MouseDown from "../components/MouseDown";
import { smoothScroll } from '../helpers/smoothScroll';
import LineWithDots from "../helpers/lineWithDots";
import SunburstChart from '../components/SunburstChart';
import dataFr from '../data/softSkillsData.json';
import dataEn from '../data/softSkillsData_en.json';
import { useLanguage } from '../context/LanguageContext';
import "./SoftSkills.css"

const SoftSkills = () => {
  const { language } = useLanguage();
  const data = language === 'en' ? dataEn : dataFr;
  return (
    <section className="bg-code-bg">
      <b className="hr anim"></b>
      <div className="flex flex-col justify-center items-center py-8">
        <div id="softskills" className='border-2 border-bg2 rounded-3xl px-6 bg-gradient-to-b from-bg4 to-bg5'>
          <h2 className="text-main1 font-sans text-2xl md:text-4xl lg:text-6xl my-4 text-shadow-custom">SoftSkills</h2>
        </div>
        <LineWithDots />
        <div className="shadow-md rounded-full w-11/12 lg:w-2/3 xl:w-1/2 max-w-4xl">
            <SunburstChart data={data} />
        </div>
      </div>
      <button onClick={() => smoothScroll('#contact')} className="flex justify-center mt-0 lg:mt-8 pb-6 lg:pb-8 w-full">
          <MouseDown mouseColor="#12F7D6" />
      </button>
      <b className="hr anim"></b>
    </section>
  );
};

export default SoftSkills;
