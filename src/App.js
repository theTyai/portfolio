import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Competitive from './sections/Competitive'; // New Import
import Projects from './sections/Projects';
import Socials from './sections/Socials';

function App() {
  return (
    <div className="bg-bg-dark min-h-screen text-slate-200">
      <Hero />
      <About />
      <TechStack />
      <Competitive /> {/* Added here */}
      <Projects />
      <Socials />
    </div>
  );
}

export default App;