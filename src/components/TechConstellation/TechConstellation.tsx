import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import { constellationNodes } from '../../data/constellation';
import type { ConstellationNode } from '../../types/portfolio';

export const TechConstellation: React.FC = () => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>('dotnet');

  const width = 800;
  const height = 500;

  // Find node by id
  const getNodeById = (id: string): ConstellationNode | undefined =>
    constellationNodes.find((n) => n.id === id);

  const activeNode = hoveredNodeId ? getNodeById(hoveredNodeId) : null;

  return (
    <section id="constellation" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 mb-3 shadow-[0_0_12px_rgba(139,92,246,0.15)]">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>CELESTIAL_MAP // SYSTEM_NODES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Backend Constellation
          </h2>

          <p className="text-base sm:text-lg text-purple-300/80 max-w-2xl font-mono">
            Interactive star map visualizing .NET runtime interconnects in deep space.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-400 font-mono">
            Hover or tap any constellation node to illuminate interconnected dependencies.
          </p>
        </div>

        {/* Constellation Canvas Viewport */}
        <div className="relative rounded-3xl bg-[#08070D]/90 border border-purple-500/25 p-4 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.12)] overflow-hidden">
          {/* Subtle background cosmic glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* SVG Constellation Map */}
          <div className="w-full aspect-[16/10] sm:aspect-[16/9] max-h-[560px]">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-full select-none"
              aria-label="Interactive Backend Technology Constellation"
            >
              <defs>
                <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <radialGradient id="centerStarGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C084FC" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background ambient constellation lines */}
              {constellationNodes.map((node) => {
                const x1 = (node.x / 100) * width;
                const y1 = (node.y / 100) * height;

                return node.connections.map((targetId) => {
                  const targetNode = getNodeById(targetId);
                  if (!targetNode) return null;

                  const x2 = (targetNode.x / 100) * width;
                  const y2 = (targetNode.y / 100) * height;

                  const isHighlighted =
                    hoveredNodeId === node.id || hoveredNodeId === targetId;

                  return (
                    <g key={`conn-${node.id}-${targetId}`}>
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={isHighlighted ? '#C084FC' : 'rgba(139, 92, 246, 0.2)'}
                        strokeWidth={isHighlighted ? 2 : 1}
                        strokeDasharray={isHighlighted ? 'none' : '3 4'}
                        className="transition-all duration-300"
                      />
                      {isHighlighted && (
                        <circle r="2.5" fill="#DDD6FE" filter="url(#starGlow)">
                          <animateMotion
                            path={`M ${x1} ${y1} L ${x2} ${y2}`}
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  );
                });
              })}

              {/* Star Nodes */}
              {constellationNodes.map((node) => {
                const px = (node.x / 100) * width;
                const py = (node.y / 100) * height;
                const isHovered = hoveredNodeId === node.id;
                const isCenter = node.isCenter;

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onClick={() => setHoveredNodeId(node.id)}
                  >
                    {/* Outer atmospheric aura */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isCenter ? (isHovered ? 45 : 38) : isHovered ? 26 : 18}
                      fill={isCenter ? 'url(#centerStarGlow)' : 'rgba(139, 92, 246, 0.15)'}
                      className="transition-all duration-300"
                    />

                    {/* Orbiting dashed accent ring */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isCenter ? 30 : 15}
                      fill="none"
                      stroke={isHovered ? '#C084FC' : 'rgba(168, 85, 247, 0.4)'}
                      strokeWidth="1"
                      strokeDasharray={isCenter ? '8 6' : '3 4'}
                      className={isCenter ? 'animate-spin-orbit' : ''}
                    />

                    {/* Main star core */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isCenter ? 22 : isHovered ? 10 : 7}
                      fill={isCenter ? '#120A20' : isHovered ? '#A855F7' : '#08070D'}
                      stroke={isHovered || isCenter ? '#C084FC' : 'rgba(139, 92, 246, 0.6)'}
                      strokeWidth={isHovered || isCenter ? 2 : 1.5}
                      filter="url(#starGlow)"
                      className="transition-all duration-300"
                    />

                    {/* Star Center Dot */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isCenter ? 5 : 2.5}
                      fill="#F8FAFC"
                      className="animate-pulse"
                    />

                    {/* Star Label */}
                    <text
                      x={px}
                      y={py + (isCenter ? 44 : 26)}
                      textAnchor="middle"
                      fill={isHovered ? '#FFFFFF' : '#DDD6FE'}
                      fontSize={isCenter ? 14 : 11}
                      fontWeight={isCenter || isHovered ? '700' : '500'}
                      fontFamily="monospace"
                      className="transition-colors duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Interactive Node Telemetry HUD */}
          <div className="mt-4 pt-4 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span className="text-slate-400">STAR_NODE:</span>
              <span className="text-purple-200 font-bold text-sm">
                {activeNode?.name}
              </span>
              <span className="text-purple-500">|</span>
              <span className="text-purple-400">{activeNode?.role}</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span>CONNECTED LINKS:</span>
              <span className="text-purple-300 font-semibold">
                {activeNode?.connections.length} NODES
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
