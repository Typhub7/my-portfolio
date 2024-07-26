import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatingMenu from './FloatingMenu';
import { smoothScroll } from '../helpers/smoothScroll';

jest.mock('../helpers/smoothScroll', () => ({
  smoothScroll: jest.fn(),
}));

const buttonTestIds = [
  'menu-button',
  'howami-button',
  'about-button',
  'project-button',
  'softskills-button',
  'contact-button'
];

test('renders the FloatingMenu component with all buttons', () => {
  render(<FloatingMenu />);

  // Vérifie la présence des boutons en utilisant les data-testid
  buttonTestIds.forEach(testId => {
    const button = screen.getByTestId(testId);
    expect(button).toBeInTheDocument();
  });
});

test('calls smoothScroll with correct arguments when buttons are clicked', () => {
  render(<FloatingMenu />);

  // Simule les clics sur chaque bouton et vérifie que smoothScroll est appelé avec le bon argument
  const sections = ['#menu', '#howamI', '#about', '#project', '#softskills', '#contact'];
  buttonTestIds.forEach((testId, index) => {
    const button = screen.getByTestId(testId);
    fireEvent.click(button);
    expect(smoothScroll).toHaveBeenCalledWith(sections[index]);
  });
});