import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MessageSquare } from 'lucide-react';
import { languages } from '../../data/languages';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 mb-3 shadow-[0_0_12px_rgba(139,92,246,0.15)]">
            <Globe2 className="w-3.5 h-3.5 text-purple-400" />
            <span>COMMUNICATION // LINGUISTICS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Languages
          </h2>

          <p className="text-sm sm:text-base text-purple-300/80 max-w-xl font-mono">
            Professional communication capabilities for cross-functional and global teams.
          </p>
        </div>

        {/* Clean Elegant Cards (NO PERCENTAGE CHARTS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {languages.map((lang, idx) => (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-[#08070D]/90 border border-purple-500/25 p-6 backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#120A20] border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-400 transition-all shadow-[0_0_12px_rgba(139,92,246,0.2)]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {lang.language}
                  </h3>
                  {lang.details && (
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      {lang.details}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-[#120A20] border border-purple-400/40 text-xs font-mono text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.2)] font-semibold shrink-0">
                {lang.level}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
