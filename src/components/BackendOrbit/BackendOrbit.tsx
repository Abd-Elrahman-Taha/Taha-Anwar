import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, ShieldCheck, Zap, Server, Clock, Layers, Activity } from 'lucide-react';

interface OrbitNode {
  id: string;
  label: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  angle: number; // in degrees
  distance: number; // radius in px from center
  telemetry: string;
}

const orbitNodes: OrbitNode[] = [
  {
    id: 'api',
    label: 'Web API',
    category: 'Ingress Gateway',
    icon: Zap,
    angle: 0, // right
    distance: 140,
    telemetry: 'REST / 200 OK',
  },
  {
    id: 'cache',
    label: 'Redis Cache',
    category: 'In-Memory',
    icon: Layers,
    angle: 60, // top-right
    distance: 215,
    telemetry: 'HIT / 0.8ms',
  },
  {
    id: 'db',
    label: 'SQL Server',
    category: 'Persistence',
    icon: Database,
    angle: 130, // top-left
    distance: 220,
    telemetry: 'ACID / CONNECTED',
  },
  {
    id: 'auth',
    label: 'Auth / JWT',
    category: 'Security',
    icon: ShieldCheck,
    angle: 185, // left
    distance: 145,
    telemetry: 'SECURE / VERIFIED',
  },
  {
    id: 'services',
    label: 'Services',
    category: 'Business Core',
    icon: Server,
    angle: 245, // bottom-left
    distance: 210,
    telemetry: 'SERVICES_ACTIVE',
  },
  {
    id: 'jobs',
    label: 'Hangfire Jobs',
    category: 'Background Worker',
    icon: Clock,
    angle: 305, // bottom-right
    distance: 210,
    telemetry: 'ORBITAL_WORKER',
  },
];

export const BackendOrbit: React.FC = () => {
  const [activeNode, setActiveNode] = useState<OrbitNode | null>(null);

  const cx = 260;
  const cy = 260;

  return (
    <div className="relative w-full flex flex-col items-center select-none">
      {/* Orbital SVG Container */}
      <div className="relative w-full max-w-[460px] aspect-square mx-auto flex items-center justify-center">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-radial from-purple-900/20 via-transparent to-transparent rounded-full filter blur-2xl pointer-events-none" />

        <svg
          viewBox="0 0 520 520"
          className="w-full h-full overflow-visible"
          aria-label="Backend Orbit Architecture Visualization"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>

            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Concentric Orbital Rings */}
          <circle
            cx={cx}
            cy={cy}
            r="80"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle
            cx={cx}
            cy={cy}
            r="140"
            fill="none"
            stroke="rgba(139, 92, 246, 0.28)"
            strokeWidth="1.2"
          />
          <circle
            cx={cx}
            cy={cy}
            r="215"
            fill="none"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />

          {/* Dynamic connection lines to center */}
          {orbitNodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const nx = cx + node.distance * Math.cos(rad);
            const ny = cy + node.distance * Math.sin(rad);
            const isSelected = activeNode?.id === node.id;

            return (
              <g key={`line-${node.id}`}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={nx}
                  y2={ny}
                  stroke={isSelected ? '#C084FC' : 'rgba(139, 92, 246, 0.25)'}
                  strokeWidth={isSelected ? 1.8 : 1}
                  strokeDasharray={isSelected ? 'none' : '3 4'}
                  className="transition-all duration-300"
                />
                {/* Traveling signal packet */}
                <circle r={isSelected ? 3.5 : 2} fill="#C084FC" filter="url(#neonGlow)">
                  <animateMotion
                    path={`M ${cx} ${cy} L ${nx} ${ny}`}
                    dur={isSelected ? '2s' : '4.5s'}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* Constellation cross ties */}
          <line
            x1={cx + 140 * Math.cos(0)}
            y1={cy + 140 * Math.sin(0)}
            x2={cx + 215 * Math.cos((60 * Math.PI) / 180)}
            y2={cy + 215 * Math.sin((60 * Math.PI) / 180)}
            stroke="rgba(139, 92, 246, 0.15)"
            strokeWidth="1"
          />
          <line
            x1={cx + 220 * Math.cos((130 * Math.PI) / 180)}
            y1={cy + 220 * Math.sin((130 * Math.PI) / 180)}
            x2={cx + 145 * Math.cos((185 * Math.PI) / 180)}
            y2={cy + 145 * Math.sin((185 * Math.PI) / 180)}
            stroke="rgba(139, 92, 246, 0.15)"
            strokeWidth="1"
          />
          <line
            x1={cx + 210 * Math.cos((245 * Math.PI) / 180)}
            y1={cy + 210 * Math.sin((245 * Math.PI) / 180)}
            x2={cx + 210 * Math.cos((305 * Math.PI) / 180)}
            y2={cy + 210 * Math.sin((305 * Math.PI) / 180)}
            stroke="rgba(139, 92, 246, 0.15)"
            strokeWidth="1"
          />

          {/* Center Glowing Purple CORE (.NET) */}
          <g
            className="cursor-pointer"
            onMouseEnter={() =>
              setActiveNode({
                id: 'core',
                label: '.NET Core 8',
                category: 'Runtime Core',
                icon: Zap,
                angle: 0,
                distance: 0,
                telemetry: 'RUNTIME // ACTIVE',
              })
            }
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* Outer halo */}
            <circle cx={cx} cy={cy} r="54" fill="url(#coreGlow)" />

            {/* Rotating orbital bracket */}
            <circle
              cx={cx}
              cy={cy}
              r="44"
              fill="none"
              stroke="#A855F7"
              strokeWidth="1.2"
              strokeDasharray="20 12"
              strokeOpacity="0.6"
              className="animate-spin-orbit"
            />

            {/* Core Body */}
            <circle
              cx={cx}
              cy={cy}
              r="36"
              fill="#120A20"
              stroke="#8B5CF6"
              strokeWidth="2"
              className="filter drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
            />

            {/* Core Labels */}
            <text
              x={cx}
              y={cy - 4}
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="12"
              fontWeight="700"
              fontFamily="monospace"
              letterSpacing="1px"
            >
              .NET
            </text>
            <text
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              fill="#C084FC"
              fontSize="9"
              fontWeight="500"
              fontFamily="monospace"
              letterSpacing="0.5px"
            >
              CORE
            </text>
          </g>

          {/* Orbit Nodes */}
          {orbitNodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const nx = cx + node.distance * Math.cos(rad);
            const ny = cy + node.distance * Math.sin(rad);
            const isHovered = activeNode?.id === node.id;

            return (
              <g
                key={node.id}
                className="cursor-pointer transition-transform duration-300 group"
                onMouseEnter={() => setActiveNode(node)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
              >
                {/* Outer hover halo */}
                {isHovered && (
                  <circle
                    cx={nx}
                    cy={ny}
                    r="30"
                    fill="rgba(139, 92, 246, 0.2)"
                    filter="url(#neonGlow)"
                  />
                )}

                {/* Node background circle */}
                <circle
                  cx={nx}
                  cy={ny}
                  r={isHovered ? 24 : 20}
                  fill="#08070D"
                  stroke={isHovered ? '#C084FC' : 'rgba(139, 92, 246, 0.5)'}
                  strokeWidth={isHovered ? 2 : 1.4}
                  className="transition-all duration-200 shadow-lg"
                />

                {/* Center icon / inner indicator */}
                <circle
                  cx={nx}
                  cy={ny}
                  r={isHovered ? 6 : 4}
                  fill={isHovered ? '#DDD6FE' : '#8B5CF6'}
                  className="transition-colors duration-200"
                />

                {/* Node text label */}
                <text
                  x={nx}
                  y={ny + 34}
                  textAnchor="middle"
                  fill={isHovered ? '#F8FAFC' : '#CBD5E1'}
                  fontSize="10.5"
                  fontFamily="system-ui, sans-serif"
                  fontWeight={isHovered ? '600' : '500'}
                  className="transition-colors duration-200 drop-shadow-md"
                >
                  {node.label}
                </text>

                {/* Category sublabel */}
                <text
                  x={nx}
                  y={ny + 46}
                  textAnchor="middle"
                  fill="rgba(168, 85, 247, 0.75)"
                  fontSize="8"
                  fontFamily="monospace"
                  letterSpacing="0.5px"
                >
                  {node.category}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Dedicated Command Center Telemetry Bar (Clean, no overlap with nodes, crisp typography) */}
      <div className="w-full max-w-[460px] mt-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#0B0814]/90 border border-purple-500/25 backdrop-blur-xl shadow-lg shadow-purple-950/20 flex items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2 min-w-0">
          <Activity className="w-3.5 h-3.5 text-purple-400 shrink-0 animate-pulse" />
          <span className="text-slate-400 text-[11px] uppercase tracking-wider shrink-0">
            NODE:
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeNode ? activeNode.id : 'default-core'}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="text-purple-200 font-semibold truncate text-[11px] sm:text-xs"
            >
              {activeNode ? `${activeNode.label}` : '.NET Core Engine'}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 pl-2 border-l border-purple-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <AnimatePresence mode="wait">
            <motion.span
              key={activeNode ? activeNode.id : 'default-telemetry'}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="text-purple-300 text-[10px] sm:text-[11px] tracking-wide"
            >
              {activeNode ? activeNode.telemetry : 'API_ONLINE • 6 NODES'}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
