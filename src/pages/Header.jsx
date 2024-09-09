import React from "react";
import Github from '../components/Github';
import LinkedIn from '../components/LinkedIn'; 
import TypedText from '../components/TypedText';
import { useLanguage } from '../context/LanguageContext';
import franceFlag from '../assets/france-flag.png';
import ukFlag from '../assets/uk-flag.png';

 const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const phrase1 = language === 'fr' ? "Bonjour, je suis Caroline Drevon, développeuse Front-end." : "Hello, I am Caroline Drevon, Front-end Developer.";
  const phrase2 = language === 'fr' ? "Bienvenue sur mon portfolio !" : "Welcome to my portfolio!";

  return (
    <div id="menu" className="bg-bg1 flex flex-col items-center px-12 sm:px-16 md:px-32 pt-4 md:py-0 relative bg-bg-1 overflow-hidden">
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 items-center justify-between px-0 pt-8 pb-4 lg:pb-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2">
          <div className="relative">
            <TypedText phrase={phrase1} />
            <TypedText phrase={phrase2} initialDelay={2000} />
          </div>
        </div>
        <div className="inline-flex items-center gap-4 md:gap-8 lg:gap-16">
          <div className="inline-flex items-center gap-2">
            <LinkedIn color="#12F7D6" />
          </div>
          <div className="inline-flex items-center gap-2">
            <Github color="#12F7D6" />
          </div>
          <div className="inline-flex items-center gap-2">
            <button onClick={() => toggleLanguage()}>
              <img src={language === 'fr' ? ukFlag : franceFlag } alt="Toggle Language" width="30" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <svg 
          preserveAspectRatio="xMidYMax meet" 
          className="svg-separator sep3" 
          viewBox="0 0 1600 100" 
          style={{ display: 'block' }} 
          data-height="100"
        >
          <path 
            style={{ opacity: 1, fill: '#273a4c' }} 
            d="M-40,71.627C20.307,71.627,20.058,32,80,32s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,26H-60V72L-40,71.627z"
          />
          <path 
            style={{ opacity: 1, fill: '#2a3f54' }} 
            d="M-40,83.627C20.307,83.627,20.058,44,80,44s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,14H-60V84L-40,83.627z"
          />
          <path 
            style={{ fill: 'rgb(34, 49, 63)' }} 
            d="M-40,95.627C20.307,95.627,20.058,56,80,56s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,138H-60V96L-40,95.627z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
