import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Socials = () => {
  return (
    <section className="px-4 flex justify-center pb-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl text-center font-mono"
      >
        <div className="mb-8">
           <span className="text-green-500">theTyai@dev-machine:~#</span> <span className="text-white">sudo initiate_contact</span>
        </div>
        
        <div className="flex justify-center gap-8 mb-10">
          {[
            { icon: <FaGithub />, link: "https://github.com/theTyai" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/theTyai" },
            { icon: <FaInstagram />, link: "https://instagram/theTyai" },
            { icon: <FaEnvelope />, link: "mailto:work.mishraashish@gmail.com" },
          ].map((item, i) => (
            <motion.a 
              key={i} 
              href={item.link} 
              target="_blank" 
              rel="noreferrer" 
              whileHover={{ scale: 1.2, color: "#00ff41", textShadow: "0 0 10px rgba(0,255,65,0.5)" }}
              className="text-gray-500 text-3xl transition-all duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <div className="text-xs text-gray-600 space-y-2 border-t border-white/5 pt-8 mx-auto max-w-md">
          <p className="flex justify-between"><span>> Status:</span> <span className="text-green-500">Online</span></p>
          <p className="flex justify-between mt-4 text-gray-700">
            <span>© 2025 Ashish Mishra</span>
            <span>System Operational</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Socials;