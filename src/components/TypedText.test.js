import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TypedText from './TypedText'; 

describe('TypedText Component', () => {
  test('renders and animates text correctly', async () => {
    const phrase = 'Hello World';
    const initialDelay = 500; // Délai avant le début de l’animation

    render(<TypedText phrase={phrase} initialDelay={initialDelay} />);

    // Attends que le texte complet soit affiché
    await waitFor(() => {
      expect(screen.getByText(phrase)).toBeInTheDocument();
    }, { timeout: initialDelay + phrase.length * 100 + 500 }); // Délai initial + durée de l'animation + un petit buffer pour les délais
  });

  test('does not display text before the initial delay', async () => {
    const phrase = 'Hello World';
    const initialDelay = 500; // Délai avant le début de l’animation

    render(<TypedText phrase={phrase} initialDelay={initialDelay} />);

    // Attends un peu moins que le délai initial pour vérifier que le texte n'est pas encore affiché
    await waitFor(() => {
      expect(screen.queryByText(phrase)).not.toBeInTheDocument();
    }, { timeout: initialDelay - 100 }); // Attends juste avant le délai initial
  });
});