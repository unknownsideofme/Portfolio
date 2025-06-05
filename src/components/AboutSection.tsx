
import React from 'react';
import { GraduationCap, Trophy, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const education = {
    degree: "Bachelors in Technology (Electronics and Communication Engineering)",
    institution: "Maulana Azad National Institute of Technology, Bhopal",
    gpa: "9.12",
    year: "2023-27",
    location: "Bhopal, Madhya Pradesh"
  };

  const achievements = [
    { title: "Smart India Hackathon", detail: "Winner, 2024", icon: Trophy },
    { title: "IIT Mandi Dementia 2025", detail: "Rank 48", icon: Code2 },
    { title: "Smart Innovate Hackathon", detail: "3rd position and Innovation Award", icon: Trophy },
    { title: "NTSE 2020", detail: "Qualified for Round 2", icon: GraduationCap },
  ];

  const previousEducation = [
    { level: "Intermediate (CBSE, 2023)", school: "Leeds Asian School", score: "93.5%" },
    { level: "Matriculation (CBSE, 2021)", school: "G.D. Goenka Public School", score: "95%" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{education.degree}</h4>
                  <p className="text-gray-700 font-medium">{education.institution}</p>
                  <div className="flex justify-between mt-3">
                    <span className="text-sm text-gray-600">{education.location}</span>
                    <span className="text-sm text-gray-600">{education.year}</span>
                  </div>
                  <div className="mt-3">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      CGPA: {education.gpa}
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-4 text-lg">Previous Education</h5>
                  <div className="space-y-4">
                    {previousEducation.map((edu, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium text-gray-900">{edu.level}</div>
                            <div className="text-sm text-gray-600">{edu.school}</div>
                          </div>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Achievements</h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                      <achievement.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm">{achievement.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
