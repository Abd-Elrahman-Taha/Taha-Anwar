import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Filter } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import type { ProjectFilterCategory } from '../../types/portfolio';

const filterCategories: ProjectFilterCategory[] = [
  'All',
  'ASP.NET Core',
  'Web API',
  'MVC',
  'Clean Architecture',
  'E-Commerce',
  'Authentication',
  'Payments',
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilterCategory>('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter((project) =>
      project.filterCategories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 mb-3 shadow-[0_0_12px_rgba(139,92,246,0.15)]">
            <Code className="w-3.5 h-3.5 text-purple-400" />
            <span>PORTFOLIO // BACKEND_CODEBASES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Selected Projects
          </h2>

          <p className="text-base sm:text-lg text-purple-300/80 max-w-2xl font-mono">
            Backend systems designed around scalability, maintainability and real-world workflows.
          </p>
        </div>

        {/* Functional React Filter Controls */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-400">
            <Filter className="w-3.5 h-3.5 text-purple-400" />
            <span>FILTER BY SPECIALIZATION:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
            {filterCategories.map((category) => {
              const isSelected = selectedCategory === category;
              // Calculate matching count for each filter
              const count =
                category === 'All'
                  ? projects.length
                  : projects.filter((p) => p.filterCategories.includes(category)).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-purple-600 text-white font-semibold shadow-[0_0_16px_rgba(139,92,246,0.4)] border border-purple-400'
                      : 'bg-[#08070D]/80 text-slate-300 hover:text-white hover:bg-[#120A20] border border-purple-500/20'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-purple-800 text-purple-100' : 'bg-[#120A20] text-purple-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid rendered via .map against imported data */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 rounded-2xl bg-[#08070D]/60 border border-purple-500/20 max-w-md mx-auto">
            <p className="font-mono text-sm text-slate-400">
              No projects found for category "{selectedCategory}".
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
