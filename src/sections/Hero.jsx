import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCopy, FaCheck, FaCode} from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import { useTypewriter } from '../hooks/useTypewriter'; 
import Profile from '../assets/cp.jpg';
import Resume from '../assets/Ashish_Resume.pdf';

const Hero = () => {
  const roles = ["Full Stack Developer", "Competitive Programmer", "Ethical Hacker"];
  const typewrittenText = useTypewriter(roles);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("work.mishraashish@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="min-h-screen flex justify-center items-center p-4 relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,255,65,0.05)] relative z-10"
      >
        
        {/* Terminal Header */}
        <div className="bg-[#111] p-3 flex justify-between items-center border-b border-white/5 select-none">
          <div className="flex gap-2 ml-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-green-500/50"></div>
          </div>
          {/* Updated Handle */}
          <div className="text-[10px] md:text-xs font-mono text-gray-1000 flex items-center gap-1 opacity-70">
            <span className="text-green-500">➜</span> theTyai@dev-machine: ~
          </div>
          <div className="w-10"></div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-14 relative overflow-hidden">
          
          <div className="absolute top-4 right-8 opacity-[0.03] font-mono text-9xl font-bold text-white select-none pointer-events-none">
            theTyai
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
            
            {/* Avatar */}
            <div className="relative group">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-green-500/30 p-1 group-hover:border-green-400 transition-colors relative overflow-hidden">
                <img 
                  src={Profile}
                  alt="Ashish Mishra" 
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 bg-[#151515]"
                />
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute left-0 w-full h-[1px] bg-green-400/80 shadow-[0_0_15px_#00ff41] opacity-0 group-hover:opacity-100 pointer-events-none"
                />
              </div>
              <div className="absolute bottom-3 right-3 bg-black rounded-full text-blue-400 text-xl border border-black z-20">
                 <GoVerified />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              {/* Updated Name */}
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tighter"
                whileHover={{ textShadow: "0px 0px 8px rgba(255,255,255,0.5)" }}
              >
                Ashish Mishra
              </motion.h1>
              
              <div className="font-mono text-sm md:text-base text-green-400 mb-6 bg-green-500/5 inline-block px-4 py-1.5 rounded border border-green-500/20">
                $ {typewrittenText}<span className="animate-pulse">_</span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 font-sans text-sm md:text-base">
                <span className="text-purple-400 font-mono">class</span> <span className="text-yellow-300 font-mono">theTyai</span> <span className="text-white">{`{`}</span> <br/>
                &nbsp;&nbsp;Architecting secure, scalable systems. Bridging <span className="text-gray-200">backend complexity</span> with <span className="text-gray-200">frontend elegance</span>.
                <br/><span className="text-white">{`}`}</span>
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-8 font-mono text-xs md:text-sm text-gray-500 border-t border-white/5 pt-6">
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <FaCode className="text-yellow-600 group-hover:text-yellow-500 transition-colors text-lg" />
                  <span>200+ Solved</span>
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <FaGithub className="text-gray-400 group-hover:text-white transition-colors text-lg" /> 
                  <span>180+ Commits</span>
                </a>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 justify-center md:justify-end">
             <motion.a 
               href={Resume} 
               whileHover={{ scale: 1.02 }} 
               whileTap={{ scale: 0.98 }} 
               className="font-mono text-sm bg-white text-black px-6 py-3 rounded hover:bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all font-bold cursor-pointer"
             >
               ./download_cv.sh
             </motion.a>
             
             <motion.button 
               onClick={handleCopy} 
               whileHover={{ scale: 1.02 }} 
               whileTap={{ scale: 0.98 }} 
               className="font-mono text-sm border border-white/20 text-white px-6 py-3 rounded hover:border-green-500 hover:text-green-500 transition-all flex items-center gap-2"
             >
               {copied ? <FaCheck /> : <FaCopy />} {copied ? "COPIED" : "cp email"}
             </motion.button>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;