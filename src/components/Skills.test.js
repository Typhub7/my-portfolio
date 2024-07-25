import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from './Skills'; // Assure-toi que ce chemin est correct

describe('Skills Component', () => {
  test('renders all skill logos with correct src and alt text', () => {
    render(<Skills />);

    const skillLogos = [
      { name: 'JavaScript', src: 'js.png', alt: 'JavaScript' }, // Assure-toi que src correspond au nom du fichier
      { name: 'TypeScript', src: 'typescript.png', alt: 'TypeScript' },
      { name: 'React', src: 'react.png', alt: 'React' },
      { name: 'HTML', src: 'html.png', alt: 'HTML' },
      { name: 'CSS', src: 'css.png', alt: 'CSS' },
      { name: 'Sass', src: 'sass.png', alt: 'Sass' },
      { name: 'Tailwind', src: 'tailwind.png', alt: 'Tailwind' },
      { name: 'Redux', src: 'redux.png', alt: 'Redux' },
      { name: 'API', src: 'api.png', alt: 'API' },
      { name: 'Jest', src: 'jest.png', alt: 'Jest' },
      { name: 'Cypress', src: 'cypress.png', alt: 'Cypress' }
    ];

    skillLogos.forEach(skill => {
      const img = screen.getByAltText(skill.alt);
      expect(img).toBeInTheDocument();
      // Assure-toi que src contient le nom du fichier attendu
      expect(img).toHaveAttribute('src', expect.stringContaining(skill.src));
    });
  });
});
