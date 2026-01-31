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
          <main className="xl:flex gap-6 max-w-[1250px] mx-auto p-4 sm:p-6 lg:p-12 relative min-h-screen">
             
             {/* Sidebar - Fixed/Sticky */}
             <Sidebar />

             {/* Main Content Area */}
             <div className="flex-1 min-w-0 flex flex-col relative w-full">
                
                {/* Navbar - Floating Top Right */}
                <Navbar />

                {/* Page Content - Card Style */}
                <div className="dark:bg-[#1e1e1f] bg-white border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 mt-6 lg:mt-0 relative z-10 flex-1 min-h-[500px] shadow-2xl transition-colors duration-300">
                    {children}
                </div>
             </div>

          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
