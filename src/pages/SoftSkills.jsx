import React from 'react';
import MouseDown from "../components/MouseDown";
import { smoothScroll } from '../helpers/smoothScroll';
import LineWithDots from "../helpers/lineWithDots";
import SunburstChart from '../components/SunburstChart';
import "./SoftSkills.css"

const data = {
  name: "Developpeur Javascript",
  children: [
    {
      name: "Famille et Enfants",
      children: [
        { name: "Organisation", value: 1 },
        { name: "Multitâche", value: 1 },
        { name: "Gestion du stress", value: 1 },
      ]
    },
    {
      name: "Ingénieur Biomédical",
      children: [
        { name: "Rigueur", value: 1 },
        { name: "Analyse", value: 1 },
        { name: "Résolution de problèmes", value: 1 },
        { name: "Kaizen 5S et  Kanban", value: 1 },
      ]
    },
    {
      name: "Assistance R&D",
      children: [
        { name: "Documentation technique", value: 1 },
        { name: "Travail en équipe", value: 1 },
        { name: "Perspective Technicien et Client", value: 1 },
        { name: "Qualité", value: 1 },
      ]
    },
    {
      name: "Formation openClassroom",
      children: [
        { name: "Autonomie", value: 1 },
        { name: "Gestion du temps", value: 1 },
        { name: "Esprit critique", value: 1 },
        { name: "Méthode Agile", value: 1 },
      ]
    }
    ,
    {
      name: "Technicienne Électronique",
      children: [
        { name: "Précision", value: 1 },
        { name: "Patience", value: 1 },
        { name: "Résilience", value: 1 },
      ]
    },
    {
      name: "Assistante Vétérinaire",
      children: [
        { name: "Empathie", value: 1 },
        { name: "Communication", value: 1 },
        { name: "Adaptabilité", value: 1 },
        { name: "Diplomatie", value: 1 },
      ]
    },
  ]
};

const SoftSkills = () => {
  return (
    <section className="bg-code-bg">
      <b className="hr anim"></b>
      <div className="flex flex-col justify-center items-center py-8">
        <div id="softskills" className='border-2 border-bg2 rounded-3xl px-6 bg-gradient-to-b from-bg4 to-bg5'>
          <h2 className="text-main1 font-sans text-2xl md:text-4xl lg:text-6xl my-4 text-shadow-custom">SoftSkills</h2>
        </div>
        <LineWithDots />
        <div className="shadow-md rounded-full w-10/12 lg:w-2/3 xl:w-1/2 ">
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
