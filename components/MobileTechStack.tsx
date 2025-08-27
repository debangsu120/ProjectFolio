import { motion } from 'motion/react';
import { Code2, Database, Globe, Smartphone, Cpu, Cloud } from 'lucide-react';

export default function MobileTechStack() {
  const techCategories = [
    {
      category: "Frontend",
      icon: <Globe className="w-4 h-4" />,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/20",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: <Database className="w-4 h-4" />,
      color: "from-green-500/20 to-emerald-500/20", 
      borderColor: "border-green-400/20",
      technologies: ["Node.js", "Python", "Django", "Express", "FastAPI"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-4 h-4" />,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/20",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      category: "DevOps",
      icon: <Cloud className="w-4 h-4" />,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/20",
      technologies: ["Docker", "AWS", "Vercel", "Git", "CI/CD"]
    },
    {
      category: "AI/ML",
      icon: <Cpu className="w-4 h-4" />,
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-400/20",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"]
    },
    {
      category: "Tools",
      icon: <Code2 className="w-4 h-4" />,
      color: "from-slate-500/20 to-gray-500/20",
      borderColor: "border-gray-400/20",
      technologies: ["VS Code", "Figma", "Postman", "Notion", "Slack"]
    }
  ];

  return (
    <motion.div
      className="glass-card rounded-3xl p-6 lg:hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/20">
          <Code2 className="w-6 h-6 text-indigo-400" />
        </div>
        <h2 className="text-xl font-semibold text-white/90">Tech Stack</h2>
      </div>

      <div className="mobile-scroll-container space-y-4">
        {techCategories.map((tech, index) => (
          <motion.div
            key={tech.category}
            className="triangle-glass-card triangle-glass-card-hover"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${tech.color} border ${tech.borderColor}`}>
                {tech.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-white/90 mb-3">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((techItem, techIndex) => (
                    <motion.span
                      key={techItem}
                      className="px-2 py-1 text-xs rounded-lg bg-white/10 border border-white/20 text-white/80 hover:bg-white/15 hover:text-white/90 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.1 + techIndex * 0.05 }}
                    >
                      {techItem}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Experience indicator */}
        <motion.div
          className="glass-card rounded-2xl p-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: techCategories.length * 0.1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/30"></div>
            <p className="text-sm font-medium text-white/80">3+ Years Experience</p>
          </div>
          <p className="text-xs text-white/60">Full-stack development across multiple domains</p>
        </motion.div>
      </div>
    </motion.div>
  );
}