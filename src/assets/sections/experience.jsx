import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

const modules = [
    {
        module_code: "CSC3831",

        module_name: "Computer Vision, AI and Machine Learning"
    
    }, 
    {
        module_code: "CSC3833",

        module_name: "Data Visualization and Visual Analytics"
    },
    {
        module_code: "CSC3131",

        module_name: "Development and Operations of Systems"
    },
    {
        module_code: "CSC3121",

        module_name: "Distributed Systems"
    },
    {
        module_code: "CSC2032",

        module_name: "Algorithm Design and Analysis"
    },
    {
        module_code: "CSC2031",

        module_name: "Security Programming"
    },
    {
        module_code: "CSC2033",

        module_name: "Software Engineering Team Project	"
    },
    {
        module_code: "CSC2035",

        module_name: "Software Systems Design and Implementation	"
    },
    {
        module_code: "CSC1033",

        module_name: "Foundations of Data Science"
    },
    {
        module_code: "CSC1032",

        module_name: "	Computer Systems Design and Architectures"
    },
]
    
const subjects = [
    {
        subject_name: "Computer Science",

        grade: "A"
    },
    {
        subject_name: "Mathematics",

        grade: "B"
    },
    {
        subject_name: "IT",

        grade: "Distinction *"
    }
]

const prev_work = [
    {
        title: "Catering Staff",

        company: "Yorkshire Wildlife Park, Doncaster",

        duration: "July 2026 - September 2026",

        description: "Customer-facing role in a high-pressure environment, developed strong time management and team communication "

    },
    {
        title: "Labourer",

        company: "M&S Hughes contractors, Hemsworth",

        duration: "June 2025 - September 2025",

        description: "Assisted tradesmen with project completion under tight deadlines whilst balancing efficiency and quality. Maintained accurate site logs and records to support project tracking and compliance"
    },
    {   title: "Retail Assistant",

        company: "Iceland, Hemsworth",

        duration: "May 2023 - July 2024",

        description: "Customer-facing role, maintaining accurate stock records and ensured data integrity across inventory systems both physical and digital"
    },
    {
        title: "Warehouse Operative",

        company: "Joe Browns, Leeds",

        duration: "October 2022 - April 2023",

        description: "Adapted to changing daily requirements and prioritised tasks effectively under high workload"

    }
]

export const Experience = () => {
    const [isModuleMenuOpen, setIsModuleMenuOpen] = useState(false);

    const [isSubjectMenuOpen, setIsSubjectMenuOpen] = useState(false);

    return <section id="experience" className="py-36 relative overflow-hidden">
            <div className="container mx-auto ">
                <div className="flex justify-center py-10 font-bold text-lg text-primary">EXPERIENCE</div>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Education */}
                    <div className="glass rounded-3xl w-full py-8 px-8 border border-border/50">
                        <div className="flex items-center gap-3 mb-6">
                            <h1 className="text-sm font-semibold tracking-widest text-secondary-foreground uppercase">Education</h1>
                        </div>

                        <div className="space-y-1 mb-6">
                            <h2 className="text-xl font-bold text-foreground">
                                BSc Computer Science <span className="text-primary">- Predicted First Class</span>
                            </h2>
                            <h3 className="text-muted-foreground">University of Newcastle</h3>
                        </div>

                        <div className="border-t border-border/50 pt-4">
                            <button
                                className="flex items-center gap-2 py-2 cursor-pointer font-semibold text-sm text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsModuleMenuOpen((prev) => !prev)}
                            >
                                Modules {isModuleMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>

                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2 ${isModuleMenuOpen ? "grid" : "hidden"}`}>
                                {modules.map((module, i) => (
                                    <div key={i} className="px-4 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors animate-fade-in animation-delay-200">
                                        <h4 className="text-primary text-xs font-semibold tracking-wide mb-1">{module.module_code}</h4>
                                        <div className="text-sm text-foreground/90">{module.module_name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-border/50 pt-4 mt-4">
                            <h2 className="text-lg font-bold text-foreground mb-2">A-Levels</h2>
                            <h3 className="text-muted-foreground">New College Pontefract</h3>
                            <button
                                className="flex items-center gap-2 py-2 cursor-pointer font-semibold text-sm text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsSubjectMenuOpen((prev) => !prev)}
                            >
                                Subjects {isSubjectMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>

                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 ${isSubjectMenuOpen ? "grid" : "hidden"}`}>
                                {subjects.map((subject, i) => (
                                    <div key={i} className="flex rounded-xl bg-card border border-border/50 px-4 py-3 w-full justify-between items-center hover:border-primary/50 transition-colors animate-fade-in animation-delay-200">
                                        <h4 className="text-sm font-medium text-foreground/90">{subject.subject_name}</h4>
                                        <span className="text-xs font-semibold rounded-full px-3 py-1 bg-primary/20 text-primary">{subject.grade}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="glass rounded-3xl w-full py-8 px-8 border border-border/50">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-sm font-semibold tracking-widest text-secondary-foreground uppercase">Work Experience</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {prev_work.map((job, i) => (
                                <div key={i} className="px-4 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors animate-fade-in animation-delay-200">
                                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                                        <h4 className="text-primary text-sm font-semibold">{job.title}</h4>
                                        <span className="text-xs text-muted-foreground">{job.duration}</span>
                                    </div>
                                    <div className="text-sm text-foreground/90 mb-1">{job.company}</div>
                                    <div className="text-sm text-foreground/70">{job.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



    </section>;
};