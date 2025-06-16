import React, { useState } from 'react';
import { X, Plus, Edit, Trash2, Save, User, Briefcase, Award, GraduationCap } from 'lucide-react';
import { ProjectData, PersonalData } from '../types';

interface AdminPanelProps {
  projects: ProjectData[];
  setProjects: (projects: ProjectData[]) => void;
  personalData: PersonalData;
  setPersonalData: (data: PersonalData) => void;
  onClose: () => void;
}

export default function AdminPanel({ projects, setProjects, personalData, setPersonalData, onClose }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'personal' | 'skills' | 'experience'>('projects');
  const [editingProject, setEditingProject] = useState<ProjectData | null>(null);
  const [newProject, setNewProject] = useState<Partial<ProjectData>>({});
  const [isAddingProject, setIsAddingProject] = useState(false);

  const handleSaveProject = () => {
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
      setEditingProject(null);
    } else if (newProject.title && newProject.description) {
      const id = Math.max(...projects.map(p => p.id), 0) + 1;
      setProjects([...projects, { 
        id, 
        title: newProject.title || '',
        description: newProject.description || '',
        image: newProject.image || 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: newProject.technologies || [],
        liveUrl: newProject.liveUrl,
        githubUrl: newProject.githubUrl,
        category: newProject.category || 'Other'
      }]);
      setNewProject({});
      setIsAddingProject(false);
    }
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handlePersonalDataChange = (field: keyof PersonalData, value: any) => {
    setPersonalData({ ...personalData, [field]: value });
  };

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'experience', label: 'Experience', icon: GraduationCap }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Content Management</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Manage Projects</h3>
                <button
                  onClick={() => setIsAddingProject(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <Plus size={16} />
                  <span>Add Project</span>
                </button>
              </div>

              {/* Add/Edit Project Form */}
              {(isAddingProject || editingProject) && (
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {editingProject ? 'Edit Project' : 'Add New Project'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Project Title"
                      value={editingProject?.title || newProject.title || ''}
                      onChange={(e) => editingProject 
                        ? setEditingProject({...editingProject, title: e.target.value})
                        : setNewProject({...newProject, title: e.target.value})
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    <select
                      value={editingProject?.category || newProject.category || ''}
                      onChange={(e) => editingProject 
                        ? setEditingProject({...editingProject, category: e.target.value})
                        : setNewProject({...newProject, category: e.target.value})
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select Category</option>
                      <option value="Full Stack">Full Stack</option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Mobile">Mobile</option>
                      <option value="AI/ML">AI/ML</option>
                      <option value="Data Visualization">Data Visualization</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={editingProject?.image || newProject.image || ''}
                    onChange={(e) => editingProject 
                      ? setEditingProject({...editingProject, image: e.target.value})
                      : setNewProject({...newProject, image: e.target.value})
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <textarea
                    placeholder="Project Description"
                    rows={4}
                    value={editingProject?.description || newProject.description || ''}
                    onChange={(e) => editingProject 
                      ? setEditingProject({...editingProject, description: e.target.value})
                      : setNewProject({...newProject, description: e.target.value})
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Technologies (comma separated)"
                    value={editingProject?.technologies.join(', ') || newProject.technologies?.join(', ') || ''}
                    onChange={(e) => {
                      const techs = e.target.value.split(',').map(t => t.trim()).filter(Boolean);
                      editingProject 
                        ? setEditingProject({...editingProject, technologies: techs})
                        : setNewProject({...newProject, technologies: techs});
                    }}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Live URL (optional)"
                      value={editingProject?.liveUrl || newProject.liveUrl || ''}
                      onChange={(e) => editingProject 
                        ? setEditingProject({...editingProject, liveUrl: e.target.value})
                        : setNewProject({...newProject, liveUrl: e.target.value})
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="GitHub URL (optional)"
                      value={editingProject?.githubUrl || newProject.githubUrl || ''}
                      onChange={(e) => editingProject 
                        ? setEditingProject({...editingProject, githubUrl: e.target.value})
                        : setNewProject({...newProject, githubUrl: e.target.value})
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleSaveProject}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                    >
                      <Save size={16} />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => {
                        setEditingProject(null);
                        setNewProject({});
                        setIsAddingProject(false);
                      }}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Projects List */}
              <div className="grid gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{project.title}</h4>
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded">
                              +{project.technologies.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => setEditingProject(project)}
                          className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'personal' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={personalData.name}
                    onChange={(e) => handlePersonalDataChange('name', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={personalData.title}
                    onChange={(e) => handlePersonalDataChange('title', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subtitle</label>
                  <input
                    type="text"
                    value={personalData.subtitle}
                    onChange={(e) => handlePersonalDataChange('subtitle', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={personalData.email}
                    onChange={(e) => handlePersonalDataChange('email', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                  <input
                    type="text"
                    value={personalData.phone}
                    onChange={(e) => handlePersonalDataChange('phone', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    value={personalData.location}
                    onChange={(e) => handlePersonalDataChange('location', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">LinkedIn URL</label>
                  <input
                    type="url"
                    value={personalData.linkedin}
                    onChange={(e) => handlePersonalDataChange('linkedin', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">GitHub URL</label>
                  <input
                    type="url"
                    value={personalData.github}
                    onChange={(e) => handlePersonalDataChange('github', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Website URL</label>
                  <input
                    type="url"
                    value={personalData.website}
                    onChange={(e) => handlePersonalDataChange('website', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio</label>
                  <textarea
                    value={personalData.bio}
                    onChange={(e) => handlePersonalDataChange('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}