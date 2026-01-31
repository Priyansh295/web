"use client";

import { personalData } from "@/lib/data";
import { BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Resume() {
  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants} className="mb-8">
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6 relative w-fit">
          Resume
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 30 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute h-[3px] bg-[var(--accent)] bottom-[-10px] left-0 rounded-md"
          />
        </h2>
      </motion.header>

      <motion.section variants={itemVariants} className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-2.5 bg-[var(--card-bg)] dark:bg-[#1a1a1a] rounded-xl text-[var(--accent)] shadow-md border border-[var(--card-border)]"
          >
            <BookOpen size={20} />
          </motion.div>
          <h3 className="text-2xl font-bold dark:text-white text-gray-800">Education</h3>
        </div>

        <div className="border-l border-[var(--card-border)] ml-5 space-y-8 pb-4">
          {personalData.education.map((edu, idx) => (
            <TimelineItem
              key={idx}
              title={edu.institution}
              subtitle={edu.degree}
              period={edu.period}
              description={edu.score}
              index={idx}
            />
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-2.5 bg-[var(--card-bg)] dark:bg-[#1a1a1a] rounded-xl text-[var(--accent)] shadow-md border border-[var(--card-border)]"
          >
            <Briefcase size={20} />
          </motion.div>
          <h3 className="text-2xl font-bold dark:text-white text-gray-800">Experience</h3>
        </div>

        <div className="border-l border-[var(--card-border)] ml-5 space-y-8 pb-4">
          {personalData.experience.map((exp, idx) => (
            <TimelineItem
              key={idx}
              title={exp.role}
              subtitle={exp.company}
              period={exp.period}
              description={exp.description}
              index={idx}
            />
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">My Skills</h3>
        <div className="bg-[var(--card-bg)] dark:bg-[#1a1a1a] p-8 rounded-2xl border border-[var(--card-border)] shadow-md">
          <div className="space-y-6">
            {personalData.skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <h4 className="dark:text-white text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider opacity-70">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 + sIdx * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="skill-tag px-4 py-2 rounded-full text-sm text-[var(--muted)] cursor-default hover:text-[var(--accent)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.article>
  );
}

function TimelineItem({ title, subtitle, period, description, index }: { title: string; subtitle: string; period: string; description: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
      className="relative pl-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 300 }}
        className="absolute top-1.5 left-[-5px] w-2.5 h-2.5 bg-[var(--accent)] rounded-full shadow-[0_0_0_4px_var(--card-bg)] dark:shadow-[0_0_0_4px_#1a1a1a]"
      />
      <h4 className="dark:text-white text-gray-800 font-bold text-lg">{title}</h4>
      <span className="text-[var(--accent)] text-sm font-medium mb-1 block">{period}</span>
      <p className="text-[var(--muted)] text-sm mb-2">{subtitle}</p>
      <p className="text-[var(--muted)] text-sm leading-6">{description}</p>
    </motion.div>
  );
}
