"use client";

import { useState } from "react";
import { personalData } from "@/lib/data";
import { Eye, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "AI/ML", "Web Dev", "Research"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = personalData.projects.filter(project => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI/ML") return project.category.includes("AI") || project.category.includes("ML");
    if (activeCategory === "Web Dev") return project.category.includes("Web");
    if (activeCategory === "Research") return project.category.includes("Research");
    return true;
  });

  return (
    <article className="page-transition">
      <header className="mb-8">
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6 relative w-fit after:content-[''] after:absolute after:h-[3px] after:w-[30px] dark:after:bg-[#ffdb70] after:bg-blue-600 after:bottom-[-10px] after:left-0 after:rounded-md">Portfolio</h2>
      </header>

      <ul className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
            <li key={category}>
                <button
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "text-sm font-medium transition-colors dark:hover:text-[#ffdb70] hover:text-blue-600",
                        activeCategory === category ? "dark:text-[#ffdb70] text-blue-600" : "dark:text-white/70 text-gray-500"
                    )}
                >
                    {category}
                </button>
            </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
            <div key={idx} className="group relative dark:bg-[#2b2b2c] bg-gray-50 rounded-2xl overflow-hidden border dark:border-white/5 border-gray-200 hover:shadow-xl transition-all h-[250px] flex flex-col p-6">
                
                <div className="absolute top-4 right-4 dark:bg-[#1e1e1f] bg-white p-2 rounded-lg dark:text-[#ffdb70] text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Eye size={20} />
                </div>

                <div className="mb-auto">
                    <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-2">{project.title}</h3>
                    <p className="dark:text-[#ffdb70] text-blue-600 text-sm mb-4">{project.category}</p>
                    <p className="dark:text-white/60 text-gray-600 text-sm line-clamp-3 leading-6">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 3).map((tech, tIdx) => (
                         <span key={tIdx} className="text-xs dark:text-white/50 text-gray-500 dark:bg-[#1e1e1f] bg-white border dark:border-transparent border-gray-200 px-2 py-1 rounded-md">{tech}</span>
                    ))}
                    {project.tech.length > 3 && <span className="text-xs dark:text-white/50 text-gray-500 px-2 py-1">+{project.tech.length - 3}</span>}
                </div>
            </div>
        ))}
      </div>
    </article>
  );
}
