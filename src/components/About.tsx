import { Award, BookOpen, Target, Users } from 'lucide-react';
import { PersonalData } from '../types';

interface AboutProps {
  personalData: PersonalData;
}

export default function About({ personalData }: AboutProps) {
  const stats = [
    { icon: Target, label: 'Years Experience', value: '5+', color: 'text-blue-600' },
    { icon: Users, label: 'Projects Completed', value: '50+', color: 'text-purple-600' },
    { icon: Award, label: 'Certifications', value: personalData.certifications.length.toString(), color: 'text-green-600' },
    { icon: BookOpen, label: 'Technologies', value: personalData.skills.length.toString(), color: 'text-orange-600' }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions that make a difference. 
            Here's a glimpse into my journey and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Building the Future, One Line of Code at a Time
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalData.bio}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My approach combines technical excellence with strategic thinking, ensuring that every solution 
                not only meets current requirements but scales for future growth. I believe in writing clean, 
                maintainable code and fostering collaborative environments where innovation thrives.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h4>
              {personalData.education.map((edu, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h5>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{edu.year}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">{edu.school}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <Award className="text-green-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700">
                <div className={`inline-flex p-4 rounded-xl bg-gray-50 dark:bg-gray-700 mb-4`}>
                  <stat.icon className={`${stat.color} w-8 h-8`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-12 rounded-2xl">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Development Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">User-Centric</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Quality First</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Clean, maintainable code with comprehensive testing and documentation standards.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Collaborative</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Strong believer in teamwork, knowledge sharing, and continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}