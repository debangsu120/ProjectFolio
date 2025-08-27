import { motion } from 'motion/react';
import { ExternalLink, Clock, Code, Users, Sparkles, User, Crown, Zap } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  type: string;
  description?: string;
  category?: string;
}

interface MemberProjectCardProps {
  memberName: string;
  projects: Project[];
  isAdmin?: boolean;
}

export default function MemberProjectCard({ memberName, projects, isAdmin = false }: MemberProjectCardProps) {
  const getProjectIcon = (type: string) => {
    if (type.includes('hackathon')) return <Sparkles className="w-4 h-4" />;
    if (type.includes('ecommerce')) return <Code className="w-4 h-4" />;
    if (type.includes('cab') || type.includes('practice')) return <Users className="w-4 h-4" />;
    if (type.includes('ML') || type.includes('agro')) return <Clock className="w-4 h-4" />;
    if (type.includes('fintech')) return <Zap className="w-4 h-4" />;
    if (type.includes('health')) return <Users className="w-4 h-4" />;
    if (type.includes('IoT')) return <Clock className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

  const getMemberIcon = () => {
    if (isAdmin) return <Crown className="w-5 h-5 text-yellow-400" />;
    return <User className="w-5 h-5 text-blue-400" />;
  };

  const getMemberColor = () => {
    if (memberName.includes('Debangsu')) return 'from-yellow-500/20 to-orange-500/20 border-yellow-400/20';
    if (memberName.includes('Rupam')) return 'from-green-500/20 to-emerald-500/20 border-green-400/20';
    if (memberName.includes('Arindam')) return 'from-purple-500/20 to-pink-500/20 border-purple-400/20';
    return 'from-blue-500/20 to-cyan-500/20 border-blue-400/20';
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
          <div className={`p-2 rounded-lg bg-gradient-to-br ${getMemberColor()}`}>
            {getMemberIcon()}
          </div>
          <div>
            <h2 className="font-display text-2xl font-junicode-medium text-white/95 tracking-tight">
              {memberName}
            </h2>
            <p className="font-sans text-sm text-white/60 font-medium mt-1">
              {projects.length} Project{projects.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
        {isAdmin && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/30"></div>
            <span className="font-mono text-xs text-white/60 tracking-wider">ADMIN</span>
          </div>
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
                  <div className="flex items-start justify-between gap-2">
                    <div>
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="w-full mt-6 lg:mt-8 py-4 px-6 glass-card glass-card-hover rounded-xl font-sans font-semibold text-sm text-white/80 hover:text-white transition-all tracking-wide"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          VIEW {memberName.split(' ')[0].toUpperCase()}'S WORK
        </motion.button>
      </div>
    </motion.div>
  );
}