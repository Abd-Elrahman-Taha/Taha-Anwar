import React from 'react';
import { SpaceBackground } from './components/SpaceBackground/SpaceBackground';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Architecture } from './components/Architecture/Architecture';
import { TechConstellation } from './components/TechConstellation/TechConstellation';
import { Education } from './components/Education/Education';
import { Certifications } from './components/Certifications/Certifications';
import { Languages } from './components/Languages/Languages';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { FloatingWhatsApp } from './components/UI/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030305] text-[#F8FAFC] selection:bg-purple-600/30 selection:text-white">
      {/* Background Deep Space + Purple Nebulas + Subtle Particle Stars */}
      <SpaceBackground />

      {/* Floating Sticky Glass Navbar */}
      <Navbar />

      {/* Main Command Center Landmark */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero with Profile Frame & Backend Orbit Architecture */}
        <Hero />

        {/* 2. About Me Specializations */}
        <About />

        {/* 3. Real-world Experience Timeline with Visual Workflows */}
        <Experience />

        {/* 4. Selected Projects with Functional Filtering & Schematics */}
        <Projects />

        {/* 5. Technical Arsenal (Categorized, No Percentage Bars) */}
        <Skills />

        {/* 6. Clean Architecture Showcase (How I Build) */}
        <Architecture />

        {/* 7. Interactive Backend Technology Constellation (.NET Centered) */}
        <TechConstellation />

        {/* 8. Academic Education (FCAI - Beni Suef University, IT, GPA 3.33) */}
        <Education />

        {/* 9. DEPI Certifications & Training */}
        <Certifications />

        {/* 10. Languages (Arabic & English) */}
        <Languages />

        {/* 11. Transmission & Contact Channel */}
        <Contact />
      </main>

      {/* Command Center Footer */}
      <Footer />

      {/* Floating Quick WhatsApp Chat */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
