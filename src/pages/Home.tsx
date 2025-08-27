import React from 'react';
import { Link } from 'react-router-dom';
import { projects, techStack } from '../data/stubs';
import ProjectCard from '../../components/ProjectCard';
import TechStackCard from '../../components/TechStackCard';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredProjects = projects.slice(0, 3); // Show first 3 projects

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-100 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Building Digital Experiences
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Welcome to my portfolio. I specialize in creating robust, scalable, and user-friendly web applications. Explore my projects and see how I can bring your ideas to life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/projects">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Explore Projects
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
            {/* Optional: Image or animation can go here */}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A selection of projects that showcase my skills in frontend, backend, and system design.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
            <ProjectCard title="Featured Projects" projects={featuredProjects} />
          </div>
           <div className="flex justify-center mt-12">
              <Link to="/projects">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
           <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Core Technologies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I work with a modern tech stack to build high-quality applications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 mt-12">
            <TechStackCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
