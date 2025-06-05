
import React from 'react';
import { Github, Linkedin, Mail, Code2, Trophy, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/unknownsideofme", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/debanjan-rakshit", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rakshit.debanjan1@gmail.com", label: "Email" },
  ];

  const competitivePlatforms = [
    { name: "CodeChef", href:'https://www.codechef.com/users/mummykaisihai' , score: "1792 max" },
    { name: "Codeforces", href: "https://codeforces.com/profile/mummykaisihai", score: "1457 max" },
    { name: "LeetCode", href: "https://leetcode.com/u/mummy_kaisi_hai/", score: "Active" },
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="text-gradient">Debanjan Rakshit</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 font-medium">
                Engineer & <span className="text-gradient-blue">Problem Solver</span>
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Pre Final Year at NIT-B. <br></br>Passionate about leveraging data structures, algorithms, and machine learning 
              to develop innovative solutions. Excited to contribute to impactful projects.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="w-5 h-5 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                );
              })}
            </div>

            {/* Competitive Programming Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {competitivePlatforms.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-white font-semibold"><a href={platform.href}>{platform.name}</a></div>
                  <div className="text-gray-300 text-sm">{platform.score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-glow"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full animate-float">
                <img
                  src="/lovable-uploads/52d4c0c1-09f6-4671-8bf7-0a58d54323bf.png"
                  alt="Debanjan Rakshit"
                  className="w-80 h-80 rounded-full object-cover border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
