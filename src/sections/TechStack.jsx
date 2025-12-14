import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiCplusplus, SiPhp, SiMysql } from 'react-icons/si';

const techs = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Php", icon: <SiPhp className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const TechStack = () => {
  return (
    <section className="px-4 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="bg-[#111] p-3 flex justify-between items-center border-b border-white/5">
          <div className="flex gap-2 ml-2"><div className="w-3 h-3 rounded-full bg-zinc-700"></div></div>
          <div className="text-xs font-mono text-gray-500 opacity-70">root@server:~/skills# npm list</div>
          <div className="w-10"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {techs.map((tech, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="flex items-center gap-3 p-4 rounded border border-white/5 bg-transparent transition-all cursor-default"
            >
              <div className="text-2xl">{tech.icon}</div>
              <span className="font-mono text-sm font-bold text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStack;