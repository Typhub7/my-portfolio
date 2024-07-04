import React from "react";

const SoftSkillCard = ({ name, description, proficiency }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-80">
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-4 text-sm font-semibold">Proficiency: {proficiency}</p>
      </div>
    </div>
  );
};

export default SoftSkillCard;