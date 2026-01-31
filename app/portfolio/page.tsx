"use client";

import { useState, useMemo } from "react";
import { personalData } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "AI/ML", "Web Dev", "Research"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return personalData.projects.filter((project) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "AI/ML") return project.category.includes("AI") || project.category.includes("ML");
      if (activeCategory === "Web Dev") return project.category.includes("Web");
      if (activeCategory === "Research") return project.category.includes("Research");
      return true;
    });
  }, [activeCategory]);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
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
              key={project.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group gradient-border h-[280px] flex flex-col p-6"
            >
                <div className="mb-auto">
                  <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--accent)] text-sm mb-4">{project.category}</p>
                  <p className="text-[var(--muted)] text-sm line-clamp-3 leading-6">{project.description}</p>
                </div>

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
                        className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors"
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
                        className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors"
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
    </motion.article>
  );
}
