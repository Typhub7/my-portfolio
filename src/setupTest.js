import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { LanguageProvider } from './context/LanguageContext'; 

const renderWithLanguageProvider = (ui, { providerProps, ...renderOptions } = {}) => {
  return render(
    <LanguageProvider {...providerProps}>
      {ui}
    </LanguageProvider>,
    renderOptions
  );
};

export * from '@testing-library/react';
export { renderWithLanguageProvider as render };