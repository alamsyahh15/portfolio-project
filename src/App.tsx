import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sun, Moon, Settings } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';
import { ProjectData, PersonalData } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>([
    {
      id: 1,
      title: "Enterprise E-Commerce Platform",
      description: "Comprehensive e-commerce solution built with modern architecture, featuring advanced user management, real-time inventory tracking, secure payment processing, and comprehensive analytics dashboard. Handles 10,000+ concurrent users with 99.9% uptime.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "AI-Powered Task Management Suite",
      description: "Intelligent project management platform with machine learning-driven task prioritization, automated workflow optimization, real-time collaboration tools, and predictive analytics for project delivery estimation.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "TensorFlow", "Firebase", "WebSocket", "Material-UI"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/username/taskmanager",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization platform with advanced charting capabilities, portfolio tracking, risk assessment algorithms, and automated reporting for institutional investors and financial advisors.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
      liveUrl: "https://fintech-dashboard.com",
      githubUrl: "https://github.com/username/fintech-dashboard",
      category: "Data Visualization"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      description: "HIPAA-compliant healthcare platform enabling secure patient data management, appointment scheduling, telemedicine integration, and comprehensive medical records with advanced search and reporting capabilities.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "HIPAA"],
      liveUrl: "https://healthcare-demo.com",
      githubUrl: "https://github.com/username/healthcare",
      category: "Healthcare"
    }
  ]);

  const [personalData, setPersonalData] = useState<PersonalData>({
    name: "Alexandra Chen",
    title: "Senior Full Stack Engineer",
    subtitle: "Building scalable solutions for tomorrow's challenges",
    bio: "Experienced software engineer with 8+ years of expertise in developing enterprise-grade applications. Specialized in modern web technologies, cloud architecture, and leading cross-functional teams to deliver high-impact solutions that drive business growth.",
    email: "alexandra.chen@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/alexandra-chen",
    github: "https://github.com/alexandra-chen",
    website: "https://alexandra-chen.dev",
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "React/Next.js", level: 92 },
      { name: "Node.js/Express", level: 90 },
      { name: "Python/Django", level: 88 },
      { name: "AWS/Cloud Architecture", level: 85 },
      { name: "PostgreSQL/MongoDB", level: 87 },
      { name: "Docker/Kubernetes", level: 82 },
      { name: "GraphQL/REST APIs", level: 90 }
    ],
    experience: [
      {
        company: "TechCorp Solutions",
        position: "Senior Full Stack Engineer",
        duration: "2022 - Present",
        description: "Lead development of microservices architecture serving 1M+ users. Architected and implemented scalable solutions using React, Node.js, and AWS, resulting in 40% performance improvement and $2M cost savings.",
        achievements: [
          "Led team of 6 engineers in delivering critical product features",
          "Reduced system latency by 60% through optimization initiatives",
          "Implemented CI/CD pipelines reducing deployment time by 80%"
        ]
      },
      {
        company: "InnovateLabs Inc.",
        position: "Full Stack Developer",
        duration: "2020 - 2022",
        description: "Developed and maintained multiple client-facing applications using modern web technologies. Collaborated with product and design teams to deliver user-centric solutions.",
        achievements: [
          "Built 5+ production applications from concept to deployment",
          "Improved code quality through implementation of testing strategies",
          "Mentored junior developers and conducted technical interviews"
        ]
      },
      {
        company: "StartupXYZ",
        position: "Frontend Developer",
        duration: "2018 - 2020",
        description: "Specialized in creating responsive, accessible web applications with focus on user experience and performance optimization.",
        achievements: [
          "Increased user engagement by 35% through UX improvements",
          "Implemented responsive design patterns across all products",
          "Established frontend development best practices and standards"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        school: "Stanford University",
        year: "2018",
        description: "Specialized in Software Engineering and Human-Computer Interaction"
      },
      {
        degree: "Bachelor of Science in Computer Engineering",
        school: "UC Berkeley",
        year: "2016",
        description: "Magna Cum Laude, Dean's List"
      }
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Developer",
      "Certified Kubernetes Administrator (CKA)",
      "MongoDB Certified Developer"
    ]
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    // In a real app, this would download an actual PDF
    const link = document.createElement('a');
    link.href = '/cv-placeholder.pdf';
    link.download = `${personalData.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-50 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {personalData.name.split(' ')[0]}
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Contact
              </button>
              <button
                onClick={downloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 font-medium shadow-lg hover:shadow-xl"
              >
                <Download size={18} />
                <span>Resume</span>
              </button>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsAdminMode(!isAdminMode)}
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Settings size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  Projects
                </button>
                <button onClick={() => scrollToSection('experience')} className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  Experience
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  Contact
                </button>
                <button
                  onClick={downloadCV}
                  className="flex items-center space-x-2 w-fit bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                >
                  <Download size={18} />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Admin Panel */}
      {isAdminMode && (
        <AdminPanel
          projects={projects}
          setProjects={setProjects}
          personalData={personalData}
          setPersonalData={setPersonalData}
          onClose={() => setIsAdminMode(false)}
        />
      )}

      {/* Main Content */}
      <main>
        <Hero personalData={personalData} onDownloadCV={downloadCV} />
        <About personalData={personalData} />
        <Projects projects={projects} />
        <Skills personalData={personalData} />
        <Experience personalData={personalData} />
        <Contact personalData={personalData} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              © 2024 {personalData.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;