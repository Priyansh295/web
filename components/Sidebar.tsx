"use client";

import Image from "next/image";
import { useState } from "react";
import { personalData } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "glass rounded-3xl p-6 z-20 transition-all duration-300 ease-in-out h-fit sticky top-14 shadow-xl",
        "w-full lg:w-[280px] xl:w-[300px]",
        isOpen ? "max-h-[800px]" : "max-h-[120px] lg:max-h-max overflow-hidden"
      )}
    >
      <div className="flex gap-5 items-center lg:flex-col lg:items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2a2a2a] rounded-2xl p-2 min-w-[100px] w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] flex justify-center items-center overflow-hidden shadow-lg group cursor-pointer"
        >
          <Image
            src="/avatar.png"
            alt={personalData.name}
            width={150}
            height={150}
            className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </motion.div>

        <div className="lg:text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold dark:text-white text-gray-800 mb-2"
          >
            {personalData.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[var(--card-bg)] dark:bg-[#1e1e1f] text-xs px-4 py-1.5 rounded-lg text-[var(--muted)] w-fit lg:mx-auto border border-[var(--card-border)]"
          >
            {personalData.role}
          </motion.div>
        </div>

        <button
          className="absolute top-0 right-0 p-4 lg:hidden text-[var(--accent)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDown className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "lg:block pt-8 border-t border-[var(--card-border)] mt-8",
          isOpen ? "block" : "hidden"
        )}
      >
        <ul className="flex flex-col gap-6">
          <ContactItem icon={<Mail />} title="Email" value={personalData.email} href={`mailto:${personalData.email}`} />
          <ContactItem icon={<Phone />} title="Phone" value={personalData.phone} href={`tel:${personalData.phone}`} />
          <ContactItem icon={<MapPin />} title="Location" value={personalData.location} />

          <motion.li variants={itemVariants} className="flex gap-4 justify-center mt-4">
            <SocialLink href={personalData.social.github} icon={<Github />} />
            <SocialLink href={personalData.social.linkedin} icon={<Linkedin />} />
          </motion.li>
        </ul>
      </motion.div>
    </motion.aside>
  );
}

function ContactItem({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) {
  return (
    <motion.li variants={itemVariants} className="flex gap-4 items-center">
      <div className="p-3 rounded-xl bg-[var(--card-bg)] dark:bg-[#1e1e1f] text-[var(--accent)] shadow-sm border border-[var(--card-border)] transition-all duration-300 hover:glow-box">
        {icon}
      </div>
      <div>
        <p className="text-xs text-[var(--muted)] mb-1 uppercase font-medium tracking-wider">{title}</p>
        {href ? (
          <a href={href} className="text-sm dark:text-white text-gray-800 hover:text-[var(--accent)] transition-colors block truncate w-[160px]">{value}</a>
        ) : (
          <p className="text-sm dark:text-white text-gray-800">{value}</p>
        )}
      </div>
    </motion.li>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="text-[var(--muted)] hover:text-[var(--accent)] transition-all duration-300 p-2 rounded-lg hover:bg-[var(--accent)]/10"
    >
      {icon}
    </motion.a>
  );
}
