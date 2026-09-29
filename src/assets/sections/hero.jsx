import { Button } from "../components/button"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const skills = [
    "Python",
    "Java",
    "C",
    "SQL",
    "React",
    "HTML",
    "CSS",
    "Git",
    "PostgreSQL",
    "Docker",
    "MongoDB"
]


export const Hero = () => {
    return <section className='relative min-h-screen flex items-center overflow-hidden'>
        

        {/* Content */}
        <div className='container mx-auto relative z-10 px-6 pt-32 pb-20 relative z-10'>
            <div className ='grid lg:grid-cols-2 gap-12 items-center'>
                {/* Left Column */}
                <div className ='space-y-8'>

                    <div className="space-y-4">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold animate-fade-in animation-delay-100">
                        <span className="text-primary glow-text">Lucas Tyrrell, Computer Science Student at Newcastle University</span>
                        
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                            Hi, I'm Lucas Tyrrell, a current Computer Science student at Newcastle University focused on systems
                            infrastructure, automation, and cloud. Open to graduate roles and placements.
                        </p>
                    </div>


                    <div className="flex items-center gap-4 animate-fade-in animation-delay-200"> 
                        <span>Follow Me:</span>
                        {[
                            {icon: FaGithub, href: "https://github.com/LucasTyrrell"},
                            {icon: FaLinkedin, href: "https://www.linkedin.com/in/lucas-tyrrell-70430a2a1/"}
                        ].map((link, index) => (
                            <a key={index} href={link.href} target="_blank" rel="noreferrer">
                                <Button size="sm">
                                    <link.icon/>
                                </Button>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Me */}
                <div className="relative animate-fade-in animation-delay-300">
                    <div className="relative glass rounded-3xl p-2 glow-border"> 
                        <img src="/profile.jpeg" alt="Lucas Tyrrell" className="w-full aspect-[4/5] object-cover rounded-2xl"></img>
                    </div>
                </div>
                
            </div>

            {/* Skills */}
            <div className="mt-16 animate-fade-in animation-delay-400">
                <p className="text-sm font-semibold tracking-widest text-secondary-foreground uppercase mb-4">Skills</p>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/20">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </section>;
};