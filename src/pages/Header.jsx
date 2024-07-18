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
    </div>
  );
};

export default Header;