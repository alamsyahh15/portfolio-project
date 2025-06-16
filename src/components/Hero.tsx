import React from 'react';
import { Download, MapPin, Mail, Phone, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';
import { PersonalData } from '../types';

interface HeroProps {
  personalData: PersonalData;
  onDownloadCV: () => void;
}

export default function Hero({ personalData, onDownloadCV }: HeroProps) {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Hello, I'm </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  {personalData.name.split(' ')[0]}
                </span>
              </h1>
              
              <div className="space-y-3">
                <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
                  {personalData.title}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                  {personalData.subtitle}
                </p>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                {personalData.bio}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-600" />
                <span className="font-medium">{personalData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-purple-600" />
                <span className="font-medium">{personalData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-green-600" />
                <span className="font-medium">{personalData.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={onDownloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-medium"
              >
                Let's Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href={personalData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={personalData.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt={personalData.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">8+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}