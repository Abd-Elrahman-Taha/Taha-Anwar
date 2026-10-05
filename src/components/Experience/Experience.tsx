import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 mb-3 shadow-[0_0_12px_rgba(139,92,246,0.15)]">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>TIMELINE // BACKEND_SYSTEMS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Experience
          </h2>

          <p className="text-base sm:text-lg text-purple-300/80 max-w-2xl font-mono">
            Real-world backend engineering and enterprise workflow implementations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central cosmic line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-purple-500/5 -translate-x-1/2 hidden sm:block pointer-events-none" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row gap-8 items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-[#08070D] border-2 border-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.7)] z-20">
                    <span className="w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
                  </div>

                  {/* Empty side for alternating balance on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2">
                    <div className="group relative rounded-2xl bg-[#08070D]/90 border border-purple-500/25 p-6 sm:p-7 backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.18)] transition-all duration-300">
                      {/* Status Tag & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#120A20] border border-purple-500/30 text-[10px] font-mono text-purple-300 tracking-wider">
                          {exp.statusTag || 'BACKEND_SYSTEM'}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          <span>
                            {exp.startDate} – {exp.endDate}
                          </span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-purple-400 mb-1">
                        {exp.company}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-mono">
                        {exp.type && <span>{exp.type}</span>}
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-purple-400" />
                            {exp.location}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Visual Concept / Workflow Pipeline */}
                      <div className="mb-5 p-3.5 rounded-xl bg-[#120A20]/70 border border-purple-500/20">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300/80 block mb-2">
                          System Dataflow Visual:
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          {exp.workflowNodes.map((node, nodeIdx) => (
                            <React.Fragment key={node}>
                              <span className="px-2.5 py-1 rounded-md bg-[#08070D] border border-purple-500/30 text-xs font-mono text-purple-200 shadow-sm flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                {node}
                              </span>
                              {nodeIdx < exp.workflowNodes.length - 1 && (
                                <ArrowRight className="w-3.5 h-3.5 text-purple-400/70 shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Key Features List */}
                      <div className="mb-5">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                          Core Functional Scope
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {exp.features.map((feat) => (
                            <li
                              key={feat}
                              className="flex items-start gap-1.5 text-xs text-slate-300"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="pt-4 border-t border-purple-500/15 flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-md bg-[#120A20] text-[11px] font-mono text-purple-300 border border-purple-500/20 flex items-center gap-1"
                            >
                              <Cpu className="w-2.5 h-2.5 text-purple-400" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
