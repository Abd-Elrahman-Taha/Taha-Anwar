import React, { useState } from 'react';
import { Terminal, Shield, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export const ProfileFrame: React.FC = () => {
  const [imgError, setImgError] = useState<boolean>(false);

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Outer subtle orbital ring */}
      <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-purple-500/20 border-dashed animate-spin-orbit pointer-events-none" />

      {/* Second counter-rotating ring with small satellite node */}
      <div className="absolute w-[270px] h-[270px] sm:w-[310px] sm:h-[310px] rounded-full border border-purple-500/10 animate-spin-orbit-reverse pointer-events-none">
        <div className="absolute top-2 left-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#C084FC]" />
      </div>

      {/* Frame Container */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-[#08070D] border border-purple-500/40 p-2 shadow-[0_0_35px_rgba(139,92,246,0.25)] group">
        {/* Corner Neon Accents */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-400" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-400" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-400" />

        {/* Inner viewport */}
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#120A20] relative flex items-center justify-center">
          {!imgError ? (
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            // Elegant Command Center Avatar Placeholder (Zero stock photos / fake faces)
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-radial from-[#1A0D2E] via-[#120A20] to-[#08070D] text-center">
              <div className="relative mb-3 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1A0D2E] border border-purple-500/40 shadow-[0_0_16px_rgba(168,85,247,0.3)]">
                <Terminal className="w-8 h-8 text-purple-300" />
                <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500" />
                </span>
              </div>
              <span className="font-mono text-base font-bold text-slate-100 tracking-wider">
                TAHA ANWAR
              </span>
              <span className="font-mono text-[10px] text-purple-400 tracking-widest mt-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400" />
                BACK-END ENGINEER
              </span>
              <span className="text-[9px] font-mono text-slate-500 mt-2">
                profile.jpg ready
              </span>
            </div>
          )}

          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08070D]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Small Technical Label Badge */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#120A20] border border-purple-500/40 text-[9px] font-mono text-purple-300 shadow-lg tracking-wider whitespace-nowrap flex items-center gap-1.5">
          <Shield className="w-2.5 h-2.5 text-purple-400" />
          <span>DOTNET_CORE</span>
        </div>
      </div>
    </div>
  );
};
