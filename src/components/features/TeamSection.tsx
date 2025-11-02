"use client";
import { CardsSection } from '../ui/CardTeam';
import { font_paragraph, font_title } from '../../styles/fonts';
import { useReveal } from '@/utils/useReveal';
import styles from '@/styles/scroll.module.css';

export const TeamSection = () => {
    const { ref: titleRef, visible: titleVisible } = useReveal(0.5);
    const { ref: paragraphRef, visible: paragraphVisible } = useReveal(0.5);

    return (
        <section
            id='teamSection'
            className={`${font_paragraph.className} flex justify-center py-16 dark:bg-[#1E1E1E] bg-[#FFFFFB] text-gray-800`}
        >
            <div className='flex flex-col w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center'>
                {/* Título animado */}
                <h2
                    ref={titleRef}
                    className={`${font_title.className} ${styles.titleReveal} ${titleVisible ? styles.visible : ""} text-3xl font-extrabold text-gray-900 mb-6 dark:text-[#E0E0E0]`}
                >
                    Nuestro equipo
                </h2>

                {/* Párrafo animado */}
                <p
                    ref={paragraphRef}
                    className={`${styles.titleReveal} ${paragraphVisible ? styles.visible : ""} dark:text-[#E0E0E0] text-center`}
                >
                    Talentos dedicados a crear soluciones web innovadoras y de clase mundial
                </p>

                <CardsSection />
            </div>
        </section>
    );
};
