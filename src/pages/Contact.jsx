import React from "react";
import Button from "../components/OvaleButton";
import MouseDown from "../components/MouseDown";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-16 pt-16 pb-4 px-0 bg-bg2 relative">
      <div className="flex justify-center items-center">
        <MouseDown mouseColor="#12F7D6" />
      </div>
      <h2 className="text-main1 font-sans text-6xl">Contact</h2>
      <div className="inline-flex flex-col items-center px-10 py-4 text-main1 text-2xl font-mono rounded-[32px_0px_32px_0px] border-2 border-solid border-main1">
        Envoyez moi un message
      </div>
      <div className="flex flex-col gap-16 px-[400px] py-0 w-full">
        <div className="flex flex-col md:flex-row gap-32 w-full">
          <div className="flex flex-col gap-6 flex-1">
            <label className="text-main1 text-2xl font-mono" htmlFor="name">Votre Nom *</label>
            <input
              className="text-white bg-transparent border-none p-0"
              placeholder="Saisissez votre nom"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <label className="text-main1 text-2xl font-mono" htmlFor="email">Votre Email *</label>
            <input
              className="text-white bg-transparent border-none p-0"
              placeholder="Saisissez votre email"
              type="email"
              id="email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <label className="text-main1 text-2xl font-mono" htmlFor="message">Votre message</label>
          <input
            className="text-white bg-transparent border-none p-0"
            placeholder="Saissisez votre message"
            type="text"
            id="message"
          />
        </div>
      </div>
      <Button
        label="Envoyer le message"
        bgColor="#12F7D6"
        textColor="#292F36"
        bgHoverColor="#292F36"
        textHoverColor="#FFFFFF"
      />
    </div>
  );
};

export default Contact;