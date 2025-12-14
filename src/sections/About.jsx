import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="px-4 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="bg-[#111] p-3 flex justify-between items-center border-b border-white/5 select-none">
          <div className="flex gap-2 ml-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-xs font-mono text-gray-500 opacity-70">vim /etc/profile.config</div>
          <div className="w-10"></div>
        </div>

        <div className="p-8 md:p-12 font-mono text-sm md:text-base leading-loose text-gray-400">
          <div className="flex gap-4">
            <div className="flex flex-col text-gray-700 text-right select-none">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
            </div>
            
            <div className="flex-1">
              <p><span className="text-purple-400">const</span> <span className="text-yellow-300">About</span> = <span className="text-white">{`{`}</span></p>
              
              <div className="pl-6">
                <p><span className="text-purple-300">user</span>: <span className="text-green-400">'Ashish Mishra'</span>,</p>
                <p><span className="text-purple-300">alias</span>: <span className="text-green-400">'theTyai'</span>,</p>
                <p><span className="text-purple-300">role</span>: <span className="text-green-400">'Full Stack Engineer'</span>,</p>
                <p className="whitespace-pre-wrap">
                  <span className="text-purple-300">bio</span>: <span className="text-gray-500">'Bridging complex backend systems with intuitive frontend interfaces. Obsessed with clean code and security.'</span>
                </p>
              </div>
              
              <p><span className="text-white">{`}`}</span>;</p>
              
              <div className="mt-4 flex items-center gap-2 text-green-500">
                <span>➜</span> <span className="animate-pulse bg-green-500 h-4 w-2 block"></span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;