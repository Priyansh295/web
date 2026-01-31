"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-0 left-0 w-full lg:static lg:w-auto lg:h-fit z-30 lg:ml-auto"
    >
      <div className="glass rounded-t-2xl lg:rounded-3xl px-6 py-4 flex items-center justify-between lg:justify-center gap-8 shadow-lg border-t lg:border border-[var(--accent)]/20">
        <ul className="flex gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  pathname === item.path
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--accent)]"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-[var(--accent)] transition-all duration-300 rounded-full",
                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This is the recommended pattern for handling client-only rendering in Next.js
  // to avoid hydration mismatch. The lint rule is overly strict for this use case.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 180 }}
      className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors p-2 rounded-lg hover:bg-[var(--accent)]/10"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}
