import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowDown, Sparkles, Cpu } from 'lucide-react';
import { architectureLayers } from '../../data/architecture';

const orbitalSatellites = [
  { label: 'Mediator Pipeline', role: 'Decoupling' },
  { label: 'Fluent Validation', role: 'Input Hygiene' },
  { label: 'Repository Contracts', role: 'Abstraction' },
  { label: 'Domain Events', role: 'Event Invariants' },
  { label: 'Value Objects', role: 'Immutability' },
  { label: 'SQL ACID Integrity', role: 'Persistence' },
];

export const Architecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('03'); // Default to Domain Layer (center)

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 mb-3 shadow-[0_0_12px_rgba(139,92,246,0.15)]">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>CLEAN_ARCHITECTURE // DEPENDENCY_INVERSION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            How I Build
          </h2>

          <p className="text-base sm:text-lg text-purple-300/80 max-w-2xl font-mono">
            Concentric, decoupled Clean Architecture designed for testability, scalability, and long-term maintainability.
          </p>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            By applying the Dependency Inversion Principle, inner domain business rules remain isolated from external frameworks, databases, and UI implementations.
          </p>
        </div>

        {/* Orbiting Satellites Pill Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {orbitalSatellites.map((sat) => (
            <div
              key={sat.label}
              className="px-3 py-1 rounded-full bg-[#120A20]/80 border border-purple-500/30 text-xs font-mono text-purple-200 flex items-center gap-2 shadow-[0_0_10px_rgba(139,92,246,0.1)] hover:border-purple-400 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
              <span>{sat.label}</span>
              <span className="text-purple-400/60 text-[10px]">[{sat.role}]</span>
            </div>
          ))}
        </div>

        {/* Layered Stack Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {architectureLayers.map((layer, idx) => {
            const isSelected = activeLayer === layer.number;
            const isDomain = layer.number === '03';

            return (
              <motion.div
                key={layer.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveLayer(layer.number)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 p-6 sm:p-7 relative overflow-hidden backdrop-blur-xl ${
                  isDomain
                    ? isSelected
                      ? 'bg-[#1A0D2E]/95 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.35)] scale-[1.01]'
                      : 'bg-[#160B28]/80 border-purple-500/40 hover:border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                    : isSelected
                    ? 'bg-[#120A20]/95 border-purple-400/80 shadow-[0_0_30px_rgba(139,92,246,0.25)]'
                    : 'bg-[#08070D]/85 border-purple-500/20 hover:border-purple-400/40'
                }`}
              >
                {/* Special Core Halo for Domain */}
                {isDomain && (
                  <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-xl bg-purple-500/20 border-b border-l border-purple-400/40 text-[10px] font-mono text-purple-300 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    GRAVITATIONAL CORE
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Layer Number & Name */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg shrink-0 border ${
                        isSelected
                          ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_#A855F7]'
                          : 'bg-[#120A20] text-purple-300 border-purple-500/30'
                      }`}
                    >
                      {layer.number}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-200">
                          {layer.name}
                        </h3>
                        <span className="text-[10px] font-mono text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded bg-[#120A20]">
                          {layer.orbitLabel}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-purple-300/90 mt-0.5">
                        {layer.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Right: Quick Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {layer.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#08070D] border border-purple-500/25 text-xs font-mono text-purple-200 flex items-center gap-1"
                      >
                        <Cpu className="w-3 h-3 text-purple-400" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Details */}
                <div className="mt-4 pt-4 border-t border-purple-500/15">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {layer.details}
                  </p>
                </div>

                {/* Subtle downward dependency flow arrow between layers */}
                {idx < architectureLayers.length - 1 && (
                  <div className="absolute bottom-1 right-6 flex items-center gap-1 text-[10px] font-mono text-purple-400/50">
                    <ArrowDown className="w-3 h-3 text-purple-400/60 animate-bounce" />
                    <span>POINTS INWARD</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
