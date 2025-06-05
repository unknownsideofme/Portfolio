
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Debanjan Rakshit. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, JavaScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
