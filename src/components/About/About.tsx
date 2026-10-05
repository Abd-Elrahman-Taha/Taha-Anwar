import React from 'react';
import { motion } from 'framer-motion';
import { Server, Zap, Database, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AboutCard {
  title: string;
  tagline: string;
  description: string;
  specializations: string[];
  icon: React.ComponentType<{ className?: string }>;
  telemetry: string;
}

const aboutCards: AboutCard[] = [
  {
    title: 'Backend Development',
    tagline: 'C# & ASP.NET Core Runtime',
    description:
      'Designing and developing reliable server-side applications using C# and ASP.NET Core MVC/API. Deep focus on OOP principles, dependency injection, and clean application lifecycle governance.',
    specializations: ['C# & OOP', 'ASP.NET Core MVC', 'Business Workflows', 'Error Handling & Logging'],
    icon: Server,
    telemetry: 'RUNTIME // .NET_CORE',
  },
  {
    title: 'API Architecture',
    tagline: 'RESTful Endpoints & Gateways',
    description:
      'Building performant Web APIs with well-defined REST contracts, OpenAPI/Swagger specifications, resilient middleware pipelines, JWT token authentication, and role-based authorization.',
    specializations: ['ASP.NET Core Web API', 'REST Standards', 'Authentication & JWT', 'Role-Based Access (RBAC)'],
    icon: Zap,
    telemetry: 'INGRESS // REST_API',
  },
  {
    title: 'Database Systems',
    tagline: 'Relational Integrity & EF Core',
    description:
      'Architecting relational schemas, data persistence pipelines, and atomic transactions using Microsoft SQL Server and Entity Framework Core with optimized LINQ expressions.',
    specializations: ['SQL Server', 'Entity Framework Core', 'Relational Schemas', 'Transaction Management'],
    icon: Database,
    telemetry: 'STORAGE // SQL_SERVER',
  },
  {
    title: 'Clean Architecture',
    tagline: 'Decoupled Domain Design',
    description:
      'Structuring maintainable enterprise solutions adhering to SOLID principles, separation of concerns, the Repository Pattern, and domain-centric software architecture.',
    specializations: ['Clean Architecture', 'SOLID Principles', 'Repository Pattern', 'Decoupled Domain Logic'],
    icon: Layers,
    telemetry: 'PATTERN // CLEAN_ARCH',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 mb-3 shadow-[0_0_12px_rgba(139,92,246,0.15)]">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>FOUNDATIONS // SPECIALIZATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-purple-300/80 max-w-2xl font-mono">
            Building the systems behind the experience.
          </p>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Junior Back-End Developer specializing in building robust, maintainable, and secure Web APIs and enterprise MVC applications with C#, ASP.NET Core, and SQL Server.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-[#08070D]/85 border border-purple-500/20 p-6 backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Corner Technical Accent */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#120A20] border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-400 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-400/70 border border-purple-500/15 px-2 py-0.5 rounded bg-[#120A20]/60">
                    {card.telemetry}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-xs font-mono text-purple-400 mb-3">
                    {card.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Specializations list */}
                <div className="pt-4 border-t border-purple-500/15">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Competencies
                  </span>
                  <ul className="space-y-1.5">
                    {card.specializations.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-xs text-slate-300 font-mono"
                      >
                        <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
