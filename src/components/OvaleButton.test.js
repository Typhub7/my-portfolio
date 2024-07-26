import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Button from './OvaleButton'; 

test('renders the Button component with correct styles', () => {
  render(
    <Button
      label="Click Me"
      bgColor="blue"
      textColor="white"
      bgHoverColor="darkblue"
      textHoverColor="lightgrey"
    />
  );

  // Vérifie que le bouton est rendu avec le texte correct
  const buttonElement = screen.getByRole('button', { name: /Click Me/i });
  expect(buttonElement).toBeInTheDocument();

  // Vérifie les styles initiaux du bouton
  expect(buttonElement).toHaveStyle('background-color: blue');
  expect(buttonElement).toHaveStyle('color: white');
  expect(buttonElement).toHaveStyle('border: 2px solid blue');

  // Simule le survol du bouton
  fireEvent.mouseEnter(buttonElement);

  // Vérifie les styles du bouton lors du survol
  expect(buttonElement).toHaveStyle('background-color: darkblue');
  expect(buttonElement).toHaveStyle('color: lightgrey');
});

test('renders the Button component with default border radius', () => {
  render(<Button label="Click Me" bgColor="blue" textColor="white" />);

  // Vérifie le border radius par défaut
  const buttonElement = screen.getByRole('button', { name: /Click Me/i });
  expect(buttonElement).toHaveStyle('border-radius: 32px');
});