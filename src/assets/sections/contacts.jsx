import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "../components/button"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "tyrrelllucas@outlook.com",
        href: "mailto:tyrrelllucas@outlook.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "07484625899",
        href: "tel:07484625899"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Newcastle Upon Tyne",
        href: "#"
    }
];

export const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);
        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully"
            })

            setFormData({name: "", email: "", message: ""});
        } catch (err) {
            setSubmitStatus({
                type: "error",
                message: err.text || "Something went wrong, please try again",
            });

        } finally {
            setIsLoading(false);
        }
    };

    

    return (
        <section id="contacts" className="py-32 relative overflow-hidden">
            {/* Gradient fade at the top */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>

            {/* Blurred circle in the centre */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            {/* Heading - centred */}
            <div className="container mx-auto px-6 relative z-10 text-center mb-12">
                <span className="text-secondary-foreground text-sm font-medium">
                    Get In Touch
                </span>
                <h2 className="text-4xl md:text-2xl font-bold mt-4 mb-6 animate-fade-in">
                    Always looking for new opportunities to learn
                </h2>
            </div>

            {/* Contact box - centred on page, text left-aligned inside */}
            <div className="flex justify-center relative z-10 px-6">
                <div className="glass p-8 rounded-3xl border border-primary/50 animate-fade-in w-full max-w-xl text-left">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input 
                            id="name" 
                            type="text" 
                            required 
                            placeholder="Your name..." 
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({...formData, name: e.target.value})
                            }
                            className="w-full px-4 py-2 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input 
                            id="email" 
                            type="email" 
                            required 
                            placeholder="Your@email.com" 
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({...formData, email: e.target.value})
                            }
                            className="w-full px-4 py-2 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea 
                            id="message" 
                            required 
                            placeholder="Your message..." 
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({...formData, message: e.target.value})
                            }
                            rows={4}
                            className="w-full px-4 py-2 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" />
                        </div>

                        <Button type="submit" size="lg" disabled={isLoading}>
                            {isLoading ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </Button>

                        {submitStatus && (
                            <p className={`text-sm ${submitStatus.type === "success" ? "text-primary" : "text-red-400"}`}>
                                {submitStatus.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};
