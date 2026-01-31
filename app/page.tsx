"use client";

import { personalData } from "@/lib/data";
import { Code, Database, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants} className="mb-8">
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6 relative w-fit">
          About Me
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 30 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute h-[3px] bg-[var(--accent)] bottom-[-10px] left-0 rounded-md"
          />
        </h2>
      </motion.header>

      <motion.section variants={itemVariants} className="text-[var(--muted)] leading-relaxed mb-8">
        <p className="mb-4">{personalData.bio}</p>
        <p className="mb-4">
          Currently, I am working on cutting-edge research in{" "}
          <span className="text-[var(--accent)] font-medium">Generative AI</span> and{" "}
          <span className="text-[var(--accent)] font-medium">Data Science</span>, contributing to top-tier conferences like ICML and ICOACT.
        </p>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">What I&apos;m Doing</h3>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ServiceCard
            icon={<Brain className="text-[var(--accent)]" size={28} />}
            title="AI/ML Research"
            description="Developing novel architectures like WaveMamba and KANs for vision and inpainting tasks."
          />
          <ServiceCard
            icon={<Code className="text-[var(--accent)]" size={28} />}
            title="Full-Stack Development"
            description="Building scalable web apps using Next.js, React, and Node.js with production-grade reliability."
          />
          <ServiceCard
            icon={<Database className="text-[var(--accent)]" size={28} />}
            title="Data Science"
            description="Extracting insights from complex datasets using statistical modeling and advanced visualization."
          />
          <ServiceCard
            icon={<Sparkles className="text-[var(--accent)]" size={28} />}
            title="Generative AI"
            description="Creating RAG pipelines and chatbots (AgriChat) that solve real-world problems."
          />
        </motion.div>
      </motion.section>
    </motion.article>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="gradient-border p-5 flex gap-4 items-start cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="p-3 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20"
      >
        {icon}
      </motion.div>
      <div>
        <h4 className="text-lg font-bold dark:text-white text-gray-800 mb-2">{title}</h4>
        <p className="text-sm text-[var(--muted)] leading-6">{description}</p>
      </div>
    </motion.div>
  );
}
