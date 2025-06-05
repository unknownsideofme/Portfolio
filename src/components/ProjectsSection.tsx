import React from 'react';
import { ExternalLink, Github, Award, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { link } from 'fs';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Similarity and Linguistic Filtering for Title Examination (SLIF-TEX)",
      description: "Developed an efficient title filtering and reviewing model utilizing LLM and LangChain, aimed at enabling the Ministry of Information and Broadcasting to assess new title submissions against a comprehensive database of 160,000 titles.",
      achievements: "Winning Project in SIH Grande Finale 2024 [Team Leader]",
      techStack: ["HTML", "CSS", "JavaScript", "ReactJS", "ExpressJS", "MongoDB", "LangChain", "LLM (llama)", "Python", "FastAPI"],
      category: "Machine Learning",
      featured: true,
      link:"https://github.com/unknownsideofme/SLIFTEX"
    },
    {
      title: "Crop Price Predictor Model",
      description: "Built a web-based model for Ministry of Agriculture to predict future prices of 22 essential crops using machine learning algorithms like ARIMA, providing insights to farmers, traders and policymakers.",
      techStack: ["HTML", "CSS", "JavaScript", "ReactJS", "TensorFlow", "Statstools", "Matplotlib", "Pandas", "NumPy", "Python", "FastAPI"],
      category: "Machine Learning",
      link:"http://github.com/unknownsideofme/Horticultural_Price_Predictor"
    },
    {
      title: "Crop Disease Prediction",
      description: "Built a web-based model for farmers to identify crop diseases by uploading photographs and stating symptoms. Achieved 3rd position and Innovation Award in Smart Innovate Hackathon.",
      achievements: "3rd position and received Innovation Award in Smart Innovate Hackathon",
      techStack: ["HTML", "CSS", "JavaScript", "ReactJS", "Python", "FastAPI", "LangChain", "Ollama", "Hugging Face", "ChatGPT API"],
      category: "Machine Learning",
      link:"https://github.com/unknownsideofme/PLANTID"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my expertise in machine learning, web development, and problem-solving.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${project.featured ? 'border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50' : 'bg-white'}`}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <div className="flex items-center mt-2">
                            <Award className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium text-yellow-600">Featured Project</span>
                          </div>
                        )}
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                        <Code2 className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    {project.achievements && (
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-green-600 mr-2" />
                          <span className="text-green-800 font-medium">{project.achievements}</span>
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium hover:from-purple-200 hover:to-pink-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://github.com/unknownsideofme" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
