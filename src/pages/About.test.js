import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './About';
import '@testing-library/jest-dom'




describe('Contact Page', () => {
  test('renders Contact component correctly', () => {
    render(<Contact />);

    // Vérifie si le titre "Qui suis-je ?" est rendu
    expect(screen.getByText(/Qui suis-je ?/i)).toBeInTheDocument();

    // Vérifie si le texte dans le premier bloc de contenu est présent
    expect(screen.getByText(/Je suis une développeuse junior /i)).toBeInTheDocument();
    
  });

});