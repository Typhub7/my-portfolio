import React from "react";
import Github from '../components/Github'; 
import SearchInput from '../components/SearchInput';
import TypedText from '../components/TypedText';

export const Header = () => {
  const handleSearch = (query) => {
    console.log('Recherche pour :', query);
    // future logique de recherche
  };

  const phrase1 = "Bonjour, je suis Caroline Drevon, en formation développeuse Front-end.";
  const phrase2 = "Evolution de ma formation Openclassroom : 0% [ █ █ █ █ █ █ █ █ _ ] 90% ";

  return (
    <div id="menu" className="bg-bg1 flex flex-col items-center px-32 py-0 relative bg-bg-1 overflow-hidden">
      <div className="flex items-center justify-between px-0 py-16 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative">
            <TypedText phrase={phrase1} />
            <TypedText phrase={phrase2} initialDelay={7000} />
          </div>
        </div>
        <div className="inline-flex items-center gap-16 relative flex-[0_0_auto]">
            <div>
              <SearchInput onSearch={handleSearch} />
            </div>
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <Github color="#12F7D6" />
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