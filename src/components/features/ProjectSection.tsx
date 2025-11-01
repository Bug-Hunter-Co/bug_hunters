"use client";
import { Project } from "@/types/Project";
import { projects } from "@/lib/constants";
import { CardProject } from "../ui/CardProject";
import { ModalProject } from "../ui/ModalProject";
import { useState, useEffect, useRef } from "react";
import { font_paragraph, font_title } from "../../styles/fonts";

export const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(element);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="projects"
            className={`${font_paragraph.className} flex justify-center py-20 dark:bg-[#212121] bg-[#F0F0EA] text-gray-800`}
        >
            <div className="flex flex-col gap-8 w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center">
                <h1 className={`${font_title.className} text-3xl font-bold dark:text-[#E0E0E0]`}>
                    Proyectos Destacados
                </h1>
                <p className="dark:text-[#B0B0B0]">
                    Conoce nuestro trabajo y los resultados que hemos logrado.
                </p>

                <div
                    ref={sectionRef}
                    className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-6 w-full"
                >
                    {projects.map((p, i) => (
                        <CardProject
                            key={i}
                            {...p}
                            onClick={() => setSelectedProject(p)}
                            index={i}
                            visible={visible} //  Pasamos el visible del padre
                        />
                    ))}
                </div>

                {selectedProject && (
                    <ModalProject {...selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </div>
        </section>
    );
};
