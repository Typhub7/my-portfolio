import React from 'react';
import { render, screen } from '../setupTest.js';
import '@testing-library/jest-dom'
import ContactCard from './ContactCard';

test('renders the ContactCard component', () => {
  const providerProps = {
    value: {
      language: 'fr',
      toggleLanguage: jest.fn(),
    },
  };
  render(<ContactCard />, { providerProps });



  // Vérifie que l'email est rendu avec le bon texte et le bon lien
  expect(screen.getByText('drevon.caroline@gmail.com')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'drevon.caroline@gmail.com' })).toHaveAttribute('href', 'mailto:drevon.caroline@gmail.com');

});