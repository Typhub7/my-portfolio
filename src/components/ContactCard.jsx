import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/OvaleButton";

const ContactCard = () => {
  const { language } = useLanguage();
  const yearsCity =
    language === "fr"
      ? "46 ans - 38440 Meyrieu-les-étangs"
      : "46 years - 38440 Meyrieu-les-Étangs";
  const spokenLanguages =
    language === "fr"
      ? "Anglais B2 - Italien A2"
      : "French Native - English B2 -  Italian A2 ";
  const searchFor = language === "fr" ? "Recherche" : "Search";
  const languageTitle = language === "fr" ? "Langues" : "Languages";
  const partial =
    language === "fr" ? "Temps plein ou partiel" : "Full or Part-time";
  const distance = language === "fr" ? "Distanciel" : "Remote";
  const downloadCV =
    language === "fr" ? "Télécharger mon CV" : "Download my CV";

  return (
    <div className="text-white text-center lg:text-start">
      <h2 className="text-base lg:text-2xl font-bold mt-4 lg:mt-0 mb-4 ">
        Caroline Drevon
      </h2>
      <p className="my-1 text-xs lg:text-base">
        {" "}
        <a href="mailto:drevon.caroline@gmail.com">drevon.caroline@gmail.com</a>
      </p>
      <p className="my-1 text-xs lg:text-base"> {yearsCity} </p>
      <div className=" py-1">
        <p className="my-1 text-xs lg:text-base">
          {" "}
          <strong> {languageTitle} : </strong>{" "}
        </p>
        <p className="my-1 text-xs lg:text-base"> {spokenLanguages}</p>
      </div>
      <div>
        <p className="my-1 text-xs lg:text-base">
          {" "}
          <strong> {searchFor} : </strong>{" "}
        </p>
        <p className="my-1 text-xs lg:text-base"> {partial} </p>
        <p className="my-1 text-xs lg:text-base"> {distance} </p>
      </div>
      <div className="self-center py-4 px-4 ">
        <a
          href="/path/to/your-cv.pdf"
          download
          className="text-xs lg:text-base"
        >
          <Button
            label={downloadCV}
            bgColor="#12F7D6"
            textColor="#292F36"
            bgHoverColor="#292F36"
            textHoverColor="#FFFFFF"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
