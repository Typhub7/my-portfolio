import React from "react";

const ProjectCard = ({ title, image, githubLink, demoLink, description }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-80"> {/* Ajustez la hauteur ici si nécessaire */}
      {/* Image en arrière-plan */}
      <img src={image} alt={title} className="absolute w-full object-cover" />
      
      {/* Superposition du contenu */}
      <div className="relative p-4 rounded-lg h-full flex flex-col justify-between">
      <div className="bg-black bg-opacity-50 p-2 rounded-md w-1/3 shadow-3d z-50">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex justify-between">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-main1 text-black px-4 py-2 rounded-md hover:bg-bg1 hover:text-main1 shadow-3d z-50">
            Voir GitHub
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-main1 text-black px-4 py-2 rounded-md hover:bg-bg1 hover:text-main1 shadow-3d z-50">
            Voir démo
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-bg1 bg-opacity-75 text-yellowJs p-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;