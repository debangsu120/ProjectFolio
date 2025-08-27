import { motion } from 'motion/react';
import { Sparkles, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      className="relative z-10 pt-8 pb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card glass-card-hover rounded-3xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Logo and Title */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/20">
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h1 className="font-display text-4xl lg:text-5xl font-junicode-light text-white/95 tracking-tight">
                  ProjectFolio
                </h1>
                <p className="font-sans text-lg text-white/70 mt-1 font-normal">
                  Professional Project Showcase
                </p>
              </div>
            </motion.div>

            {/* Navigation and Social Links */}
            <motion.div 
              className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Navigation */}
              <nav className="hidden lg:flex items-center gap-6">
                <a 
                  href="#projects" 
                  className="font-sans text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
                >
                  PROJECTS
                </a>
                <a 
                  href="#team" 
                  className="font-sans text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
                >
                  TEAM
                </a>
                <a 
                  href="#tech" 
                  className="font-sans text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
                >
                  TECH STACK
                </a>
              </nav>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <motion.a 
                  href="#" 
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </motion.a>
              </div>

              {/* CTA Button */}
              <motion.button
                className="glass-card glass-card-hover px-6 py-3 rounded-xl font-sans font-medium text-sm text-white/90 hover:text-white tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT US
              </motion.button>
            </motion.div>
          </div>

          {/* Subtitle with enhanced typography */}
          <motion.div 
            className="mt-6 pt-6 border-t border-white/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="font-display text-xl lg:text-2xl font-junicode-light text-white/80 max-w-3xl leading-relaxed">
              Showcasing innovative solutions through cutting-edge technology and collaborative excellence.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-sans text-sm text-white/60 font-medium">ACTIVE</span>
              </div>
              <div className="font-mono text-xs text-white/50 tracking-wider">
                EST. 2021
              </div>
              <div className="font-mono text-xs text-white/50 tracking-wider">
                v2.0.1
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}