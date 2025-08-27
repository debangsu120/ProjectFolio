import { Code, Database, Brush, GitMerge, Cloud, TestTube } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  type: string;
  description?: string;
}

export interface TechCategory {
  category: string;
  technologies: string[];
  icon?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    type: 'ecommerce project',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
  },
  {
    id: '2',
    name: 'Task Management App',
    type: 'productivity project',
    description: 'A collaborative task management application with real-time updates.',
  },
  {
    id: '3',
    name: 'Weather Dashboard',
    type: 'backend project',
    description: 'A weather application with location-based forecasts and interactive maps.',
  },
  {
    id: '4',
    name: 'Portfolio Website',
    type: 'frontend project',
    description: 'A modern portfolio website built with React and Tailwind CSS.',
  },
];

export const techStack: TechCategory[] = [
  {
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express', 'Python', 'Django'],
  },
  {
    category: 'Database',
    technologies: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
  },
  {
    category: 'Tools',
    technologies: ['Git', 'Docker', 'AWS', 'Vercel'],
  },
];