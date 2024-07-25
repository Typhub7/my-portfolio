import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faCss3Alt, faHtml5, faSass, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faCogs, faFeatherAlt} from '@fortawesome/free-solid-svg-icons';
import ProjectCard from "../components/ProjectCard";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import MouseDown from "../components/MouseDown";
import LineWithDots from "../helpers/lineWithDots";
import projectsData from "../data/projects.json";
import { smoothScroll } from '../helpers/smoothScroll';

const technologyIcons = [
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS3", icon: faCss3Alt },
  { name: "Sass", icon: faSass },
  { name: "Tailwind", icon: faFeatherAlt }, 
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "TypeScript", icon: faNodeJs }, 
  { name: "Zod", icon: faCogs }, 
  { name: "Redux", icon: faCode },
];

const ProjectPage = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("All");

  const handleFilterClick = (technology) => {
    setSelectedTechnology(technology);
  };

  return ( 
    <div className="bg-bg1 px-4 py-8">
      <div className="flex flex-col justify-center items-center">
        <div id="project"></div>
        <h2 className="text-main1 font-sans text-6xl my-6 text-shadow-custom">Projets</h2>
        <LineWithDots width="350" />
      </div>
      
      {/* Technologies Filter */}
      <div className="flex items-center justify-center space-x-4 my-12">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-16">
        {projectsData.map((project) => (
          (selectedTechnology === "All" || project.technologies.includes(selectedTechnology)) && (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              description={project.description}
              badgeText={project.badgeText}
            />
          )
        ))}
      </div>
      <button onClick={() => smoothScroll('#softskills')} className="flex justify-center mt-8 pt-8 w-full">
          <MouseDown mouseColor="#12F7D6" />
      </button>
    </div>
  );
};

export default ProjectPage;