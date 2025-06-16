export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  description: string;
}

export interface PersonalData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
}