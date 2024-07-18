import React from 'react';
import Header from './pages/Header';
import HowAmIPage from './pages/HowAmI';
import FloatingMenu from './components/FloatingMenu';
import About from './pages/About';
import ProjectPage from './pages/Project';
import SoftSkills from './pages/SoftSkills';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <FloatingMenu />
      <Header />
      <HowAmIPage />
      <About />
      <ProjectPage />
      <SoftSkills />

      <Contact />
      
    </div>
  );
}

export default App;

/*
      
      <Skills />
      */
