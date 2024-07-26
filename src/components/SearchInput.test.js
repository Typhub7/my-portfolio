import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from './SearchInput'; 

describe('SearchInput Component', () => {
  test('renders the SearchInput component correctly', () => {
    render(<SearchInput />);

    // Vérifie que le composant est correctement rendu
    const input = screen.getByPlaceholderText('Rechercher...');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('updates the input value when typing', () => {
    render(<SearchInput />);

    const input = screen.getByPlaceholderText('Rechercher...');

    // Simule la saisie de texte dans l'input
    fireEvent.change(input, { target: { value: 'test query' } });

    // Vérifie que la valeur de l'input a été mise à jour
    expect(input.value).toBe('test query');
  });

  test('calls onSearch with the input value when the search button is clicked', () => {
    const mockOnSearch = jest.fn();
    render(<SearchInput onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Rechercher...');
    const button = screen.getByRole('button');

    // Simule la saisie de texte dans l'input
    fireEvent.change(input, { target: { value: 'test query' } });

    // Simule le clic sur le bouton de recherche
    fireEvent.click(button);

    // Vérifie que la fonction onSearch a été appelée avec la bonne valeur
    expect(mockOnSearch).toHaveBeenCalledWith('test query');
  });
});