import { motion } from 'motion/react';
import { ExternalLink, Clock, Code, Users, Sparkles, Star, Zap } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  type: string;
  description?: string;
  category?: string;
}

interface MobileProjectsScrollProps {
  codeForgerProjects: Project[];
  personalProjects: Project[];
}

export default function MobileProjectsScroll({ codeForgerProjects, personalProjects }: MobileProjectsScrollProps) {
  const getProjectIcon = (type: string) => {
    if (type.includes('hackathon')) return <Sparkles className="w-4 h-4" />;
    if (type.includes('ecommerce')) return <Code className="w-4 h-4" />;
    if (type.includes('cab') || type.includes('practice')) return <Users className="w-4 h-4" />;
    if (type.includes('ML') || type.includes('agro')) return <Clock className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

  const getCategoryIcon = (category?: string) => {
    if (category?.includes('Admin')) return <Star className="w-4 h-4 text-yellow-400" />;
    return <Zap className="w-4 h-4 text-blue-400" />;
  };

  const allProjects = [
    ...codeForgerProjects.map(p => ({ ...p, section: 'CodeForgers' })),
    ...personalProjects.map(p => ({ ...p, section: 'Personal' }))
  ];

  return (
    <motion.div
      className="glass-card rounded-3xl p-6 lg:hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/20">
          <Code className="w-6 h-6 text-blue-400" />
        </div>
        <h2 className="text-xl font-semibold text-white/90">All Projects</h2>
      </div>

      <div className="mobile-scroll-container space-y-4">
        {allProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="triangle-glass-card triangle-glass-card-hover cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-2 rounded-lg bg-white/10 border border-white/20">
                {getProjectIcon(project.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-white/90">{project.name}</h3>
                  {project.section === 'Personal' && project.category && (
                    <div className="flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-white/70">
                    {project.section}
                  </span>
                  <span className="text-sm text-white/60">{project.type}</span>
                </div>

                {project.description && (
                  <p className="text-xs text-white/50 mb-2">{project.description}</p>
                )}

                {project.category && (
                  <p className="text-xs text-white/40">by {project.category}</p>
                )}
              </div>
              
              <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0" />
            </div>
          </motion.div>
        ))}

        {/* Load more indicator */}
        <motion.div
          className="glass-card rounded-2xl p-4 text-center border-dashed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: allProjects.length * 0.05 }}
        >
          <p className="text-sm text-white/60">Scroll to see more projects</p>
          <div className="flex justify-center mt-2">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full"></div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="w-full mt-6 py-3 px-6 glass-card glass-card-hover rounded-xl text-sm font-medium text-white/80 hover:text-white transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View All Project Details
      </motion.button>
    </motion.div>
  );
}