import React, { useState } from 'react';
import { Terminal, Shield, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export const ProfileFrame: React.FC = () => {
  const [imgError, setImgError] = useState<boolean>(false);

  return (
    <div className="relative flex items-center justify-center p-2 sm:p-6 md:p-8 max-w-full overflow-hidden">
      {/* Outer subtle orbital ring with slow rotation */}
      <div className="absolute w-[280px] h-[280px] sm:w-[410px] sm:h-[410px] md:w-[460px] md:h-[460px] rounded-full border border-purple-500/20 border-dashed animate-spin-orbit pointer-events-none" />

      {/* Second counter-rotating ring with small satellite nodes */}
      <div className="absolute w-[310px] h-[310px] sm:w-[460px] sm:h-[460px] md:w-[510px] md:h-[510px] rounded-full border border-purple-500/10 animate-spin-orbit-reverse pointer-events-none">
        <div className="absolute top-4 left-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#C084FC]" />
        <div className="absolute bottom-6 right-1/4 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818CF8]" />
      </div>

      {/* Frame Container */}
      <div className="relative w-58 h-74 sm:w-76 sm:h-96 md:w-84 md:h-[420px] max-w-full rounded-3xl bg-[#08070D] border-2 border-purple-500/40 p-2 sm:p-3 shadow-[0_0_50px_rgba(139,92,246,0.3)] hover:shadow-[0_0_65px_rgba(168,85,247,0.45)] hover:border-purple-400 transition-all duration-300 group">
        {/* Corner Neon Accents */}
        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-purple-400" />
        <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-purple-400" />

        {/* Inner viewport with cosmic background */}
        <div className="w-full h-full rounded-2xl overflow-hidden bg-radial from-[#25103E] via-[#120A20] to-[#08070D] relative flex items-center justify-center">
          {/* Soft ambient backlight behind the cutout */}
          <div className="absolute top-6 w-48 h-48 rounded-full bg-purple-600/30 blur-2xl pointer-events-none" />

          {!imgError ? (
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover [object-position:50%_8%] transition-transform duration-500 group-hover:scale-105 relative z-10"
            />
          ) : (
            // Fallback
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative z-10">
              <div className="relative mb-4 flex items-center justify-center w-20 h-20 rounded-2xl bg-[#1A0D2E] border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]">
                <Terminal className="w-10 h-10 text-purple-300" />
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-purple-500" />
                </span>
              </div>
              <span className="font-mono text-lg font-bold text-slate-100 tracking-wider">
                TAHA ANWAR
              </span>
              <span className="font-mono text-xs text-purple-400 tracking-widest mt-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                BACK-END ENGINEER
              </span>
            </div>
          )}

          {/* Subtle bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08070D]/80 via-transparent to-transparent pointer-events-none z-20" />
        </div>

        {/* Small Technical Label Badge */}
        <div className="absolute -bottom-3.5 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/50 text-[10px] font-mono text-purple-200 shadow-xl tracking-wider whitespace-nowrap flex items-center gap-1.5 z-30">
          <Shield className="w-3 h-3 text-purple-400" />
          <span>DOTNET_CORE // TAHA.ANWAR</span>
        </div>
      </div>
    </div>
  );
};
