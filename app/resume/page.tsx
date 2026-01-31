import { personalData } from "@/lib/data";
import { BookOpen, Briefcase } from "lucide-react";

export default function Resume() {
  return (
    <article className="page-transition">
        <header className="mb-8">
            <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6 relative w-fit after:content-[''] after:absolute after:h-[3px] after:w-[30px] dark:after:bg-[#ffdb70] after:bg-blue-600 after:bottom-[-10px] after:left-0 after:rounded-md">Resume</h2>
        </header>

        <section className="mb-10">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 dark:bg-[#2b2b2c] bg-gray-100 rounded-xl dark:text-[#ffdb70] text-blue-600 shadow-md dark:border border border-white/5 border-gray-200 inline-block">
                    <BookOpen size={20} />
                </div>
                <h3 className="text-2xl font-bold dark:text-white text-gray-800">Education</h3>
            </div>
            
            <div className="dark:border-l dark:border-white/10 border-l border-gray-200 ml-5 space-y-8 pb-4">
                {personalData.education.map((edu, idx) => (
                    <TimelineItem 
                        key={idx}
                        title={edu.institution}
                        subtitle={edu.degree}
                        period={edu.period}
                        description={edu.score}
                    />
                ))}
            </div>
        </section>

        <section className="mb-10">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 dark:bg-[#2b2b2c] bg-gray-100 rounded-xl dark:text-[#ffdb70] text-blue-600 shadow-md dark:border border border-white/5 border-gray-200 inline-block">
                    <Briefcase size={20} />
                </div>
                <h3 className="text-2xl font-bold dark:text-white text-gray-800">Experience</h3>
            </div>

            <div className="dark:border-l dark:border-white/10 border-l border-gray-200 ml-5 space-y-8 pb-4">
                {personalData.experience.map((exp, idx) => (
                    <TimelineItem 
                        key={idx}
                        title={exp.role}
                        subtitle={exp.company}
                        period={exp.period}
                        description={exp.description}
                    />
                ))}
            </div>
        </section>

        <section>
             <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">My Skills</h3>
             <div className="dark:bg-[#2b2b2c] bg-gray-50 p-8 rounded-2xl dark:border border border-white/5 border-gray-200 shadow-md">
                <div className="space-y-6">
                    {personalData.skills.map((skillGroup, idx) => (
                        <div key={idx}>
                            <h4 className="dark:text-white text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider opacity-70">{skillGroup.category}</h4>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, sIdx) => (
                                    <span key={sIdx} className="dark:bg-[#1e1e1f] bg-white dark:text-white/80 text-gray-600 px-4 py-2 rounded-lg text-sm border dark:border-white/5 border-gray-200 shadow-sm hover:border-[#ffdb70]/50 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

    </article>
  )
}

function TimelineItem({ title, subtitle, period, description }: { title: string, subtitle: string, period: string, description: string }) {
    return (
        <div className="relative pl-8 before:content-[''] before:absolute before:top-1.5 before:left-[-5px] before:w-2.5 before:h-2.5 dark:before:bg-[#ffdb70] before:bg-blue-600 before:rounded-full dark:before:shadow-[0_0_0_4px_#2b2b2c] before:shadow-[0_0_0_4px_#f3f4f6]">
            <h4 className="dark:text-white text-gray-800 font-bold text-lg">{title}</h4>
            <span className="dark:text-[#ffdb70] text-blue-600 text-sm font-medium mb-1 block">{period}</span>
            <p className="dark:text-white/60 text-gray-600 text-sm mb-2">{subtitle}</p>
            <p className="dark:text-white/60 text-gray-600 text-sm leading-6">{description}</p>
        </div>
    )
}
