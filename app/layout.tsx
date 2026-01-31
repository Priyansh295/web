import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Priyansh Gupta | Portfolio",
  description: "AI/ML Engineer & Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="fixed inset-0 dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#fafafa] -z-10" />
          <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[150px] -z-10" />
          <main className="xl:flex gap-6 max-w-[1250px] mx-auto p-4 sm:p-6 lg:p-12 relative h-dvh overflow-hidden">
            <Sidebar />
            <div className="flex-1 min-w-0 flex flex-col relative w-full h-full overflow-hidden rounded-3xl">
              <Navbar />
              <div className="glass rounded-3xl mt-6 lg:mt-6 relative z-10 flex-1 flex flex-col overflow-hidden shadow-2xl transition-colors duration-300 pr-2">
                <div className="flex-1 overflow-y-auto scroll-smooth p-6 sm:p-8">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
