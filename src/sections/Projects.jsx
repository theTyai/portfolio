import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const projects = [
  {
    title: "Project-Alpha",
    desc: "A secure e-commerce engine with payment gateway integration.",
    stack: ["React", "Node", "Stripe"],
    type: "Public",
    link: "#"
  },
  {
    title: "Neon-Chat",
    desc: "Real-time websocket messaging app with end-to-end encryption.",
    stack: ["Socket.io", "Express", "CryptoJS"],
    type: "Private",
    link: "#"
  },
  {
    title: "Algo-Viz",
    desc: "Pathfinding visualizer for DFS, BFS, and Dijkstra algorithms.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    type: "Public",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#050505] py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-mono text-green-500 mb-8 flex items-center">
          <span className="text-white mr-2">ls</span> ./projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-[#0a0a0a] border border-white/10 p-6 rounded hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <FaFolder className="text-blue-400 text-xl" />
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors font-mono">
                    {project.title}
                  </h3>
                  <span className="text-xs border border-white/10 px-2 py-0.5 rounded-full text-gray-500">
                    {project.type}
                  </span>
                </div>
                <div className="flex gap-3 text-gray-500">
                  <a href={project.link} className="hover:text-white"><FaGithub /></a>
                  <a href={project.link} className="hover:text-white"><FaExternalLinkAlt size={14} /></a>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex gap-3 text-xs font-mono text-gray-500">
                {project.stack.map((tech) => (
                  <span key={tech} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;