import React from "react";
import MouseDown from "../components/MouseDown";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-16 pt-8 pb-4 px-0 bg-bg2 bg-custom-bg bg-lightgray bg-center-50 bg-cover bg-no-repeat">
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
            <p className="text-base">Issue d'une <span className="text-yellowJs">reconversion professionnelle</span>  motivée par des raisons médicales, j'ai débuté ma carrière en tant qu'ingénieure biomédicale avec une maîtrise en génie biomédical et un DUT en génie électrique et informatique industrielle. J'ai suivie une formation de 14 mois avec Openclassroom.
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
                Actuellement à la <span className="text-yellowJs">recherche d'un emploi</span> à temps plein ou partiel, en travail à distance, comme developpeuse Front-End, testeur QA ou Product Owner.</p> 
                <p className="text-base"> Je bénéficie d'une reconnaissance de travailleur handicapé.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;