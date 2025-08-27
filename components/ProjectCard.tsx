import { motion } from 'motion/react';
import { ExternalLink, Clock, Code, Users, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  type: string;
  description?: string;
}

interface ProjectCardProps {
  title: string;
  projects: Project[];
  isPersonal?: boolean;
}

export default function ProjectCard({ title, projects, isPersonal = false }: ProjectCardProps) {
  const getProjectIcon = (type: string) => {
    if (type.includes('hackathon')) return <Sparkles className="w-4 h-4" />;
    if (type.includes('ecommerce')) return <Code className="w-4 h-4" />;
    if (type.includes('cab') || type.includes('practice')) return <Users className="w-4 h-4" />;
    if (type.includes('ML') || type.includes('agro')) return <Clock className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

  return (
    <motion.div
      className="glass-card glass-card-hover mobile-scrollable-glass rounded-3xl p-6 lg:p-8 h-fit"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20">
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-junicode-medium text-white/95 tracking-tight">{title}</h2>
            <p className="font-sans text-sm text-white/60 font-medium mt-1">
              {projects.length} Active Project{projects.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
        {isPersonal && (
          <div className="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/30" />
        )}
      </div>

      <div className="mobile-scroll-content">
        <div className="space-y-4 lg:space-y-6 pb-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10">
                <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {getProjectIcon(project.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-junicode-medium text-white/95 mb-1 group-hover:text-white transition-colors tracking-tight">
                    {project.name}
                  </h3>
                  <p className="font-sans text-sm text-white/60 group-hover:text-white/70 transition-colors mb-2 font-medium tracking-wide">
                    {project.type.toUpperCase()}
                  </p>
                  {project.description && (
                    <p className="font-sans text-sm text-white/50 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="w-full mt-6 lg:mt-8 py-4 px-6 glass-card glass-card-hover rounded-xl font-sans font-semibold text-sm text-white/80 hover:text-white transition-all tracking-wide"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          VIEW ALL PROJECTS
        </motion.button>
      </div>
    </motion.div>
  );
}