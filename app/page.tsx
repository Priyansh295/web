import { personalData } from "@/lib/data";
import { Code, Database, Brain, Sparkles } from "lucide-react";

export default function About() {
  return (
    <article className="page-transition">
      <header className="mb-8">
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6 relative w-fit after:content-[''] after:absolute after:h-[3px] after:w-[30px] dark:after:bg-[#ffdb70] after:bg-blue-600 after:bottom-[-10px] after:left-0 after:rounded-md">About Me</h2>
      </header>
      
      <section className="dark:text-white/80 text-gray-600 leading-relaxed mb-8">
        <p className="mb-4">{personalData.bio}</p>
        <p className="mb-4">
            Currently, I am working on cutting-edge research in <span className="dark:text-[#ffdb70] text-blue-600 font-medium">Generative AI</span> and <span className="dark:text-[#ffdb70] text-blue-600 font-medium">Data Science</span>, contributing to top-tier conferences like ICML and ICOACT.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
                icon={<Brain className="dark:text-[#ffdb70] text-blue-600" size={32} />}
                title="AI/ML Research"
                description="Developing novel architectures like WaveMamba and KANs for vision and inpainting tasks."
            />
            <ServiceCard 
                icon={<Code className="dark:text-[#ffdb70] text-blue-600" size={32} />}
                title="Full-Stack Development"
                description="Building scalable web apps using Next.js, React, and Node.js with production-grade reliability."
            />
            <ServiceCard 
                 icon={<Database className="dark:text-[#ffdb70] text-blue-600" size={32} />}
                 title="Data Science"
                 description="Extracting insights from complex datasets using statistical modeling and advanced visualization."
            />
            <ServiceCard 
                 icon={<Sparkles className="dark:text-[#ffdb70] text-blue-600" size={32} />}
                 title="Generative AI"
                 description="Creating RAG pipelines and chatbots (AgriChat) that solve real-world problems."
            />
        </div>
      </section>
    </article>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="dark:bg-[#2b2b2c] bg-gray-50 border dark:border-white/5 border-gray-200 rounded-2xl p-6 shadow-sm hover:transform hover:scale-[1.02] transition-all flex gap-4 items-start hover:shadow-md">
            <div className="mt-1">{icon}</div>
            <div>
                <h4 className="text-lg font-bold dark:text-white text-gray-800 mb-2">{title}</h4>
                <p className="text-sm dark:text-white/60 text-gray-600 leading-6">{description}</p>
            </div>
        </div>
    )
}
