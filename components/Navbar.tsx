"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react"; // Or custom theme toggle
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed bottom-0 left-0 w-full lg:sticky lg:top-14 lg:w-auto lg:h-fit z-30 lg:ml-auto">
      <div className="dark:bg-[#2b2b2c]/90 bg-white/90 backdrop-blur-md rounded-t-2xl lg:rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-br-none lg:rounded-tl-none dark:border-white/10 border-gray-200 border px-6 py-4 flex items-center justify-between lg:justify-center gap-8 shadow-lg">
        <ul className="flex gap-6 lg:gap-8">
            {navItems.map((item) => (
                <li key={item.name}>
                    <Link 
                        href={item.path}
                        className={cn(
                            "text-sm font-medium transition-colors dark:hover:text-[#ffdb70] hover:text-blue-600",
                            pathname === item.path ? "dark:text-[#ffdb70] text-blue-600" : "dark:text-white/70 text-gray-500"
                        )}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="dark:text-white/70 text-gray-500 dark:hover:text-[#ffdb70] hover:text-blue-600 transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}
