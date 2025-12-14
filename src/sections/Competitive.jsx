import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';

const platforms = [
  { name: "LeetCode", icon: <SiLeetcode className="text-yellow-500" />, rating: "1850", rank: "Top 5%", link: "#" },
  { name: "CodeChef", icon: <SiCodechef className="text-amber-700" />, rating: "1650", rank: "3 Star", link: "#" },
  { name: "Codeforces", icon: <SiCodeforces className="text-blue-500" />, rating: "1420", rank: "Specialist", link: "#" },
  { name: "AtCoder", icon: <FaTrophy className="text-gray-200" />, rating: "600", rank: "Brown", link: "#" }
];

const Competitive = () => {
  return (
    <section className="px-4 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="bg-[#111] p-3 flex justify-between items-center border-b border-white/5">
          <div className="flex gap-2 ml-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          </div>
          <div className="text-xs font-mono text-gray-500 opacity-70">./fetch_stats.sh</div>
          <div className="w-10"></div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer" className="block bg-[#111] p-5 rounded border border-white/5 hover:border-green-500/50 transition-all group">
              <div className="flex justify-between items-center mb-4">
                 <div className="text-3xl">{p.icon}</div>
                 <div className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-500 font-mono group-hover:text-white transition-colors">VIEW ↗</div>
              </div>
              <h3 className="text-lg font-bold text-gray-200 group-hover:text-green-400 font-mono transition-colors mb-1">{p.name}</h3>
              <div className="text-xs font-mono text-gray-500">
                Rating: <span className="text-white">{p.rating}</span> | Rank: <span className="text-green-500">{p.rank}</span>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Competitive;