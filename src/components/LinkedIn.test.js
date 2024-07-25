import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import LinkedIn from './LinkedIn'; 

test('renders the LinkedIn component', () => {
    render(<LinkedIn />);

    // Vérifie que le lien est rendu avec le texte "Mon LinkedIn"
    const linkElement = screen.getByRole('link', { name: /Mon LinkedIn/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://www.linkedin.com/in/ton-profil/');
    expect(linkElement).toHaveStyle('color: black');
    });

test('renders the LinkedIn component with custom color', () => {
  render(<LinkedIn color="blue" />);

  // Vérifie que le lien est rendu avec la couleur personnalisée
  const linkElement = screen.getByRole('link', { name: /Mon LinkedIn/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveStyle('color: blue');
});

test('renders the LinkedIn component with an icon', () => {
  render(<LinkedIn />);

  // Vérifie que l'icône FontAwesome est rendue
  const iconElement = screen.getByRole('img', { hidden: true }); // FontAwesome utilise des rôles d'image cachés pour les icônes
  expect(iconElement).toBeInTheDocument();
});