import React from 'react';
import { FaTerminal } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-sm">
        
        {/* Left: "File Path" Logo */}
        <div className="flex items-center gap-2 text-green-500">
          <FaTerminal />
          <span className="text-gray-400">~/portfolio/</span>
          <span className="text-white font-bold">main.tsx</span>
        </div>

        {/* Right: "Editor Tabs" Links */}
        <div className="hidden md:flex gap-6">
          {['<Home />', '<Skills />', '<Projects />', '<Contact />'].map((item) => (
            <a 
              key={item} 
              href={`#${item.replace(/[</>]/g, '').toLowerCase()}`} 
              className="text-gray-500 hover:text-green-400 transition-colors cursor-pointer hover:bg-white/5 px-2 py-1 rounded"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;