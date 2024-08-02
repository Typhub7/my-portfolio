import React from "react";
import caroPhoto from "../assets/caro.png";

const WelcomeAnimation = () => {
  return (
    <div className="flex items-center justify-center w-48 lg:w-72 ">
      <img src={caroPhoto} alt="Caroline Drevon" />
    </div>
  );
};

export default WelcomeAnimation;
