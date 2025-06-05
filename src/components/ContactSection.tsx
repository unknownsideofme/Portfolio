
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Code2, Trophy, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "rakshit.debanjan1@gmail.com", href: "mailto:rakshit.debanjan1@gmail.com" },
    { icon: Phone, label: "Phone", value: "9693470174", href: "tel:9693470174" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/unknownsideofme", color: "hover:text-gray-600" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/debanjan-rakshit", color: "hover:text-blue-600" },
  ];

  const competitivePlatforms = [
    { icon: Code2, label: "CodeChef", href: "#", score: "1792 max", color: "hover:text-orange-600" },
    { icon: Trophy, label: "Codeforces", href: "#", score: "1457 max", color: "hover:text-blue-600" },
    { icon: Code2, label: "LeetCode", href: "#", score: "Active", color: "hover:text-yellow-600" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                    >
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-white font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Competitive Programming */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Competitive Programming</h3>
                <div className="space-y-3">
                  {competitivePlatforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.href}
                      className={`flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 ${platform.color}`}
                    >
                      <div className="flex items-center space-x-3">
                        <platform.icon className="w-5 h-5" />
                        <span className="text-white font-medium">{platform.label}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{platform.score}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
