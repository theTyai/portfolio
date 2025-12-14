import React from 'react';

const skills = [
  "React", "Tailwind CSS", "JavaScript (ES6+)", "Node.js", 
  "Git", "MongoDB", "Figma", "Redux"
];

const Skills = () => {
  return (
    <section className="bg-slate-900 py-10 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-gray-400 mb-6 font-mono text-sm uppercase tracking-widest">Technologies I work with</p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div key={skill} className="px-6 py-3 bg-primary rounded-lg text-gray-300 font-medium hover:text-white hover:bg-slate-700 hover:scale-105 transition-all cursor-default border border-slate-800">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;