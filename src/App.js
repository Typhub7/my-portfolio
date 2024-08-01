import React from 'react';
import Header from './pages/Header';
import HowAmIPage from './pages/HowAmI';
import FloatingMenu from './components/FloatingMenu';
import About from './pages/About';
import ProjectPage from './pages/Project';
import SoftSkills from './pages/SoftSkills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <FloatingMenu />
      <Header />
      <HowAmIPage />
      <About />
      <ProjectPage />
      <SoftSkills />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
