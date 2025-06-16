import { Cloud, Code, Database, Globe, Smartphone, Zap } from 'lucide-react';
import { PersonalData } from '../types';

interface SkillsProps {
  personalData: PersonalData;
}

export default function Skills({ personalData }: SkillsProps) {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      skills: personalData.skills.filter(skill => 
        ['JavaScript/TypeScript', 'React/Next.js', 'Vue.js', 'Laravel', 'Flutter', 'Kotlin'].some(tech => skill.name.includes(tech.split('/')[0]))
      )
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      skills: personalData.skills.filter(skill => 
        ['Node.js', 'Golang', 'PostgreSQL', 'MongoDB', 'GraphQL'].some(tech => skill.name.includes(tech.split('/')[0]))
      )
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      skills: personalData.skills.filter(skill => 
        ['AWS', 'Docker', 'Kubernetes'].some(tech => skill.name.includes(tech.split('/')[0]))
      )
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks, 
            constantly evolving with industry best practices.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-xl ${category.bgColor}`}>
                  <category.icon className={`${category.color} w-6 h-6`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          category.color.includes('blue') ? 'from-blue-500 to-blue-600' :
                          category.color.includes('purple') ? 'from-purple-500 to-purple-600' :
                          'from-green-500 to-green-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Overview */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-12 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Technology Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Proficient across the full development lifecycle with expertise in modern frameworks, 
              cloud platforms, and emerging technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {personalData.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group border border-gray-200 dark:border-gray-600"
              >
                <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {skill.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}% Proficiency
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Philosophy */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technology Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="text-white w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Performance First</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Optimizing for speed, efficiency, and scalability in every solution.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Globe className="text-white w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Modern Standards</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Embracing cutting-edge technologies while maintaining stability.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Smartphone className="text-white w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">User Experience</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating intuitive, accessible interfaces across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}