import React from 'react';

const ContactCard = () => {
  return (
    <div className='text-white'>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className='my-1'><strong>Email:</strong> <a href="mailto:drevon.caroline@gmail.com">drevon.caroline@gmail.com</a></p>
      <p className='my-1'><strong>Région:</strong> Auvergne-Rhone-Alpes</p>
      <p className='my-1'><strong>Ville:</strong> Meyrieu-les-étangs</p>
      <p className='my-1'><strong>Recherche:</strong> Développeur Front-end</p>
      <a href="/path/to/your-cv.pdf" download className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
        Télécharger CV
      </a>
    </div>
  );
};

export default ContactCard;