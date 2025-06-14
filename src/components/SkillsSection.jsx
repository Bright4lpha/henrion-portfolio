import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    { name: "PHP", level: 90, category: "backend" },
    { name: "MySQL", level: 85, category: "base de données" },
    { name: "PostgreSQL", level: 70, category: "base de données" },
    { name: "Java", level: 80, category: "backend" },
    { name: "Python", level: 75, category: "backend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "Node.js", level: 60, category: "backend" },
    { name: "Vue.js", level: 50, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 70, category: "frontend" },
    { name: "Express", level: 60, category: "backend" },
    { name: "Git", level: 80, category: "outils" },
    { name: "Docker", level: 60, category: "outils" },
    { name: "Figma", level: 70, category: "design" },
    { name: "Photoshop", level: 65, category: "design" },
    { name: "GLPI", level: 95, category: "outils" },
    { name: "Unreal Engine", level: 50, category: "outils" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },
    { name: "Twig", level: 0, category: "frontend" },
    { name: "Docker", level: 60, category: "outils" },
    { name: "Bootstrap", level: 0, category: "frontend" },
    { name: "C#", level: 50, category: "backend" },
    { name: "C++", level: 50, category: "backend" },
    { name: "Kubernetes", level: 0, category: "outils" },
];

const categories = [
    "tout",
    "frontend",
    "backend",
    "base de données",
    "outils",
    "design",
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3-xl md:text-4xl font-bold mb-12 text-center">
                    Mes <span className="text-primary">Compétences</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                {skill.level > 0 && (
                                    <div
                                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                        style={{ width: skill.level + "%" }}
                                    />
                                )}
                            </div>
                            <div className="text-right mt-1">
                                {skill.level > 0 && (
                                    <span className="text-sm text-muted-foreground">
                                        {skill.level}%
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
