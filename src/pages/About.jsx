import React from "react";
import MouseDown from "../components/MouseDown";

const Contact = () => {
  return (
    <div id="about" className="flex flex-col items-center gap-16 pb-4 px-0 bg-bg2 bg-custom-bg bg-lightgray bg-center-50 bg-cover bg-no-repeat">
    <div className="w-screen">
      <svg 
        className="separator" 
        width="100%" 
        height="120" 
        viewBox="0.1 0.1 180 40" 
        preserveAspectRatio="none"
      >
        <g transform="translate(-18.298844,-77.973964)">
          <path 
            style={{ fill: '#12F7D6' }} 
            d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z" 
          />
          <path 
            style={{ fill: '#22313f' }} 
            d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z" 
          />
        </g>
      </svg>     
    </div>
      
      <div className="flex justify-center items-center">
        <MouseDown mouseColor="#12F7D6" />
      </div>
      <div className="inline-flex flex-col bg-bg1 items-center px-10 py-4 text-white text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-main1">
        Qui suis-je ?
      </div>
      <div className="flex justify-center w-5/6 gap-10 flex-wrap pb-16">      
        <div className="flex flex-col bg-bg1 items-center px-10 py-4 text-main1 text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-bg1 w-2/6">
            <div className="px-4 py-6">
            <p className="text-base">
                Je suis une développeuse junior spécialisée en {" "}
            <span className="text-yellowJs">JavaScript</span> et{" "}
            <span className="text-yellowJs">React</span>, passionnée par la création d'applications web modernes et interactives. </p>
            <p className="text-base">J'ai débuté ma carrière en tant qu'ingénieure biomédicale dans le nucléaire avec une maîtrise en génie biomédical et un DUT en génie électrique et informatique industrielle. J'ai choisie de faire une <span className="text-yellowJs">reconversion professionnelle</span> via une formation de 14 mois avec Openclassroom.
            </p>
            </div>
        </div>
        <div className="flex flex-col bg-bg1 items-center px-10 py-4 text-main1 text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-bg1 w-2/6">
            <div className="px-4 py-6">
            <p className="text-base">
                Ma transition vers le développement informatique a été guidée par ma constante volonté de m'améliorer et de relever de nouveaux défis. Je suis {" "}
                <span className="text-yellowJs">optimiste</span>, {" "}
                <span className="text-yellowJs">perfectionniste</span> et j'aime apprendre continuellement. </p>
                <p className="text-base">Mon parcours m'a inculqué une <span className="text-yellowJs">rigueur scientifique </span> et une capacité à résoudre des problèmes complexes, des compétences que j'applique désormais dans le développement logiciel.
            </p>
            </div>
        </div>
        <div className="flex flex-col bg-bg1 items-center px-10 py-4 text-main1 text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-bg1 w-2/6">
            <div className="px-4 py-6">
            <p className="text-base">
                En dehors du code, je trouve un équilibre précieux en passant du temps avec mon mari et mes enfants. Je nourris également une passion pour l'archéologie et la <span className="text-yellowJs">détection de métaux </span>, des intérêts qui reflètent ma <span className="text-yellowJs">curiosité  </span>et ma <span className="text-yellowJs">persévérance </span>. </p>
                <p className="text-base">Mon voyage dans l'informatique a débuté dès l'enfance avec du BASIC sur un Amstrad 6128, une expérience qui a semé les graines de ma passion pour la technologie.
            </p>
            </div>
        </div>
        <div className="flex flex-col bg-bg1 items-center px-10 py-4 text-main1 text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-bg1 w-2/6">
            <div className="px-4 py-6">
            <p className="text-base">
                Actuellement à la <span className="text-yellowJs">recherche d'un emploi</span> à temps plein ou partiel, en travail à distance, comme <span className="text-yellowJs">developpeuse Front-End, testeur QA ou Product Owner.</span></p>
                <p className="text-base"> Je aussi prête à effectuer des formations complémentaires en alternance ou Poec.</p>
                <p className="text-base"> Je bénéficie d'une reconnaissance de travailleur handicapé pour un handicap physique.
            </p>
            </div>
        </div>
      </div>
      <div className="min-w-96 p-0">
        <svg 
        className="separator" 
        width="100%" 
        height="120" 
        viewBox="0.1 0.1 180 40" 
        preserveAspectRatio="none"
      >
        <g transform="scale(1, -1) translate(-17, -130)">
          <path 
            style={{ fill: '#12F7D6' }} 
            d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z" 
          />
          <path 
            style={{ fill: '#22313f' }} 
            d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z" 
          />
        </g>
        </svg>
      </div>
    </div>
  );
};

export default Contact;