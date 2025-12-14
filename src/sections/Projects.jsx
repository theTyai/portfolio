import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaStar, FaCodeBranch } from 'react-icons/fa';

const projects = [
  {
    title: "ETHUNT",
    desc: "CLI tool for real-time analysis of encrypted VoIP traffic (STUN, RTP/SRTP, DTLS).",
    stack: ["Python", "Scapy", "Rich", "Networking"],
    stars: 0,
    forks: 0,
    git: "https://github.com/theTyai/ETHUNT",
    live: "https://github.com/theTyai/ETHUNT"
  },
  {
    title: "SANSKRITIYAM",
    desc: "E-commerce platform for puja services with Razorpay payments and user tracking.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Razorpay"],
    stars: 0,
    forks: 0,
    git: "https://sanskritiyam.com",
    live: "https://sanskritiyam.com"
  }
];


const Projects = () => {
  return (
    <section className="px-4 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="bg-[#111] p-3 flex justify-between items-center border-b border-white/5">
          <div className="flex gap-2 ml-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          </div>
          <div className="text-xs font-mono text-gray-500 opacity-70">ls -la ./projects/</div>
          <div className="w-10"></div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="group bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <FaFolder className="text-gray-400 group-hover:text-green-400 transition-colors text-xl" />
                  <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors font-mono">{project.title}</h3>
                </div>
                <div className="flex gap-3 text-gray-500">
                  <a href={project.git} className="hover:text-white"><FaGithub size={18} /></a>
                  <a href={project.live} className="hover:text-white"><FaExternalLinkAlt size={16} /></a>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-6 font-sans flex-1">{project.desc}</p>

              <div className="space-y-4">
                <div className="flex gap-4 text-xs font-mono text-gray-500">
                  <span className="flex items-center gap-1 hover:text-yellow-400"><FaStar /> {project.stars}</span>
                  <span className="flex items-center gap-1 hover:text-blue-400"><FaCodeBranch /> {project.forks}</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;