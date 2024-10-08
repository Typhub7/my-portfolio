import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";

const Github = ({ color = "black" }) => {
  const { language } = useLanguage();
  const label = language === "fr" ? "Mon Github" : "My Github";

  return (
    <a
      href="https://github.com/Typhub7/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-xs mg:text-sm lg:text-base xl:text-lg hover:underline"
      style={{ color: color }}
    >
      <FontAwesomeIcon icon={faGithub} />
      <span>{label}</span>
    </a>
  );
};

export default Github;
