import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';

const platforms = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-500" />,
    rating: "Max: 1850",
    rank: "Top 5%",
    link: "https://leetcode.com/yourhandle"
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="text-amber-700" />,
    rating: "1650 (3*)",
    rank: "Global: 5k",
    link: "https://codechef.com/users/yourhandle"
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces className="text-blue-500" />,
    rating: "1420 (Spec)",
    rank: "Max: 1450",
    link: "https://codeforces.com/profile/yourhandle"
  },
  {
    name: "AtCoder",
    icon: <FaTrophy className="text-white" />,
    rating: "600 (Brown)",
    rank: "Regular",
    link: "https://atcoder.jp/users/yourhandle"
  }
];

const Competitive = () => {
  return (
    <section className="py-20 px-4 flex justify-center bg-[#050505] relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl bg-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="bg-[#111] p-3 flex justify-between items-center border-b border-white/5">
          <div className="flex gap-2 ml-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          </div>
          <div className="text-xs font-mono text-gray-500">./check_stats.sh</div>
          <div className="w-10"></div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer" className="block bg-[#111] p-4 rounded border border-white/5 hover:border-green-500 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{p.icon}</div>
                <h3 className="text-lg font-bold text-gray-200 group-hover:text-green-400 font-mono">{p.name}</h3>
              </div>
              <div className="font-mono text-xs text-gray-500 space-y-1">
                <p>Rating: <span className="text-white">{p.rating}</span></p>
                <p>Rank: <span className="text-white">{p.rank}</span></p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Competitive;