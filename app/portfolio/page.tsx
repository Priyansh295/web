"use client";

import { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { personalData } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "AI/ML", "Web Dev", "Research"];

function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return personalData.projects.filter((project) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "AI/ML") return project.category.includes("AI") || project.category.includes("ML");
      if (activeCategory === "Web Dev") return project.category.includes("Web");
      if (activeCategory === "Research") return project.category.includes("Research");
      return true;
    });
  }, [activeCategory]);

  const selectedProject = personalData.projects.find(p => p.title === selectedId);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6 relative w-fit">
          Portfolio
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 30 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute h-[3px] bg-[var(--accent)] bottom-[-10px] left-0 rounded-md"
          />
        </h2>
      </motion.header>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-4 mb-8"
      >
        {categories.map((category, index) => (
          <motion.li
            key={category}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            <button
              onClick={() => setActiveCategory(category)}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative px-3 py-1.5 rounded-lg",
                activeCategory === category
                  ? "text-[var(--accent)] bg-[var(--accent)]/10"
                  : "text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"
              )}
            >
              {category}
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layoutId={`card-container-${project.title}`}
              key={project.title}
              onClick={() => setSelectedId(project.title)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group gradient-border h-[280px] flex flex-col p-6 cursor-pointer"
            >
              <motion.div className="mb-auto">
                <motion.h3 
                  layoutId={`card-title-${project.title}`}
                  className="text-xl font-bold dark:text-white text-gray-800 mb-2 group-hover:text-[var(--accent)] transition-colors"
                >
                  {project.title}
                </motion.h3>
                <motion.p layoutId={`card-category-${project.title}`} className="text-[var(--accent)] text-sm mb-4">{project.category}</motion.p>
                <motion.p className="text-[var(--muted)] text-sm line-clamp-3 leading-6">{project.description}</motion.p>
              </motion.div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs text-[var(--muted)] bg-[var(--background)] dark:bg-[#0f0f0f] border border-[var(--card-border)] px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-[var(--muted)] px-2 py-1">+{project.tech.length - 3}</span>
                  )}
                </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <Portal>
          <div className="fixed inset-0 z-[999] grid place-items-center overflow-y-auto pt-20 pb-10 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              style={{ zIndex: -1 }}
            />
            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="w-full max-w-2xl bg-[var(--background)] dark:bg-[#1e1e1f] rounded-2xl p-6 shadow-2xl relative gradient-border border-[var(--card-border)] overflow-hidden flex flex-col max-h-[85vh]"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors z-20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>

              <div className="overflow-y-auto pr-2 custom-scrollbar">
                <motion.h3 
                  layoutId={`card-title-${selectedId}`}
                  className="text-2xl font-bold dark:text-white text-gray-800 mb-2"
                >
                  {selectedProject.title}
                </motion.h3>
                <motion.p layoutId={`card-category-${selectedId}`} className="text-[var(--accent)] font-medium mb-6">{selectedProject.category}</motion.p>

                {selectedProject.details?.status && (
                   <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 border border-green-500/20">
                      {selectedProject.details.status}
                    </span>
                   </div>
                )}
                
                <div className="space-y-6">
                  {/* Tech Stack in Expanded View */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.tech.map((tech, i) => (
                         <span 
                           key={i} 
                           className="text-sm text-[var(--muted)] bg-[var(--background)] dark:bg-[#0f0f0f] border border-[var(--card-border)] px-3 py-1 rounded-full"
                         >
                           {tech}
                         </span>
                       ))}
                    </div>
                  </motion.div>

                  {selectedProject.details?.problem && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">Problem</h4>
                      <p className="text-[var(--muted)] leading-relaxed">{selectedProject.details.problem}</p>
                    </motion.div>
                  )}

                  {selectedProject.details?.solution && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">Technical Innovation</h4>
                      <p className="text-[var(--muted)] leading-relaxed">{selectedProject.details.solution}</p>
                      
                      {selectedProject.details?.features && (
                        <ul className="mt-3 space-y-2">
                           {selectedProject.details.features.map((feature, i) => (
                             <li key={i} className="flex items-start text-[var(--muted)] text-sm">
                               <span className="mr-2 text-[var(--accent)]">•</span>
                               {feature}
                             </li>
                           ))}
                        </ul>
                      )}
                    </motion.div>
                  )}

                  {selectedProject.details?.results && (
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.4 }}
                       className="bg-[var(--accent)]/5 rounded-xl p-4 border border-[var(--accent)]/10"
                     >
                       <h4 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">Key Results</h4>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {selectedProject.details.results.map((result, i) => (
                           <div key={i} className="flex items-center space-x-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                             <span className="text-[var(--muted)] text-sm font-medium">{result}</span>
                           </div>
                         ))}
                       </div>
                     </motion.div>
                  )}

                  {selectedProject.details?.authors && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-xs text-[var(--muted)] pt-4 border-t border-[var(--card-border)]"
                    >
                      <span className="font-semibold text-gray-500 dark:text-gray-400">Authors:</span> {selectedProject.details.authors}
                    </motion.div>
                  )}
                </div>

                <motion.div 
                  className="flex gap-3 mt-8 pt-4 border-t border-[var(--card-border)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors font-medium text-sm"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-medium text-sm"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
          </Portal>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
