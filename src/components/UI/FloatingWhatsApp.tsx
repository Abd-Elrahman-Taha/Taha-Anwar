import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="Quick Communication">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-2.5"
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-xl bg-[#08070D]/95 border border-purple-500/30 text-xs font-mono text-purple-200 shadow-xl backdrop-blur-md whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Chat on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>

        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#120A20] via-[#1A0D2E] to-[#25103E] border border-purple-400/50 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:border-purple-300 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          aria-label="Chat with Taha on WhatsApp"
        >
          {/* Subtle Outer Radar Pulse */}
          <span className="absolute inset-0 rounded-full border border-purple-400/30 animate-ping opacity-60 pointer-events-none" />

          {/* WhatsApp icon with emerald/purple glow */}
          <MessageCircle className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-purple-200 group-hover:text-white transition-colors" />

          {/* Online green indicator badge */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#08070D]" />
          </span>
        </a>
      </motion.div>
    </aside>
  );
};
