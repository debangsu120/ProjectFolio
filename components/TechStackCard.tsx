import { motion } from 'motion/react';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

interface TechStack {
  category: string;
  technologies: string[];
  icon: React.ReactNode;
}

export default function TechStackCard() {
  const techStacks: TechStack[] = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: <Globe className="w-5 h-5" />
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Django", "Express", "FastAPI"],
      icon: <Database className="w-5 h-5" />
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      category: "DevOps & Tools",
      technologies: ["Git", "Docker", "AWS", "Figma", "Vercel", "CI/CD"],
      icon: <Code2 className="w-5 h-5" />
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
      icon: <Database className="w-5 h-5" />
    },
    {
      category: "AI/ML",
      technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn"],
      icon: <Code2 className="w-5 h-5" />
    }
  ];

  return (
    <motion.div
      className="glass-card glass-card-hover mobile-scrollable-glass rounded-3xl p-6 lg:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6 lg:mb-8">
        <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-400/20">
          <Code2 className="w-6 h-6 text-purple-400" />
        </div>
        <h2 className="text-xl font-semibold text-white/90">Tech Stack</h2>
      </div>

      <div className="mobile-scroll-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pb-4">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              className="group p-4 rounded-lg hover:bg-white/5 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {stack.icon}
                </div>
                <h3 className="font-medium text-white/90">{stack.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white/80 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}