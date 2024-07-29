import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';


// Mock des composants pour éviter de tester leur logique interne
jest.mock('../components/LinkedIn', () => ({ color }) => <div data-testid="linkedin-icon" style={{ color }}></div>);
jest.mock('../components/Github', () => ({ color }) => <div data-testid="github-icon" style={{ color }}></div>);

test('renders Header component with all elements',  () => {

  render(<Header />);

  // Vérifie que les icônes LinkedIn et Github sont rendues avec la couleur correcte
  const linkedinIcon = screen.getByTestId('linkedin-icon');
  const githubIcon = screen.getByTestId('github-icon');
  
  expect(linkedinIcon).toHaveStyle('color: #12F7D6');
  expect(githubIcon).toHaveStyle('color: #12F7D6');

});