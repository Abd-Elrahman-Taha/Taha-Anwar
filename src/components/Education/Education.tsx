import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { educationList } from '../../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 mb-3 shadow-[0_0_12px_rgba(139,92,246,0.15)]">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>ACADEMICS // FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Education
          </h2>

          <p className="text-base sm:text-lg text-purple-300/80 max-w-2xl font-mono">
            Academic background and theoretical computer science fundamentals.
          </p>
        </div>

        {/* Academic Cards Grid */}
        <div className="max-w-3xl mx-auto space-y-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-[#08070D]/90 border border-purple-500/25 p-7 sm:p-9 backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 mb-2">
                    BACHELOR'S DEGREE
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {edu.institution}
                  </h3>

                  <div className="text-base font-medium text-purple-400 mt-1 font-mono">
                    {edu.field}
                  </div>

                  {edu.location && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>

                {/* Academic Metrics Pill */}
                <div className="flex flex-col sm:items-end gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#120A20] border border-purple-500/30 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>Graduation: {edu.expectedGraduation}</span>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-400/40 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono text-slate-300">GPA:</span>
                    <span className="text-base font-mono font-bold text-white">{edu.gpa}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              {edu.highlights && (
                <div className="pt-6 border-t border-purple-500/15">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    Curriculum Focus & Core Studies
                  </span>
                  <ul className="space-y-2">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
