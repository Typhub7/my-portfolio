import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ContactCard from './ContactCard';

test('renders the ContactCard component', () => {
  render(<ContactCard />);

  // Vérifie que le titre est rendu
  expect(screen.getByText('Contact')).toBeInTheDocument();

  // Vérifie que l'email est rendu avec le bon texte et le bon lien
  expect(screen.getByText('Email:')).toBeInTheDocument();
  expect(screen.getByText('drevon.caroline@gmail.com')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'drevon.caroline@gmail.com' })).toHaveAttribute('href', 'mailto:drevon.caroline@gmail.com');

  // Vérifie que la région est rendue
  expect(screen.getByText('Région:')).toBeInTheDocument();
  expect(screen.getByText('Auvergne-Rhone-Alpes')).toBeInTheDocument();

  // Vérifie que la ville est rendue
  expect(screen.getByText('Ville:')).toBeInTheDocument();
  expect(screen.getByText('Meyrieu-les-étangs')).toBeInTheDocument();

  // Vérifie que la recherche est rendue
  expect(screen.getByText('Recherche:')).toBeInTheDocument();
  expect(screen.getByText('Développeur Front-end')).toBeInTheDocument();

  // Vérifie que le bouton de téléchargement du CV est rendu avec le bon lien
  expect(screen.getByRole('link', { name: /Télécharger CV/i })).toHaveAttribute('href', '/path/to/your-cv.pdf');
});