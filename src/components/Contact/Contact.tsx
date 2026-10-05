import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  FileDown,
  Copy,
  Check,
  Send,
  Radio,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/Icons';
import { personalInfo } from '../../data/personal';
import { socialLinks } from '../../data/socialLinks';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Backend System Inquiry'
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120A20] border border-purple-500/30 text-xs font-mono text-purple-300 mb-3 shadow-[0_0_12px_rgba(139,92,246,0.15)]">
            <Radio className="w-3.5 h-3.5 text-purple-400" />
            <span>TRANSMISSION // INGRESS_CHANNEL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Let's Build the Next System
          </h2>

          <p className="text-base sm:text-lg text-purple-300/80 max-w-2xl font-mono">
            "Have a backend project, API idea, or system that needs a solid foundation?"
          </p>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl">
            Reach out directly for freelance backend engineering, ASP.NET Core API development, database architecture, or technical collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Communication Channels & CV */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="rounded-3xl bg-[#08070D]/90 border border-purple-500/25 p-6 sm:p-7 backdrop-blur-xl shadow-[0_0_35px_rgba(139,92,246,0.12)]">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400" />
                <span>Direct Contact Points</span>
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#120A20]/70 border border-purple-500/20 group hover:border-purple-400/40 transition-colors">
                  <a
                    href={socialLinks.email}
                    className="flex items-center gap-3 text-slate-200 hover:text-purple-300 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#08070D] border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        Email Address
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-medium">
                        {personalInfo.email}
                      </span>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 text-slate-400 hover:text-purple-300 transition-colors"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-purple-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#120A20]/70 border border-purple-500/20 group hover:border-purple-400/40 transition-colors">
                  <a
                    href={socialLinks.phone}
                    className="flex items-center gap-3 text-slate-200 hover:text-purple-300 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#08070D] border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        Phone / Direct
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-medium">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-purple-300 transition-colors"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-purple-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* WhatsApp */}
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#120A20]/70 border border-purple-500/20 hover:border-purple-400/40 text-slate-200 hover:text-purple-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#08070D] border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-medium">
                      wa.me/201013810903
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#120A20]/70 border border-purple-500/20 text-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-[#08070D] border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Primary Location
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-medium">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Link Action Buttons */}
              <div className="mt-6 pt-5 border-t border-purple-500/15">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-3">
                  External Profiles
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#120A20] hover:bg-[#1A0D2E] text-slate-200 hover:text-white border border-purple-500/30 text-xs font-mono transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#120A20] hover:bg-[#1A0D2E] text-slate-200 hover:text-white border border-purple-500/30 text-xs font-mono transition-all"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-purple-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#120A20] hover:bg-[#1A0D2E] text-slate-200 hover:text-white border border-purple-500/30 text-xs font-mono transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-purple-400" />
                    <span>Open WhatsApp Message</span>
                  </a>
                </div>
              </div>

              {/* CV Download / Availability Button (Configurable via personal.ts) */}
              <div className="mt-5 pt-4 border-t border-purple-500/15">
                {personalInfo.cvUrl ? (
                  <a
                    href={personalInfo.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_16px_rgba(139,92,246,0.3)]"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>DOWNLOAD CV</span>
                  </a>
                ) : (
                  <div className="w-full flex flex-col items-center justify-center p-3 rounded-xl bg-[#120A20]/50 border border-purple-500/20 text-center">
                    <button
                      type="button"
                      disabled
                      className="flex items-center gap-2 text-xs font-mono text-slate-400 cursor-not-allowed opacity-75"
                    >
                      <FileDown className="w-4 h-4 text-purple-400/60" />
                      <span>CV Available Upon Request</span>
                    </button>
                    <span className="text-[10px] font-mono text-purple-400/80 mt-1">
                      (Configurable via src/data/personal.ts)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#08070D]/90 border border-purple-500/25 p-7 sm:p-9 backdrop-blur-xl shadow-[0_0_35px_rgba(139,92,246,0.12)]">
              <div className="flex items-center justify-between pb-4 border-b border-purple-500/15 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs font-mono text-purple-200 font-semibold tracking-wider">
                    TRANSMISSION_FORM // DIRECT_DISPATCH
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  PROTOCOL: MAILTO
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#120A20] border border-purple-500/25 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#120A20] border border-purple-500/25 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ASP.NET Core API Development"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#120A20] border border-purple-500/25 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message / System Requirements
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your backend requirements, architecture needs, or collaboration idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#120A20] border border-purple-500/25 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_28px_rgba(168,85,247,0.5)] cursor-pointer group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>TRANSMIT MESSAGE VIA EMAIL</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
