import React from 'react';
import { MessageCircle, Mail, ArrowUp, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/Icons';
import { socialLinks } from '../../data/socialLinks';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-[#08070D]/90 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="font-mono text-base font-bold text-white tracking-wider">
              TAHA ANWAR
            </span>
          </div>
          <p className="text-xs font-mono text-purple-300/80">
            Junior Back-End Developer • .NET • APIs • Architecture
          </p>
          <p className="text-[11px] font-mono text-slate-500 mt-2">
            © 2026 Taha Anwar. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#120A20] border border-purple-500/25 text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-purple-400" />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#120A20] border border-purple-500/25 text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-purple-400" />
          </a>

          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#120A20] border border-purple-500/25 text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all"
            aria-label="WhatsApp Message"
          >
            <MessageCircle className="w-4 h-4 text-purple-400" />
          </a>

          <a
            href={socialLinks.email}
            className="p-2.5 rounded-xl bg-[#120A20] border border-purple-500/25 text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4 text-purple-400" />
          </a>

          {/* Scroll to Top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#120A20] border border-purple-500/25 text-slate-300 hover:text-white hover:border-purple-400 transition-all cursor-pointer ml-2"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4 text-purple-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
