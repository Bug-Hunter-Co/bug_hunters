import Image from "next/image";
import { useReveal } from "@/utils/useReveal";
import styles from "@/styles/scroll.module.css";
import { paragraphsAbout, statsAbout } from "@/lib/constants";
import { font_paragraph, font_title } from "../../styles/fonts";

export const AboutSection = () => {
    const { ref: textRef, visible: textVisible } = useReveal();
    const { ref: paraRef, visible: paraVisible } = useReveal();
    const { ref: imgRef, visible: imgVisible } = useReveal(); //  nuevo hook para la imagen

    return (
        <section
            id="aboutMe"
            className={`${font_paragraph.className} flex justify-center py-20 dark:bg-[#212121] bg-[#F0F0EA] text-gray-800`}
        >
            <div className="flex max-md:flex-col gap-16 w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center">
                {/* Imagen con efecto reveal */}
                <div
                    ref={imgRef}
                    className={`w-full max-md:order-1 ${styles.titleReveal} ${imgVisible ? styles.visible : ""
                        }`}
                    style={{ transitionDelay: "0.2s" }} // pequeño delay para que entre suave
                >
                    <Image
                        src={"/greenpath/landin.png"}
                        alt="Sobre BugHunter"
                        width={5000}
                        height={5000}
                        className="object-cover rounded-lg w-full"
                    />
                </div>

                {/* Texto */}
                <div className="w-full">
                    <h2
                        ref={textRef}
                        className={`${font_title.className} ${styles.titleReveal} ${textVisible ? styles.visible : ""
                            } text-3xl font-extrabold text-gray-900 mb-6 dark:text-[#E0E0E0]`}
                    >
                        Sobre BugHunter
                    </h2>

                    <div className="space-y-4 text-gray-700 leading-relaxed dark:text-[#B0B0B0]">
                        {paragraphsAbout.map((p, i) => (
                            <p
                                key={i}
                                ref={i === 0 ? paraRef : null}
                                className={`${styles.paragraphReveal} ${paraVisible ? styles.visible : ""
                                    }`}
                            >
                                {p}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-10 mt-10">
                        {statsAbout.map((s, i) => (
                            <div key={i}>
                                <p className="text-2xl font-extrabold text-[#519872]">{s.value}</p>
                                <p className="text-sm text-gray-500">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
