import React from "react";

const ProjectCard = ({ title, image, githubLink, demoLink, description,badgeText  }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-48 sm:h-60 lg:h-80"> {/* Ajustez la hauteur ici si nécessaire */}
      {/* Image en arrière-plan */}
      <img 
        src={image} 
        alt={title} 
        className="absolute w-full object-cover" 
      />

      {/* Bandeau en diagonale */}
      {badgeText && (
        <div className="absolute top-14 right-[-1rem] transform rotate-45 translate-x-8 -translate-y-2 text-center bg-main1 text-black text-xs lg:text-sm px-2 py-1 shadow-md w-52">
          {badgeText}
        </div>
      )}
      
      {/* Superposition du contenu */}
      <div className="relative p-4 rounded-lg h-full flex flex-col justify-between">
      <div className="bg-black bg-opacity-60 py-1 px-4 rounded-md max-w-max shadow-3d z-50">
          <h3 className="text-sm lg:text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex justify-between text-sm lg:text-xl">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-main1 text-black px-4 py-2 rounded-md hover:bg-bg1 hover:text-main1 shadow-3d z-50">
            GitHub
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-main1 text-black px-4 py-2 rounded-md hover:bg-bg1 hover:text-main1 shadow-3d z-50">
            Démo
          </a>
        </div>
      </div>
      <div 
      className="absolute inset-0 bg-bg1 bg-opacity-75 text-yellowJs p-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-250 z-20"
      data-testid="ProjectCard-description">
        <p >{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;