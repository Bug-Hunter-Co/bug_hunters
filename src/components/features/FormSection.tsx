"use client";
import { InfoContact } from "./InfoContact";
import { ContactForm } from "../forms/ContactForm";
import { font_paragraph, font_title } from "../../styles/fonts";
import { useReveal } from "@/utils/useReveal";
import styles from "@/styles/scroll.module.css";

export const FormSection = () => {
    // hooks para animaciones del título, párrafo, formulario y tarjeta de contacto
    const { ref: titleRef, visible: titleVisible } = useReveal(0.5);
    const { ref: paragraphRef, visible: paragraphVisible } = useReveal(0.5);
    const { ref: formRef, visible: formVisible } = useReveal(0.4);
    const { ref: infoRef, visible: infoVisible } = useReveal(0.4);

    return (
        <section
            id="contact"
            className={`${font_paragraph.className} px-50 max-2xl:px-0 flex justify-center py-16 dark:bg-[#1E1E1E] bg-[#FFFFFB]`}>
            <div className="grid grid-cols-5 max-lg:grid-cols-4 max-lg:flex max-lg:flex-col items-center w-7/10 max-xl:w-8/10 max-lg:w-9/10 justify-center gap-20 max-xl:gap-10">
                <div className="col-span-3 max-lg:col-span-2">
                    <h3
                        ref={titleRef}
                        className={`${font_title.className} mb-10 text-[#223843] text-3xl font-bold dark:text-[#E0E0E0] ${styles.titleReveal} ${titleVisible ? styles.visible : ""}`}>
                        ¿Tienes una idea?
                        <br />
                        ¡Hablemos!
                    </h3>

                    <p
                        ref={paragraphRef}
                        className={`dark:text-[#B0B0B0] text-gray-800 mb-10 mt-5 ${styles.titleReveal} ${paragraphVisible ? styles.visible : ""}`}>
                        Completa el formulario y nos pondre en contacto contigo a la brevedad
                    </p>

                    <div ref={formRef}>
                        <ContactForm visible={formVisible} startIndex={0} />
                    </div>
                </div>

                <div
                    ref={infoRef}
                    className={`${styles.titleReveal} ${infoVisible ? styles.visible : ""}`}>
                    <InfoContact />
                </div>
            </div>
        </section>
    );
};
