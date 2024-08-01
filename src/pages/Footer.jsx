import React from "react";
import Github from '../components/Github';
import LinkedIn from '../components/LinkedIn';

export const Footer = () => {
  return (
    <footer className="bg-bg1 flex flex-col items-center px-10 lg:px-32 py-8 relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between w-full">
        <div className="text-white">
          &copy; 2024 Caroline Drevon. Tous droits réservés.
        </div>
        <div className="inline-flex items-center gap-5 md:gap-16">
          <div className="inline-flex items-center gap-2">
            <LinkedIn color="#12F7D6" />
          </div>
          <div className="inline-flex items-center gap-2">
            <Github color="#12F7D6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;