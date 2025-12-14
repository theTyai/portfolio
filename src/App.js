import React, { useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Competitive from './sections/Competitive';
import Projects from './sections/Projects';
import Socials from './sections/Socials';

function App() {
  useEffect(() => {
    // Dynamic Title Tab
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "🚫 System Offline..." : "theTyai | Ashish Mishra";
    };
    
    // Set initial title
    document.title = "theTyai | Ashish Mishra";
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 font-sans selection:bg-green-500/30 selection:text-green-200 relative overflow-x-hidden">
      
      {/* --- GLOBAL ANIMATED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-500/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] opacity-50"></div>
      </div>

      {/* --- SCROLLABLE CONTENT --- */}
      {/* Reduced gap-24 to gap-16 for tighter feel */}
      <div className="relative z-10 flex flex-col gap-16 md:gap-24 pb-20">
        <Hero />
        <About />
        <TechStack />
        <Competitive />
        <Projects />
        <Socials />
      </div>

    </div>
  );
}

export default App;