import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, ChevronRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Constellation', href: '#constellation' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent jitter
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto">
          <nav
            className={`relative flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${
              scrolled || mobileMenuOpen
                ? 'bg-[#08070D]/90 backdrop-blur-xl border border-purple-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)] shadow-purple-950/20'
                : 'bg-[#08070D]/60 backdrop-blur-md border border-purple-500/15'
            }`}
            aria-label="Main Navigation"
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg p-1"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#120A20] border border-purple-500/40 group-hover:border-purple-400 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all">
                <Cpu className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                {/* Tiny orbiting dot */}
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-purple-400 animate-ping opacity-75" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-purple-400" />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-sm tracking-wider font-semibold text-slate-100 group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                  <span>TAHA</span>
                  <span className="text-purple-500 font-normal">//</span>
                  <span className="text-purple-400">.NET</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  BACK-END ENGINEER
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-purple-200 font-semibold bg-purple-500/15 shadow-[0_0_12px_rgba(168,85,247,0.2)] border border-purple-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-purple-500/10 border border-transparent'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-purple-400 rounded-full shadow-[0_0_8px_#A855F7]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Telemetry Indicator + Smooth Animated Mobile Toggle Button */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#120A20]/80 border border-purple-500/20 text-[11px] font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-purple-300 tracking-wider">SYSTEM_ONLINE</span>
              </div>

              {/* Animated Hamburger/Close button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 rounded-xl bg-[#120A20] border border-purple-500/30 text-slate-200 hover:text-purple-300 hover:border-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-5 h-0.5 bg-purple-300 rounded-full block origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-purple-400 rounded-full block"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-5 h-0.5 bg-purple-300 rounded-full block origin-center"
                />
              </button>
            </div>
          </nav>

          {/* Smooth Mobile Dropdown Menu with Framer Motion AnimatePresence */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                key="mobile-nav-panel"
                initial={{ opacity: 0, y: -14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden mt-2 p-4 rounded-2xl bg-[#08070D]/95 backdrop-blur-2xl border border-purple-500/25 shadow-2xl shadow-purple-950/40 overflow-hidden max-h-[82vh] overflow-y-auto"
              >
                <div className="flex flex-col gap-1.5">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: index * 0.025,
                          ease: 'easeOut',
                        }}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono tracking-wide transition-all active:scale-[0.98] ${
                          isActive
                            ? 'bg-purple-600/25 text-purple-100 border border-purple-400/40 font-semibold shadow-[0_0_16px_rgba(168,85,247,0.25)]'
                            : 'text-slate-300 hover:text-white hover:bg-purple-500/10 active:bg-purple-500/15'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              isActive ? 'bg-purple-400 shadow-[0_0_6px_#C084FC]' : 'bg-slate-600'
                            }`}
                          />
                          <span>{item.name}</span>
                        </span>
                        {isActive ? (
                          <Terminal className="w-4 h-4 text-purple-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-500" />
                        )}
                      </motion.a>
                    );
                  })}

                  {/* System Status Footnote */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="mt-3 pt-3 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono text-slate-400 px-2"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      .NET Core 8 Environment
                    </span>
                    <span className="text-purple-400 font-semibold">SERVICE_READY</span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Smooth Backdrop overlay for phone menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-40"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
