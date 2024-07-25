import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './About';
import '@testing-library/jest-dom'
import { smoothScroll } from '../helpers/smoothScroll';

/* Mock du module smoothScroll
jest.mock('../helpers/smoothScroll', () => ({
  smoothScroll: jest.fn(),
}));*/

describe('Contact Page', () => {
  test('renders Contact component correctly', () => {
    render(<Contact />);

    // Vérifie si le titre "Qui suis-je ?" est rendu
    expect(screen.getByText(/Qui suis-je ?/i)).toBeInTheDocument();

    // Vérifie si le texte dans le premier bloc de contenu est présent
    expect(screen.getByText(/Je suis une développeuse junior /i)).toBeInTheDocument();
    
    // Vérifie si le bouton est rendu
    expect(screen.getByRole('button')).toBeInTheDocument();
    
    // Vérifie si le SVG est présent
    expect(screen.getAllByRole('img')).toHaveLength(2); // Il y a 2 SVG dans le composant
  });

  test('smoothScroll function is called when button is clicked', () => {
    render(<Contact />);

    // Simule le clic sur le bouton
    fireEvent.click(screen.getByRole('button'));

    // Vérifie si la fonction smoothScroll a été appelée avec le bon argument
    expect(smoothScroll).toHaveBeenCalledWith('#project');
  });
});