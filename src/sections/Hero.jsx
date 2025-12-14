import React, { useState } from 'react'; // Added useState here
import { motion } from 'framer-motion';
import { FaGithub, FaCopy, FaCheck } from 'react-icons/fa'; // Removed FaLinkedin, FaTwitter
import { SiLeetcode } from 'react-icons/si';
import { GoVerified } from 'react-icons/go';
import { useTypewriter } from '../hooks/useTypewriter'; 
import profile from '../assets/cp.jpg'; 
const Hero = () => {
  const roles = ["Full Stack Developer", "Competitive Programmer", "Ethical Hacker"];
  const typewrittenText = useTypewriter(roles);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("your.email@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="min-h-screen bg-[#050505] flex justify-center items-center p-4 relative pt-20">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,255,65,0.05)] relative z-10"
      >
        
        {/* --- 1. Terminal Header --- */}
        <div className="bg-[#111] p-3 flex justify-between items-center border-b border-white/5">
          <div className="flex gap-2 ml-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-xs font-mono text-gray-500">user@dev-machine: ~</div>
          <div className="w-10"></div> {/* Spacer */}
        </div>

        {/* --- 2. Content Area --- */}
        <div className="p-8 md:p-12 relative overflow-hidden">
          
          {/* Decorative watermark */}
          <div className="absolute top-10 right-10 opacity-10 font-mono text-9xl font-bold text-green-500 select-none pointer-events-none">
            DEV
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            
            {/* Avatar with Ring */}
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-green-500/30 p-1 group-hover:border-green-400 transition-colors">
                <img 
                  src={profile} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-black rounded-full text-blue-400 text-xl">
                 <GoVerified />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                Ashish Mishra
              </h1>
              
              {/* Typewriter Terminal Style */}
              <div className="font-mono text-green-400 mb-6 bg-green-500/5 inline-block px-3 py-1 rounded border border-green-500/20">
                $ {typewrittenText}<span className="animate-pulse">_</span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
                <span className="text-purple-400">class</span> <span className="text-yellow-300">Developer</span> <span className="text-white">{`{`}</span> <br/>
                &nbsp;&nbsp;Building accessible, pixel-perfect, and performant web experiences. 
                Focusing on <span className="text-white">Security</span> & <span className="text-white">Scalability</span>.
                <br/><span className="text-white">{`}`}</span>
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 font-mono text-sm text-gray-400 border-t border-white/5 pt-6">
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <SiLeetcode className="text-yellow-500" /> <span>500+ Solved</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <FaGithub className="text-white" /> <span>180+ Commits</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <span className="text-blue-400">★</span> <span>7+ Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8 justify-center md:justify-end">
             <button className="font-mono text-sm bg-white text-black px-6 py-3 rounded hover:bg-green-400 hover:scale-105 transition-all font-bold">
               ./download_cv.sh
             </button>
             <button onClick={handleCopy} className="font-mono text-sm border border-white/20 text-white px-6 py-3 rounded hover:border-green-500 hover:text-green-500 transition-all flex items-center gap-2">
               {copied ? <FaCheck /> : <FaCopy />} {copied ? "COPIED" : "cp email"}
             </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;