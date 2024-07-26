import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Github from './Github';

test('renders the Github component with default color', () => {
  render(<Github />);

  // Vérifie que le lien est rendu avec le texte "Mon Github"
  const linkElement = screen.getByRole('link', { name: /Mon Github/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://github.com/Typhub7/');
  expect(linkElement).toHaveStyle('color: black');
});

test('renders the Github component with custom color', () => {
  render(<Github color="blue" />);

  // Vérifie que le lien est rendu avec la couleur personnalisée
  const linkElement = screen.getByRole('link', { name: /Mon Github/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveStyle('color: blue');
});

test('renders the Github component with an icon', () => {
  render(<Github />);

  // Vérifie que l'icône FontAwesome est rendue
  const iconElement = screen.getByRole('img', { hidden: true }); // FontAwesome utilise des rôles d'image cachés pour les icônes
  expect(iconElement).toBeInTheDocument();
});