"use client";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/scroll.module.css";
import { cardsTeam } from "@/lib/constants";
import { CardProps } from "@/types/CardTeam";

export function Card({ icon, title, text, index, visible }: CardProps) {
    return (
        <div
            className={`${styles.cardReveal} ${visible ? styles.visible : ""} bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:scale-105 transition-transform dark:text-[#E0E0E0]`}
            style={{
                transitionDelay: `${index * 0.2}s`,
            }}
        >
            <div className="mb-3">{icon}</div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
        </div>
    );
}

export function CardsSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

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
            ref={sectionRef}
            className="w-full grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-14 py-8"
        >
            {cardsTeam.map((card, i) => (
                <Card key={card.id} {...card} index={i} visible={visible} />
            ))}
        </section>
    );
}