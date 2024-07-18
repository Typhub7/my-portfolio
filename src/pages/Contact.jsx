import React, { useState } from "react";
import Button from "../components/OvaleButton";
import MouseDown from "../components/MouseDown";
import LineWithDots from "../helpers/lineWithDots";
import emailjs from 'emailjs-com';
import { validateName, validateEmail, validateMessage } from '../components/validation';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: name,
      from_email: email,
      message: message
    }, "YOUR_USER_ID")
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send email.');
    });
  };

  return (
    <div id="contact" className="flex flex-col items-center gap-16 pt-16 pb-4 px-0 bg-bg2 relative">
      <div className="flex flex-col justify-center items-center">
        <MouseDown mouseColor="#12F7D6" />
        <h2 className="text-main1 font-sans text-6xl my-6">Contact</h2>
        <LineWithDots width="250" />
      </div>

      <div className="inline-flex flex-col items-center px-10 py-4 text-main1 text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-main1">
        Envoyez moi un message
      </div>
      <form className="flex flex-col gap-16 px-[400px] py-0 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-32 w-full">
          <div className="flex flex-col gap-6 flex-1">
            <label className="text-main1 text-2xl font-mono" htmlFor="name">Votre Nom *</label>
            <input
              className="text-white bg-transparent border-none p-0"
              placeholder="Saisissez votre nom"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <label className="text-main1 text-2xl font-mono" htmlFor="email">Votre Email *</label>
            <input
              className="text-white bg-transparent border-none p-0"
              placeholder="Saisissez votre email"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <label className="text-main1 text-2xl font-mono" htmlFor="message">Votre message</label>
          <textarea
            className="text-white bg-transparent border-none p-0 h-40 resize-none"
            placeholder="Saisissez votre message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="10"
          />
        </div>
        <Button
          label="Envoyer le message"
          bgColor="#12F7D6"
          textColor="#292F36"
          bgHoverColor="#292F36"
          textHoverColor="#FFFFFF"
        />
      </form>
    </div>
  );
};

export default Contact;