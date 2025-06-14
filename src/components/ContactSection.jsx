import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Instagram,
    Facebook,
    Github,
    Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";
import { useState } from "react";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast.warn(
                "Cette fonctionnalité n'est pas encore implémentée. Restez à l'écoute pour les mises à jour !",
                {
                    position: "bottom-right",
                    theme: "dark",
                }
            );
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Rester en <span className="text-primary">Contact</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Je suis toujours ouverte aux nouvelles opportunités et
                    collaborations. Si vous souhaitez discuter d'un projet,
                    partager des idées ou simplement échanger, n'hésitez pas à
                    me contacter via le formulaire ci-dessous ou par email. Je
                    suis impatiente de vous entendre et de voir comment nous
                    pouvons travailler ensemble pour créer quelque chose de
                    génial !
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Informations de contact
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:mathi.henrion@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        mathi.henrion@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Téléphone</h4>
                                    <a
                                        href="tel:+33781775282"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +33 7 81 77 52 82
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Localisation
                                    </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Dunkerque, France
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Connectez-vous avec moi
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://linkedin.com/in/mathilde-henrion-4b110b260"
                                    target="_blank"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="https://www.instagram.com/bright_4lpha/"
                                    target="_blank"
                                >
                                    <Instagram />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100082244859164"
                                    target="_blank"
                                >
                                    <Facebook />
                                </a>
                                <a
                                    href="https://github.com/Bright4lpha"
                                    target="_blank"
                                >
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6">
                            Envoyer un message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Votre nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Mathilde Henrion..."
                                    autocomplete="off"
                                ></input>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Votre email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="mathilde@gmail.com"
                                    autocomplete="off"
                                ></input>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Votre message
                                </label>
                                <input
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary rezise-none"
                                    placeholder="Hello Mathilde, j'ai une question..."
                                    autocomplete="off"
                                ></input>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
