/*import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SunburstChart from './SunburstChart'; 

describe('SunburstChart Component', () => {
  test('renders the SVG element', () => {
    const data = {
      name: "root",
      children: [
        { name: "A", value: 10 },
        { name: "B", value: 20 },
      ]
    };

    render(<SunburstChart data={data} />);

    // Vérifie que le SVG est présent dans le document
    const svgElement = screen.getByRole('img'); // SVG n'a pas de rôle spécifique, mais on peut vérifier le tag
    expect(svgElement).toBeInTheDocument();
  });

  test('contains radial gradient definition', () => {
    const data = {
      name: "root",
      children: [
        { name: "A", value: 10 },
        { name: "B", value: 20 },
      ]
    };

    render(<SunburstChart data={data} />);

    // Vérifie que le SVG contient la définition de gradient
    const gradientElement = screen.getByTestId('grad1');
    expect(gradientElement).toBeInTheDocument();
  });
});*/