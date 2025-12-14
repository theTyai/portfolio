import React, { useState, useEffect } from 'react';
import { FaTerminal, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '~/home', href: '#home' },
    { name: './about', href: '#about' },
    { name: './skills', href: '#skills' },
    { name: './projects', href: '#projects' },
    { name: './contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center font-mono">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-green-400 font-bold text-lg hover:text-white transition-colors">
          <FaTerminal size={18} />
          <span>saumya.dev</span>
          <span className="animate-pulse">_</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-green-400 hover:bg-white/5 px-3 py-1 rounded transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-300" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-green-400 py-2 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;