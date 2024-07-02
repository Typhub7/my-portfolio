import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faCss3Alt, faHtml5, faSass } from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "../components/ProjectCard";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import projectsData from "../data/projects.json"; // Chemin vers votre fichier JSON

const technologyIcons = [
  { name: "React", icon: faReact },
  { name: "JavaScript", icon: faJs },
  { name: "CSS3", icon: faCss3Alt },
  { name: "HTML5", icon: faHtml5 },
  { name: "Sass", icon: faSass },
  { name: "Redux", icon: faCode },
];

const ProjectPage = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("All");

  const handleFilterClick = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className="px-4 py-8 bg-bg1">
      {/* Technologies Filter */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-md border border-gray-300 ${selectedTechnology === "All" ? 'bg-main1 text-black' : 'bg-bg1 text-main1'}`}
          onClick={() => handleFilterClick("All")}
        >
          All
        </button>
        {technologyIcons.map((tech, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md border border-gray-300 ${selectedTechnology === tech.name ? 'bg-main1 text-black'  : 'bg-bg1 text-main1'}`}
            onClick={() => handleFilterClick(tech.name)}
          >
            <FontAwesomeIcon icon={tech.icon} className="mr-2" />
            {tech.name}
          </button>
        ))}
      </div>

      {/* Project Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          (selectedTechnology === "All" || project.technologies.includes(selectedTechnology)) && (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              description={project.description}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;