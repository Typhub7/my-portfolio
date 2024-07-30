import React from 'react';

const ContactCard = () => {
  return (
    <div className='text-white'>
      <h2 className="text-base lg:text-2xl font-bold mb-4">Contact</h2>
      <p className='my-1 text-xs lg:text-base'><strong>Email: </strong> <a href="mailto:drevon.caroline@gmail.com">drevon.caroline@gmail.com</a></p>
      <p className='my-1 text-xs lg:text-base'><strong>Région:</strong> Auvergne-Rhone-Alpes</p>
      <p className='my-1 text-xs lg:text-base'><strong>Ville:</strong> Meyrieu-les-étangs</p>
      <p className='my-1 text-xs lg:text-base'><strong>Recherche:</strong> Développeur Front-end</p>
      <a href="/path/to/your-cv.pdf" download className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded text-xs lg:text-base">
        Télécharger CV
      </a>
    </div>
  );
};

export default ContactCard;