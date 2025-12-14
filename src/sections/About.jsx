import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 flex justify-center bg-[#050505] relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl bg-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-[#111] p-3 flex justify-between items-center border-b border-white/5">
          <div className="flex gap-2 ml-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-xs font-mono text-gray-500">vim /etc/profile.json</div>
          <div className="w-10"></div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 font-mono text-sm md:text-base leading-relaxed text-gray-400">
          <p className="mb-6">
            <span className="text-purple-400">import</span> <span className="text-white">Passion</span> <span className="text-purple-400">from</span> <span className="text-green-400">'coding'</span>;
          </p>

          <div className="pl-4 border-l-2 border-white/10 space-y-4">
            <p>
              <span className="text-blue-400">const</span> <span className="text-yellow-300">Bio</span> = <span className="text-white">{`{`}</span>
            </p>
            <div className="pl-6 space-y-2">
              <p>name: <span className="text-green-400">'Ashish Mishra'</span>,</p>
              <p>role: <span className="text-green-400">'Full Stack Engineer'</span>,</p>
              <p>location: <span className="text-green-400">'India'</span>,</p>
              <p>status: <span className="text-green-400">'Open to Opportunities'</span>,</p>
              <p className="whitespace-pre-wrap">
                description: <span className="text-gray-500">'I bridge the gap between complex backend systems and intuitive frontend interfaces. My code is clean, my algorithms are optimized, and my designs are user-centric.'</span>
              </p>
            </div>
            <p><span className="text-white">{`}`}</span>;</p>
          </div>

          <div className="mt-8 flex gap-2">
            <span className="text-green-500">➜</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;