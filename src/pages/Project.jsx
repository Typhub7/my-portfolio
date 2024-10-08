import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faCss3Alt,
  faHtml5,
  faSass,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCogs,
  faFeatherAlt,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../components/ProjectCard";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import MouseDown from "../components/MouseDown";
import LineWithDots from "../helpers/lineWithDots";
import DataFR from "../data/projectsData.json";
import DataEn from "../data/projectsData_en.json";
import { smoothScroll } from "../helpers/smoothScroll";
import { useLanguage } from "../context/LanguageContext";

const technologyIcons = [
  { name: "Best", icon: faTrophy },
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
  const { language } = useLanguage();
  const projectsData = language === "fr" ? DataFR : DataEn;
  const titleLabel = language === "fr" ? "Projets" : "Projects";

  const [selectedTechnology, setSelectedTechnology] = useState("Best");

  const handleFilterClick = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className="bg-bg1 px-4 py-4 lg:py-8">
      <div className="flex flex-col justify-center items-center">
        <div id="project"></div>
        <h2 className="text-main1 font-sans text-2xl md:text-4xl lg:text-6xl my-2 lg:my-6 text-shadow-custom">
          {titleLabel}
        </h2>
        <LineWithDots />
      </div>

      {/* Technologies Filter */}
      <div className="flex items-center justify-center flex-wrap space-x-4 px-5 my-6 lg:my-12 gap-2 lg:gap-1">
        <button
          className={`px-4 py-2 rounded-md border text-xs lg:text-base border-gray-300 ${
            selectedTechnology === "All"
              ? "bg-main1 text-black"
              : "bg-bg1 text-main1"
          }`}
          onClick={() => handleFilterClick("All")}
        >
          All
        </button>
        {technologyIcons.map((tech, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md border text-xs lg:text-base border-gray-300 ${
              selectedTechnology === tech.name
                ? "bg-main1 text-black"
                : "bg-bg1 text-main1"
            }`}
            onClick={() => handleFilterClick(tech.name)}
          >
            <FontAwesomeIcon icon={tech.icon} className="mr-2" />
            {tech.name}
          </button>
        ))}
      </div>

      {/* Project Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mx-6 sm:mx-16">
        {projectsData.map(
          (project) =>
            (selectedTechnology === "All" ||
              project.technologies.includes(selectedTechnology)) && (
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
        )}
      </div>
      <button
        onClick={() => smoothScroll("#softskills")}
        className="flex justify-center mt-8 pt-8 w-full"
      >
        <MouseDown mouseColor="#12F7D6" />
      </button>
    </div>
  );
};

export default ProjectPage;
