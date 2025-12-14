import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Socials = () => {
  return (
    <section id="contact" className="py-20 px-4 flex justify-center bg-[#050505] relative z-10 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-8 font-mono">
          <span className="text-green-500">sudo</span> initiate_handshake
        </h2>
        
        <div className="flex justify-center gap-8 mb-12">
          {[
            { icon: <FaGithub />, link: "https://github.com" },
            { icon: <FaLinkedin />, link: "https://linkedin.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
            { icon: <FaEnvelope />, link: "mailto:your@email.com" },
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-500 hover:text-green-500 text-3xl transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="font-mono text-xs text-gray-600 space-y-2">
          <p>Process finished with exit code 0</p>
          <p>© 2025 Saumya Khushlani. All systems operational.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Socials;