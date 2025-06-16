import { Award, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { PersonalData } from '../types';

interface ExperienceProps {
  personalData: PersonalData;
}

export default function Experience({ personalData }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A track record of delivering exceptional results and driving innovation 
            across diverse projects and organizations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {personalData.experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:block"></div>
                
                <div className="md:ml-20">
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                          <MapPin size={16} />
                          <span className="font-semibold text-lg">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Award className="text-green-600" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements</h4>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <TrendingUp className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-12 rounded-2xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Career Highlights
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Measurable impact and continuous growth throughout my professional journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Team Members Led</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}