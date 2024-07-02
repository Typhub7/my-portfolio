import React, { useState, useEffect } from 'react';

const TypedText = ({ phrase, initialDelay }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const animateText = () => {
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex <= phrase.length) {
          setCurrentText(phrase.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Vitesse de frappe (100ms)

      return () => clearInterval(interval);
    };

    const timeout = setTimeout(() => {
      animateText();
    }, initialDelay);

    return () => {
      clearTimeout(timeout);
      setCurrentText(''); // Réinitialise le texte à la démontage
    };

  }, [phrase, initialDelay]);

  return (
    <div className="text-xl text-white font-mono">
      {currentText}
    </div>
  );
};

export default TypedText;