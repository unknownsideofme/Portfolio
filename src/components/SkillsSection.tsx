
import React from 'react';
import { Code2, Database, Brain, Users, Trophy, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const competitiveProgramming = [
    { platform: "CodeChef", rating: "1792 max", elo : "🌟🌟🌟" , color: "from-orange-500 to-red-500" },
    { platform: "Codeforces", rating: "1485 max", elo :"Specialist", color: "from-blue-500 to-purple-500" },
    { platform: "LeetCode", rating: "200+",elo:"Problems", color: "from-yellow-500 to-orange-500 " },
  ];

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code2,
      skills: [
        { name: "Data Structures & Algorithms", description: "Proficient in C++" },
        { name: "Web Development", description: "HTML, CSS, JavaScript, React, Express, Node" },
        { name: "Machine Learning", description: "Scikit-Learn, TensorFlow" },
        { name: "Data Analysis", description: "Pandas, NumPy, Matplotlib, Seaborn" },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Problem Solving" },
        { name: "Leadership" },
        { name: "Communication Skills" },
        { name: "Team Collaboration" },
      ]
    }
  ];

  const certifications = [
    "Summer Training in Machine Learning, IIIT Allahabad",
    "FreeCodeCamp Certifications: Machine Learning, Data Analysis with Python, JavaScript"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Competitive Programming Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white ml-4">Competitive Programming</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {competitiveProgramming.map((platform, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${platform.color} p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 shadow-xl`}
                  >
                    
                    <div className="text-white text-2xl font-semibold tracking-wide mb-1">
                      {platform.platform}
                    </div>

                    
                    <div className="text-white/90 text-lg font-medium mt-1">
                      {platform.elo}
                    </div>

                    
                    <div className="text-white/80 text-sm mt-1 tracking-tight">
                      {platform.rating}
                    </div>
                  </div>
                ))}
              </div>

            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:bg-gradient-to-br hover:from-gray-750 hover:to-gray-850 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">{category.title}</h3>
                </div>

                <div className="grid gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-600/50 transition-colors duration-200">
                      <h4 className="text-white font-medium text-lg mb-1">{skill.name}</h4>
                      {skill.description && (
                        <p className="text-gray-300 text-sm">{skill.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white ml-4">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-lg hover:from-purple-800/50 hover:to-pink-800/50 transition-all duration-300 border border-purple-500/20">
                  <p className="text-gray-200 text-lg leading-relaxed">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
