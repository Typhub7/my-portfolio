import React, { useState } from "react";
import Button from "../components/OvaleButton";
import LineWithDots from "../helpers/lineWithDots";
import emailjs from 'emailjs-com';
import { validateName, validateEmail, validateMessage } from '../components/validation';

const ConfirmationPopup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
      <p className="text-lg text-gray-700 mb-4">{message}</p>
      <button onClick={onClose} className="px-4 py-2 bg-main1 text-white rounded-md hover:bg-main2">OK</button>
    </div>
  </div>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!validateName(name)) {
      alert('Invalid name. Please use only letters and spaces.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Invalid email address.');
      return;
    }

    if (!validateMessage(message)) {
      alert('Invalid message. Please use only valid characters and limit the length to 500.');
      return;
    }

    emailjs.send("service_7uerm57", "template_tyy25b8", {
      from_name: name,
      from_email: email,
      message: message
    }, "FNvpnWKN__qjGeIA4")
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setPopupMessage('Email sent successfully!');
      setShowPopup(true);
    }, (error) => {
      console.log('FAILED...', error);
      setPopupMessage('Failed to send email.');
      setShowPopup(true);
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center gap-16 pt-8 lg:pt-16 px-0 bg-bg2 relative">
      {showPopup && <ConfirmationPopup message={popupMessage} onClose={closePopup} />}
      <div className="flex flex-col justify-center items-center">
        <div id="contact"></div>
        <h2 className="text-main1 font-sans text-2xl md:text-4xl lg:text-6xl my-2 lg:my-6">Contact</h2>
        <LineWithDots />
      </div>

      <div className="inline-flex flex-col items-center px-10 py-4 text-main1 text-base md:text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-main1">
        Demande d'informations
      </div>
      <form className="flex flex-col gap-4 lg:gap-12 mb-6 lg:mb-10 w-4/5" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col gap-6 flex-1 p-2">
            <label className="text-main1 text-base lg:text-2xl font-mono" htmlFor="name">Votre Nom :</label>
            <input
              className="text-white bg-bg1 md:bg-transparent border- mg:border-0  rounded-md p-2 w-full placeholder-gray-200"
              placeholder="Saisissez votre nom"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-6 flex-1 p-2">
            <label className="text-main1 text-base lg:text-2xl font-mono" htmlFor="email">Votre Email :</label>
            <input
              className="text-white bg-bg1 md:bg-transparent border- mg:border-0  rounded-md p-2 w-full placeholder-gray-300"
              placeholder="Saisissez votre email"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full p-2">
          <label className="text-main1 text-base lg:text-2xl font-mono" htmlFor="message">Votre message :</label>
          <textarea
            className="text-white bg-bg1 md:bg-transparent border- mg:border-0  rounded-md p-2 w-full resize-none placeholder-gray-300"
            placeholder="Saisissez votre message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="10"
          />
        </div>
        <div className="self-center ">
          <Button
            label="Envoyer le message"
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
          style={{ display: 'block' }} 
          data-height="100"
        >
          <path 
            style={{ opacity: 1, fill: '#22313f' }} 
            d="M-40,71.627C20.307,71.627,20.058,32,80,32s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,26H-60V72L-40,71.627z"
          />
          <path 
            style={{ opacity: 1, fill: '#1A1E23' }} 
            d="M-40,83.627C20.307,83.627,20.058,44,80,44s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,14H-60V84L-40,83.627z"
          />
          <path 
            style={{ fill: '#292F36' }} 
            d="M-40,95.627C20.307,95.627,20.058,56,80,56s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,138H-60V96L-40,95.627z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Contact;
