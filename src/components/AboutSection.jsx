import { Code, GraduationCap, Palette } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    À propos de <span className="text-primary">Moi</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Développeuse full-stack
                        </h3>
                        <p className="text-muted-foreground">
                            Je suis une développeuse passionnée qui aime créer
                            des applications utiles et esthétiques. Mon parcours
                            m'a permis de maîtriser divers langages et
                            technologies, me permettant de travailler sur des
                            projets variés, allant du développement front-end au
                            back-end.
                        </p>
                        <p className="text-muted-foreground">
                            {" "}
                            Toujours prête à apprendre et à relever de nouveaux
                            défis, je m'efforce de rester à jour avec les
                            dernières tendances technologiques.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Rester en contact
                            </a>

                            <a
                                href="/CV_Henrion_Mathilde.pdf"
                                download="CV_Henrion_Mathilde.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/70 transition-colors duration-300"
                            >
                                {" "}
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Études
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Je réalise un BUT Informatique à l'IUT
                                        de Calais en alternance à ArcelorMittal
                                        en tant qu'analyste développeuse.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Développement
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Mes études m'ont permis d'acquérir des
                                        compétences variées en informatique.
                                        Autant le développement d'applications
                                        que la gestion de bases de données, en
                                        passant par le développement web et
                                        mobile. J'ai également une bonne
                                        connaissance des outils de gestion de
                                        projet et de versionnage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Palette className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Centres d'intérêts
                                    </h4>
                                    <p className="text-muted-foreground">
                                        J'aime apprendre et découvrir de
                                        nouvelles choses. J'aime jouer et
                                        écouter de la musique, dessiner, lire,
                                        apprendre de nouvelles langues?... Je
                                        fais également de la natation, de la
                                        musculation et du running.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
