import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const projects = [
    {
        title: "Up To Date - AI powered job platform",

        description: "An up-to-date job listing platform that allows the user to search through real job listings and track their current applications",

        tags: ["Python", "LangGraph", "Patchright", "PostgreSQL", "SQLAlchemy"],

        github: "https://github.com/LucasTyrrell/Up_To_Date"
    },
    {
        title: "Get healthy together - Full Stack fitness tracker",

        description: "Contributed to a team to develop a full stack fitness tracker, calling real data from the Fitbit API. Unfortunately had to be made private in accordance with University policy ",

        tags: ["Java", "Spring Boot", "REST API", "React", "PostgreSQL", "Docker", "Fitbit API"],

        github: "made private in accordance with university policy"
    }, 
    {
        title: "Voice Activated Chatbot",

        description: "A real time voice driven assistant, with STT and TTS capability",

        tags: ["Python", "LangChain", "SileroVAD", "Elevenlabs"],

        github: "https://github.com/LucasTyrrell/JARVIS-MK-1"
    }
]


export const Projects = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const nextProject = () => {
        setActiveIdx((prev) => (prev + 1) % projects.length);
    }

    const previousProject  = () => {
            setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length)
    }

    return <section id="projects" className="py-36 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mx-auto max-w-3xl mb-20">
                    <span className="text-secondary-foreground text-sm font-semibold tracking-widest uppercase animate-fade-in animation-delay-300">Things I've Built</span>
                    <h2 className="mt-3">
                        <span className="text-primary text-3xl md:text-4xl font-bold tracking-tight animate-fade-in animation-delay-400">PROJECTS</span>
                    </h2>
                </div>
            </div>

            {/* projects  display*/}
            <div className="max-w-4xl mx-auto px-6">
                <div className="relative">
                    {/* main project */}
                    <div className="glass p-8 rounded-3xl md:p-12 animate-fade-in animation-delay-200 relative group border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="rounded-2xl p-4 md:p-8 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
                            <div className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-6 pb-6 border-b border-border/50">{projects[activeIdx].title}</div>
                            <div className="text-xs font-semibold tracking-widest uppercase text-secondary-foreground mb-2">Description</div>
                            <div className="text-foreground/80 leading-relaxed mb-6">{projects[activeIdx].description}</div>

                            <div className="flex flex-wrap gap-2">{projects[activeIdx].tags.map((tag) => (
                                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/20">{tag}</span>
                            ))}</div>
                            <div className="absolute inset-0 rounded-3xl bg-background/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 overlay">
                                <a href={projects[activeIdx].github} target="_blank" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                                    View On GitHub
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* scroller */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button onClick={previousProject} className="p-3 rounded-full glass border border-border/50 hover:bg-primary/10 hover:text-primary transition-all">
                            <ChevronLeft/>
                        </button>

                        <div className="flex gap-2 ">
                            {projects.map((_, i) => (
                            <button key={i} className={`rounded-full w-2 h-2 transition-all duration-300 ${i === activeIdx ? "w-8 bg-primary" : "bg-primary/30 hover:bg-primary/50"}`} />
                            ))}
                        </div>


                        <button onClick={nextProject} className="p-3 rounded-full glass border border-border/50 hover:bg-primary/10 hover:text-primary transition-all">
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
         </section>;
};
