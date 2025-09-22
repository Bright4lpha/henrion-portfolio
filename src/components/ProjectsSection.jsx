import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
    {
        id: 1,
        title: "Projet webapp - The Book Cabinet",
        description:
            "L'objectif est de créer une application permettant de suivre ces lectures. De les organiser sous forme d'étagères virtuelles et proposer des statistiques de quantité et de genres de lectures.",
        image: "/projects/thebookcabinet.png",
        tags: ["Node.js", "React", "TailwindCSS", "MongoDB"],
        demoUrl: "https://thebookcabinet-front.vercel.app/",
        githubUrl: "https://github.com/Bright4lpha/thebookcabinet-front",
    },
    {
        id: 2,
        title: "Panikabor",
        description:
            "J'ai créer un jeu de plateau en Java. Il s'agit d'un jeu collectif où l'objectif est de réparer le vaisseau spataial avant que l'équipage disparaisse à cause des aliens.",
        image: "/projects/panikabor.png",
        tags: ["Java", "MG2D"],
        demoUrl: "",
        githubUrl: "https://github.com/Bright4lpha/Panikabor",
    },
    {
        id: 3,
        title: "Laravel Project",
        description:
            "J'ai réalise une application web de gestion de stocks en Laravel. De plus, j'ai développé une API pour permettre l'accès aux données de l'application.",
        image: "/projects/laravel.png",
        tags: ["Laravel", "PHP", "API"],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id: 4,
        title: "Traitement d'images",
        description:
            "J'ai réalisé un projet de traitement d'images en Python. J'ai utilisé OpenCV pour appliquer différents filtres et transformations sur des images.",
        image: "/projects/images_processing.png",
        tags: ["Python", "C++", "OpenCV"],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id: 5,
        title: "Montée de version GLPI",
        description:
            "Dans le cadre de mon alternance, j'ai effectué la montée de version de GLPI de la version 9 à la version 10. Ce projet m'a permis de découvrir les enjeux d'une migration de logiciel en entreprise. ",
        image: "/projects/glpi.png",
        tags: ["PHP", "GLPI"],
        demoUrl: "",
        githubUrl: "",
    },

    {
        id: 6,
        title: "Jeu d'arcade",
        description:
            "J'ai réalisé un démineur en Java pour la borne d'arcade de mon IUT. J'ai appris à optimiser le code pour qu'il fonctionne sur une machine avec des ressources limitées.",
        image: "/projects/minesweeper.png",
        tags: ["Java", "MG2D", "Raspberry Pi"],
        demoUrl: "",
        githubUrl: "https://github.com/Bright4lpha/minesweeper_borne_iut",
    },
    {
        id: 7,
        title: "Montée de version application",
        description:
            "J'ai réalisé la montée de version d'une application de traitement d'images HDR développée par mes enseignants. J'ai dû adapter le code pour qu'il fonctionne avec les nouvelles versions de Python et des bibliothèques utilisées.",
        image: "/projects/uhdr.png",
        tags: ["Python"],
        demoUrl: "",
        githubUrl: "https://github.com/Bright4lpha/sae_uHDR",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Mes <span className="text-primary">Projets</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Voici quelques-uns de mes projets que j'ai pu réaliser dans
                    le cadre de mon BUT et de mon alternance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/Bright4lpha"
                    >
                        Voir mon GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
