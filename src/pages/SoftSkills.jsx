import React from 'react';
import MouseDown from "../components/MouseDown";
import LineWithDots from "../helpers/lineWithDots";
import SunburstChart from '../components/SunburstChart';

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
    <section id="softskills" className="bg-code-bg">
      <b class="hr anim"></b>
      <div className="flex flex-col justify-center items-center py-8">
        <MouseDown mouseColor="#12F7D6" />
        <h2 className="text-main1 font-sans text-6xl my-6">SoftSkills</h2>
        <LineWithDots width="350" />
        <div className="shadow-md rounded-full w-1/2 ">
            <SunburstChart data={data} />
        </div>
      </div>
      <b class="hr anim"></b>
    </section>
  );
};

export default SoftSkills;
