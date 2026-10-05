import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Server, Terminal, ShieldAlert, Cpu, FileDown, User, Orbit } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/Icons';
import { personalInfo } from '../../data/personal';
import { socialLinks } from '../../data/socialLinks';
import { ProfileFrame } from './ProfileFrame';
import { BackendOrbit } from '../BackendOrbit/BackendOrbit';

const techHighlights = [
  'ASP.NET Core',
  'C#',
  'Web APIs',
  'Clean Architecture',
  'SQL Server',
  'EF Core',
];

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orbit'>('profile');

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Backend Engineer Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 shadow-[0_0_15px_rgba(139,92,246,0.15)] mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="tracking-wider">{personalInfo.badge}</span>
              <span className="text-purple-500">|</span>
              <span className="text-slate-400 text-[11px]">API_ONLINE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4">
              <span className="block text-slate-100">{personalInfo.name}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300 text-3xl sm:text-5xl xl:text-5xl font-semibold mt-2">
                Junior Back-End Developer
              </span>
            </h1>

            {/* Large Supporting Headline */}
            <p className="text-lg sm:text-xl font-mono text-purple-300/90 mb-5 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-purple-400 shrink-0" />
              <span>{personalInfo.headline}</span>
            </p>

            {/* Exact Bio Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
              {personalInfo.description}
            </p>

            {/* Technical Chips / Highlights */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techHighlights.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[#0E071A] border border-purple-500/20 text-xs font-mono text-purple-200 tracking-wide flex items-center gap-1.5 hover:border-purple-400/50 transition-colors"
                >
                  <Cpu className="w-3 h-3 text-purple-400" />
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_28px_rgba(168,85,247,0.6)] cursor-pointer group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#08070D] hover:bg-[#120A20] text-slate-200 hover:text-white border border-purple-500/30 hover:border-purple-400 text-sm font-medium transition-all shadow-sm group"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                <span>GitHub</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#08070D] hover:bg-[#120A20] text-slate-200 hover:text-white border border-purple-500/30 hover:border-purple-400 text-sm font-medium transition-all shadow-sm group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                <span>LinkedIn</span>
              </a>

              {personalInfo.cvUrl && (
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#120A20] hover:bg-[#1A0D2E] text-purple-200 hover:text-white border border-purple-400/40 hover:border-purple-300 text-sm font-medium transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)] group"
                  aria-label="Download CV"
                >
                  <FileDown className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                  <span>Download CV</span>
                </a>
              )}
            </div>

            {/* Telemetry Status Bar */}
            <div className="mt-8 pt-6 border-t border-purple-500/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-purple-400" />
                <span>ENV: .NET 8 / C# 12</span>
              </div>
              <span className="text-purple-500/40">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-purple-400" />
                <span>SECURITY: JWT / IDENTITY</span>
              </div>
              <span className="text-purple-500/40">•</span>
              <span className="text-purple-400 font-semibold">LOCATION: {personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Right Column: Prominent Profile Frame + Interactive Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center relative"
          >
            {/* Command Center Card */}
            <div className="w-full relative rounded-3xl bg-[#08070D]/85 border border-purple-500/25 p-5 sm:p-7 backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.15)] flex flex-col items-center">
              {/* Header Telemetry with Responsive View Switcher */}
              <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-purple-500/15 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs font-mono text-purple-200 font-semibold tracking-wider">
                    COMMAND_CENTER
                  </span>
                </div>

                {/* View Switcher Tabs - Grid on mobile so it never overflows */}
                <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center gap-1 p-1 rounded-xl bg-[#120A20] border border-purple-500/30 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-1 rounded-lg transition-all cursor-pointer text-center whitespace-nowrap ${
                      activeTab === 'profile'
                        ? 'bg-purple-600 text-white font-semibold shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                        : 'text-slate-400 hover:text-purple-200'
                    }`}
                  >
                    <User className="w-3.5 h-3.5 shrink-0" />
                    <span>Portrait</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('orbit')}
                    className={`flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-1 rounded-lg transition-all cursor-pointer text-center whitespace-nowrap ${
                      activeTab === 'orbit'
                        ? 'bg-purple-600 text-white font-semibold shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                        : 'text-slate-400 hover:text-purple-200'
                    }`}
                  >
                    <Orbit className="w-3.5 h-3.5 shrink-0" />
                    <span>Architecture</span>
                  </button>
                </div>
              </div>

              {/* View Content */}
              <div className="w-full flex items-center justify-center min-h-[460px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'profile' ? (
                    <motion.div
                      key="profile-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full flex flex-col items-center justify-center"
                    >
                      <ProfileFrame />

                      {/* Quick Peek Hint */}
                      <button
                        type="button"
                        onClick={() => setActiveTab('orbit')}
                        className="mt-4 inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120A20]/80 hover:bg-[#1A0D2E] border border-purple-500/30 text-[11px] font-mono text-purple-300 hover:text-white transition-colors cursor-pointer max-w-full text-center"
                      >
                        <Orbit className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="hidden sm:inline">View Interactive Architecture Orbit →</span>
                        <span className="sm:hidden">Architecture Orbit →</span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="orbit-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full flex flex-col items-center justify-center"
                    >
                      <div className="text-center mb-2">
                        <span className="text-[11px] font-mono tracking-widest text-purple-300 uppercase">
                          BACKEND ORBIT ARCHITECTURE
                        </span>
                      </div>
                      <BackendOrbit />

                      {/* Return to Portrait Hint */}
                      <button
                        type="button"
                        onClick={() => setActiveTab('profile')}
                        className="mt-4 inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120A20]/80 hover:bg-[#1A0D2E] border border-purple-500/30 text-[11px] font-mono text-purple-300 hover:text-white transition-colors cursor-pointer max-w-full text-center"
                      >
                        <User className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="hidden sm:inline">← Return to Portrait View</span>
                        <span className="sm:hidden">← Portrait View</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
