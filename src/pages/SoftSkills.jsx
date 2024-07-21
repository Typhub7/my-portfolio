import React from 'react';
import MouseDown from "../components/MouseDown";
import LineWithDots from "../helpers/lineWithDots";
import './SoftSkills.css';

const softSkillsData = [
  {
    category: 'Formation openClassroom ',
    skills: ['Autonomie', 'Gestion du temps', 'Esprit critique', "Agile" ]
  },
  {
    category: 'Ingénieur Biomédical',
    skills: ['Rigueur', 'Analyse', 'Résolution de problèmes', "Kaizen 5S", "Kanban"]
  },
  {
    category: 'Assistance R&D',
    skills: ['Documentation technique', 'Travail en équipe', 'Perspective Technicien', 'Perspective Client', 'Qualité']
  },
  {
    category: 'Famille et Enfants',
    skills: ['Organisation', 'Multitâche', 'Gestion du stress']
  },
  {
    category: 'Technicienne  Électronique',
    skills: ['Précision', 'Patience', 'Résilience']
  },
  {
    category: 'Assistante Vétérinaire',
    skills: ['Empathie', 'Communication', 'Adaptabilité','Diplomatie' ]
  },
];

const MindMap = ({ data, index }) => {
  const centerX = 300;
  const centerY = 300;
  const radius = 200;
  const maxLineLength = 12; // Ajuste cette valeur selon tes besoins

  const getCoordinatesForSkill = (index, total) => {
    const angle = (index / total) * (2 * Math.PI) - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  const getLineCoordinates = (skillX, skillY) => {
    const innerRadius = 115; // Rayon du cercle central
    const length = Math.sqrt((skillX - centerX) ** 2 + (skillY - centerY) ** 2);
    const scale = (length - innerRadius) / length;
    return {
      x1: centerX + scale * (skillX - centerX),
      y1: centerY + scale * (skillY - centerY),
      x2: skillX,
      y2: skillY
    };
  };

  const splitTextToTspan = (text, maxLineLength) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + word).length <= maxLineLength) {
        currentLine += `${word} `;
      } else {
        lines.push(currentLine.trim());
        currentLine = `${word} `;
      }
    });

    if (currentLine.length > 0) {
      lines.push(currentLine.trim());
    }

    return lines;
  };

  const categoryLines = splitTextToTspan(data.category, maxLineLength);

  return (
    <svg className="block mx-auto rounded-3xl backdrop-contrast-150 backdrop-blur-sm border-main1 border-2" width="600" height="600" >
      <circle className={`transition-colors duration-300 ease-in-out hover:fill-bg2 fill-bg1`} cx={centerX} cy={centerY} r="85" stroke="#000" strokeWidth="2" />
      <text x={centerX} y={centerY - (categoryLines.length - 1) * 6} textAnchor="middle" dy=".3em" fontSize="16" fontWeight="bold" fill="#F0DB4F">
        {categoryLines.map((line, lineIndex) => (
          <tspan key={lineIndex} x={centerX} dy={lineIndex === 0 ? '0em' : '1.2em'} >
            {line}
          </tspan>
        ))}
      </text>

      {data.skills.map((skill, skillIndex) => {
        const { x, y } = getCoordinatesForSkill(skillIndex, data.skills.length);
        const { x1, y1, x2, y2 } = getLineCoordinates(x, y);
        const skillLines = splitTextToTspan(skill, maxLineLength);

        return (
          <g key={skillIndex}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F0DB4F" strokeWidth="2" />
            <circle className={`transition-colors duration-300 ease-in-out hover:fill-bg2 fill-bg1`} cx={x} cy={y} r="60" stroke="#000" strokeWidth="2" />
            <text x={x} y={y - (skillLines.length - 1) * 6} textAnchor="middle" dy=".3em" fontSize="14" fill="#F0DB4F">
              {skillLines.map((line, lineIndex) => (
                <tspan key={lineIndex} x={x} dy={lineIndex === 0 ? '0em' : '1.2em'}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const SoftSkills = () => {
  return (
    <section id="softskills" className="bg-code-bg">
      <b class="hr anim"></b>
      <div className="flex flex-col justify-center items-center py-8">
        <MouseDown mouseColor="#12F7D6" />
        <h2 className="text-main1 font-sans text-6xl my-6">SoftSkills</h2>
        <LineWithDots width="350" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 pb-10">
        {softSkillsData.map((category, index) => (
          <div key={index} className="shadow-md rounded-3xl p-4">
            <MindMap data={category} index={index} />
          </div>
        ))}
      </div>
      <b class="hr anim"></b>
    </section>
  );
};

export default SoftSkills;
