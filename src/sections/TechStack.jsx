import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs } from 'react-icons/si';

const techs = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20 px-4 flex justify-center bg-[#050505] relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl bg-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#111] p-3 flex justify-between items-center border-b border-white/5">
          <div className="flex gap-2 ml-2">
             <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
             <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          </div>
          <div className="text-xs font-mono text-gray-500">npm list --depth=0</div>
          <div className="w-10"></div>
        </div>

        {/* Grid Content */}
        <div className="p-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {techs.map((tech, idx) => (
               <div key={idx} className="flex flex-col items-center justify-center p-6 bg-[#111] rounded border border-white/5 hover:border-green-500/30 hover:bg-[#161616] transition-all group cursor-pointer">
                 <div className="text-4xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                   {tech.icon}
                 </div>
                 <span className="font-mono text-xs text-gray-500 group-hover:text-green-400">{tech.name}</span>
               </div>
             ))}
           </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;