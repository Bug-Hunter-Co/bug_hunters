import styles from "@/styles/scroll.module.css";
import Image, { StaticImageData } from "next/image";
import { font_paragraph, font_title } from "../../styles/fonts";
import { useReveal } from "@/utils/useReveal";

interface stat {
    value: string;
    label: string;
}

interface AboutSectionProps {
    image: StaticImageData | string;
    title: string;
    paragraphs: string[];
    stats: stat[];
}

export const AboutSection = ({
    image,
    title,
    paragraphs,
    stats,
}: AboutSectionProps) => {
    const { ref: imgRef, visible: imgVisible } = useReveal();
    const { ref: textRef, visible: textVisible } = useReveal();
    const { ref: paraRef, visible: paraVisible } = useReveal(); // 👈 hook para párrafos

    return (
        <section
            id="aboutMe"
            className={`${font_paragraph.className} flex justify-center py-20 dark:bg-[#212121] bg-[#F0F0EA] text-gray-800`}
        >
            <div className="flex max-md:flex-col gap-16 w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center">
                {/* Imagen */}
                <div
                    ref={imgRef}
                    className={`${styles.imageReveal} ${imgVisible ? styles.visible : ""} flex justify-center items-center w-full bg-[#f8faf7] p-16 rounded-xl`}
                >
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="object-cover rounded-md py-20"
                    />
                </div>

                <div>
                    <h2
                        ref={textRef}
                        className={`${font_title.className} ${styles.titleReveal} ${textVisible ? styles.visible : ""} text-3xl font-extrabold text-gray-900 mb-6 dark:text-[#E0E0E0]`}
                    >
                        {title}
                    </h2>

                    <div className="space-y-4 text-gray-700 leading-relaxed dark:text-[#B0B0B0]">
                        {paragraphs.map((p, i) => (
                            <p
                                key={i}
                                ref={i === 0 ? paraRef : null} // 👈 puedes hacer que todos tengan uno propio si quieres
                                className={`${styles.paragraphReveal} ${paraVisible ? styles.visible : ""}`}
                            >
                                {p}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-10 mt-10">
                        {stats.map((s, i) => (
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