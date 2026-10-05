import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Database, Server, Shield, Layers, Zap } from 'lucide-react';
import { GithubIcon } from '../UI/Icons';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isFeatured = project.id === 'smartlearn';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-3xl bg-[#08070D]/90 border border-purple-500/20 backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.18)] transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        isFeatured ? 'lg:col-span-2 p-7 sm:p-9' : 'p-6 sm:p-8'
      }`}
    >
      {/* Top telemetry bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[11px] font-mono text-purple-300 tracking-wider">
            {project.statusBadge}
          </span>
        </div>

        <span className="px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300">
          {project.category}
        </span>
      </div>

      <div className={`grid ${isFeatured ? 'grid-cols-1 lg:grid-cols-12 gap-8' : 'grid-cols-1 gap-6'}`}>
        {/* Left / Main info */}
        <div className={isFeatured ? 'lg:col-span-7 flex flex-col justify-between' : 'flex flex-col'}>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2.5">
                Key Features & Engineering Highlights
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies Badges */}
          <div className="pt-4 border-t border-purple-500/15">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#120A20] text-xs font-mono text-purple-200 border border-purple-500/25 flex items-center gap-1.5 hover:border-purple-400/50 transition-colors"
                >
                  <Cpu className="w-3 h-3 text-purple-400" />
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Action Button */}
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 shadow-[0_0_16px_rgba(139,92,246,0.35)] hover:shadow-[0_0_24px_rgba(168,85,247,0.5)] group/btn"
              >
                <GithubIcon className="w-4 h-4 text-purple-100" />
                <span>VIEW REPOSITORY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right / Visual Column: Custom Technical Visualization (NO STOCK IMAGES) */}
        <div className={isFeatured ? 'lg:col-span-5' : 'mt-2'}>
          <div className="rounded-2xl bg-[#030305]/90 border border-purple-500/25 p-5 relative overflow-hidden h-full flex flex-col justify-center">
            {/* Header label */}
            <div className="flex items-center justify-between mb-4 border-b border-purple-500/15 pb-2 text-[10px] font-mono text-purple-300">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-purple-400" />
                TECHNICAL ARCHITECTURE
              </span>
              <span className="text-slate-500">SVG_SCHEMATIC</span>
            </div>

            {/* Visual Schematic Diagram */}
            {project.id === 'smartlearn' && (
              <div className="space-y-3">
                {/* Orbital nodes surrounding Clean Architecture */}
                {project.orbitalNodes && (
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
                    {project.orbitalNodes.map((node) => (
                      <span
                        key={node}
                        className="px-2 py-0.5 rounded-full bg-[#120A20] border border-purple-400/40 text-[10px] font-mono text-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.2)]"
                      >
                        ● {node}
                      </span>
                    ))}
                  </div>
                )}

                {/* Layered Stack */}
                <div className="space-y-1.5 font-mono text-xs">
                  {project.architectureSteps.map((step, idx) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`w-full py-2 px-3 rounded-lg border text-center transition-all ${
                          step.includes('Domain')
                            ? 'bg-[#1A0D2E] border-purple-400/70 text-purple-100 font-semibold shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                            : step.includes('Database')
                            ? 'bg-[#0E071A] border-purple-500/40 text-purple-200'
                            : 'bg-[#08070D] border-purple-500/20 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-purple-400 font-mono">0{idx + 1}</span>
                          <span>{step}</span>
                          <span className="text-purple-400/60 text-[9px]">
                            {idx === 0
                              ? 'REQUEST'
                              : idx === 1
                              ? 'CONTROLLERS'
                              : idx === 2
                              ? 'MEDIATR/CQRS'
                              : idx === 3
                              ? 'ENTITIES'
                              : idx === 4
                              ? 'EF CORE'
                              : 'PERSISTENCE'}
                          </span>
                        </div>
                      </div>
                      {idx < project.architectureSteps.length - 1 && (
                        <div className="w-px h-2 bg-gradient-to-b from-purple-400 to-purple-600/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.id === 'eventflow' && (
              <div className="space-y-3">
                {/* Orbital badges */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
                  {project.orbitalNodes?.map((node) => (
                    <span
                      key={node}
                      className="px-2 py-0.5 rounded-full bg-[#120A20] border border-purple-400/40 text-[10px] font-mono text-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.2)]"
                    >
                      ● {node}
                    </span>
                  ))}
                </div>

                {/* Pipeline visual with connection lines */}
                <div className="space-y-2">
                  {project.architectureSteps.map((step, idx) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className="w-full py-2 px-3 rounded-lg bg-[#0E071A] border border-purple-500/30 flex items-center justify-between text-xs font-mono text-purple-200">
                        <div className="flex items-center gap-2">
                          {idx === 0 && <Zap className="w-3.5 h-3.5 text-purple-400" />}
                          {idx === 1 && <Shield className="w-3.5 h-3.5 text-purple-400" />}
                          {idx === 2 && <Server className="w-3.5 h-3.5 text-purple-400" />}
                          {idx === 3 && <Zap className="w-3.5 h-3.5 text-purple-400" />}
                          {idx === 4 && <Database className="w-3.5 h-3.5 text-purple-400" />}
                          <span>{step}</span>
                        </div>
                        <span className="text-[10px] text-purple-400 font-mono">FLOW_{idx + 1}</span>
                      </div>
                      {idx < project.architectureSteps.length - 1 && (
                        <div className="w-px h-2.5 bg-purple-500/60" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.id === 'nextbuy' && (
              <div className="space-y-3">
                {/* Orbital nodes */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
                  {project.orbitalNodes?.map((node) => (
                    <span
                      key={node}
                      className="px-2 py-0.5 rounded-full bg-[#120A20] border border-purple-400/40 text-[10px] font-mono text-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.2)]"
                    >
                      ● {node}
                    </span>
                  ))}
                </div>

                {/* MVC Pattern Architecture Flow */}
                <div className="space-y-2">
                  {project.architectureSteps.map((step, idx) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className="w-full py-2 px-3 rounded-lg bg-[#0E071A] border border-purple-500/30 flex items-center justify-between text-xs font-mono text-purple-200">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-400" />
                          <span>{step}</span>
                        </div>
                        <span className="text-[10px] text-purple-400 font-mono">
                          {idx === 0
                            ? 'VIEW_MODEL'
                            : idx === 1
                            ? 'ACTION'
                            : idx === 2
                            ? 'LOGIC'
                            : idx === 3
                            ? 'DATA_ACCESS'
                            : 'SQL_SERVER'}
                        </span>
                      </div>
                      {idx < project.architectureSteps.length - 1 && (
                        <div className="w-px h-2.5 bg-purple-500/60" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom telemetry footer */}
            <div className="mt-4 pt-3 border-t border-purple-500/15 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>SECURITY: AUDITED</span>
              <span className="text-purple-400">STATUS: PROD_READY</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
