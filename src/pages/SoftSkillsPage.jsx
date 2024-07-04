import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faComments, faTools, faChartPie } from "@fortawesome/free-solid-svg-icons"; // Importe les icônes correspondant à tes thèmes
import SoftSkillCard from "../components/SoftSkillCard";
import softSkillsData from "../data/softSkillsData"

// Tableau des icônes de thèmes
const themeIcons = [
  { name: "Communication", icon: faComments },
  { name: "Collaboration", icon: faUserFriends },
  { name: "Problème-Solving", icon: faTools },
  { name: "Leadership", icon: faChartPie },
  // Ajoute d'autres thèmes selon tes besoins
];

const SoftSkillsPage = () => {
  const [selectedTheme, setSelectedTheme] = useState("All");

  const handleFilterClick = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="px-4 py-8 bg-bg1">
      {/* Thèmes Filter */}
      <div className="flex items-center justify-center space-x-4 my-12">
        <button
          className={`px-4 py-2 rounded-md border border-gray-300 ${selectedTheme === "All" ? 'bg-main1 text-black' : 'bg-bg1 text-main1'}`}
          onClick={() => handleFilterClick("All")}
        >
          All
        </button>
        {themeIcons.map((theme, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md border border-gray-300 ${selectedTheme === theme.name ? 'bg-main1 text-black'  : 'bg-bg1 text-main1'}`}
            onClick={() => handleFilterClick(theme.name)}
          >
            <FontAwesomeIcon icon={theme.icon} className="mr-2" />
            {theme.name}
          </button>
        ))}
      </div>

      {/* Soft Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-16">
        {/* Ici tu placeras la logique pour afficher les cartes de soft skills filtrées */}
        {/* Tu peux utiliser une liste statique pour l'exemple */}
        {softSkillsData.map((skill) => (
          (selectedTheme === "All" || skill.themes.includes(selectedTheme)) && (
            <SoftSkillCard
              key={skill.id}
              name={skill.name}
              description={skill.description}
              proficiency={skill.proficiency}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default SoftSkillsPage;