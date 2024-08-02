import React, { useState } from "react";
import Button from "../components/OvaleButton";
import LineWithDots from "../helpers/lineWithDots";
import emailjs from "emailjs-com";
import {
  validateName,
  validateEmail,
  validateMessage,
} from "../components/validation";
import { useLanguage } from "../context/LanguageContext";

const ConfirmationPopup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
      <p className="text-lg text-gray-700 mb-4">{message}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-main1 text-white rounded-md hover:bg-main2"
      >
        OK
      </button>
    </div>
  </div>
);

const translations = {
  fr: {
    contact: "Contact",
    infoRequest: "Demande d'informations",
    yourName: "Votre Nom :",
    yourEmail: "Votre Email :",
    yourMessage: "Votre message :",
    sendMessage: "Envoyer le message",
    emailSent: "Email envoyé avec succès !",
    emailFailed: "Échec de l'envoi de l'email.",
    namePlaceholder: "Saisissez votre nom",
    emailPlaceholder: "Saisissez votre email",
    messagePlaceholder: "Saisissez votre message",
    invalidName:
      "Nom invalide. Veuillez utiliser uniquement des lettres et des espaces.",
    invalidEmail: "Adresse e-mail invalide.",
    invalidMessage:
      "Message invalide. Veuillez utiliser uniquement des caractères valides et limiter la longueur à 2000 caractères.",
  },
  en: {
    contact: "Contact",
    infoRequest: "Information Request",
    yourName: "Your Name:",
    yourEmail: "Your Email:",
    yourMessage: "Your message:",
    sendMessage: "Send Message",
    emailSent: "Email sent successfully!",
    emailFailed: "Failed to send email.",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    messagePlaceholder: "Enter your message",
    invalidName: "Invalid name. Please use only letters and spaces.",
    invalidEmail: "Invalid email address.",
    invalidMessage:
      "Invalid message. Please use only valid characters and limit the length to 2000.",
  },
};

export const Contact = () => {
  const { language } = useLanguage();
  const texts = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    let error = "";

    switch (id) {
      case "name":
        if (!validateName(value)) {
          error = texts.invalidName;
        }
        break;
      case "email":
        if (!validateEmail(value)) {
          error = texts.invalidEmail;
        }
        break;
      case "message":
        if (!validateMessage(value)) {
          error = texts.invalidMessage;
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const newErrors = {
      name: validateName(name) ? "" : texts.invalidName,
      email: validateEmail(email) ? "" : texts.invalidEmail,
      message: validateMessage(message) ? "" : texts.invalidMessage,
    };

    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .send(
        "service_7uerm57",
        "template_tyy25b8",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "FNvpnWKN__qjGeIA4"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setPopupMessage(texts.emailSent);
          setShowPopup(true);
        },
        (error) => {
          console.log("FAILED...", error);
          setPopupMessage(texts.emailFailed);
          setShowPopup(true);
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center gap-16 pt-8 lg:pt-16 px-0 bg-bg2 relative">
      {showPopup && (
        <ConfirmationPopup message={popupMessage} onClose={closePopup} />
      )}
      <div className="flex flex-col justify-center items-center">
        <div id="contact"></div>
        <h2 className="text-main1 font-sans text-2xl md:text-4xl lg:text-6xl my-2 lg:my-6">
          {texts.contact}
        </h2>
        <LineWithDots />
      </div>

      <div className="inline-flex flex-col items-center px-10 py-4 text-main1 text-base md:text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-main1">
        {texts.infoRequest}
      </div>
      <form
        className="flex flex-col gap-4 lg:gap-12 mb-0 lg:mb-10 w-4/5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-6 flex-1 p-2">
            <label
              className="text-main1 text-base lg:text-2xl font-mono"
              htmlFor="name"
            >
              {texts.yourName}
            </label>
            <input
              className={`text-white bg-bg1 md:bg-transparent border- mg:border-0 rounded-md p-2 w-full placeholder-gray-200 ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder={texts.namePlaceholder}
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col gap-6 flex-1 p-2">
            <label
              className="text-main1 text-base lg:text-2xl font-mono"
              htmlFor="email"
            >
              {texts.yourEmail}
            </label>
            <input
              className={`text-white bg-bg1 md:bg-transparent border- mg:border-0 rounded-md p-2 w-full placeholder-gray-300 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder={texts.emailPlaceholder}
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full p-2">
          <label
            className="text-main1 text-base lg:text-2xl font-mono"
            htmlFor="message"
          >
            {texts.yourMessage}
          </label>
          <textarea
            className={`text-white bg-bg1 md:bg-transparent border- mg:border-0 rounded-md p-2 w-full resize-none placeholder-gray-300 ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder={texts.messagePlaceholder}
            id="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="10"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <div className="self-center">
          <Button
            label={texts.sendMessage}
            bgColor="#12F7D6"
            textColor="#292F36"
            bgHoverColor="#292F36"
            textHoverColor="#FFFFFF"
          />
        </div>
      </form>
      <div className="w-screen">
        <svg
          preserveAspectRatio="xMidYMax meet"
          className="svg-separator sep3"
          viewBox="0 0 1600 100"
          style={{ display: "block" }}
          data-height="100"
        >
          <path
            style={{ opacity: 1, fill: "#22313f" }}
            d="M-40,71.627C20.307,71.627,20.058,32,80,32s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,26H-60V72L-40,71.627z"
          />
          <path
            style={{ opacity: 1, fill: "#1A1E23" }}
            d="M-40,83.627C20.307,83.627,20.058,44,80,44s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,14H-60V84L-40,83.627z"
          />
          <path
            style={{ fill: "#292F36" }}
            d="M-40,95.627C20.307,95.627,20.058,56,80,56s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,138H-60V96L-40,95.627z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Contact;
