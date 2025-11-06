import Image from "next/image";
import { useReveal } from "@/utils/useReveal";
import styles from "@/styles/scroll.module.css";
import { img_about } from "@images/general_img";
import { paragraphsAbout, statsAbout } from "@constants";
import { font_paragraph, font_title } from "@/styles/fonts";

export const AboutSection = () => {
    const { ref: textRef, visible: textVisible } = useReveal();
    const { ref: paraRef, visible: paraVisible } = useReveal();
    const { ref: imgRef, visible: imgVisible } = useReveal(); //  nuevo hook para la imagen

    return (
        <section
            id="aboutMe"
            className={`${font_paragraph.className} flex justify-center py-16 max-md:py-10 dark:bg-[#212121] bg-[#F0F0EA] text-gray-800`}
        >
            <div className="flex max-md:flex-col gap-16 max-md:gap-6 w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center">
                <div
                    ref={imgRef}
                    className={`w-full max-md:order-1 ${styles.titleReveal} ${imgVisible ? styles.visible : ""
                        }`}
                    style={{ transitionDelay: "0.2s" }}
                >
                    <Image
                        src={img_about}
                        alt="Sobre BugHunter - Equipo de desarrollo web apasionado"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg w-full max-h-120"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                    />
                </div>

                {/* Texto */}
                <div className="w-full">
                    <h2
                        ref={textRef}
                        className={`${font_title.className} ${styles.titleReveal} ${textVisible ? styles.visible : ""
                            } text-3xl font-extrabold mb-6 text-[#37484E] dark:text-white max-md:text-center `}
                    >
                        Sobre BugHunter
                    </h2>

                    <div className="space-y-4 text-gray-700 leading-relaxed dark:text-[#B0B0B0] max-md:text-justify">
                        {paragraphsAbout.map((p, i) => (
                            <p
                                key={i}
                                ref={i === 0 ? paraRef : null}
                                className={`
                                    ${styles.paragraphReveal}
                                    ${paraVisible ? styles.visible : ""}
                                    ${i === paragraphsAbout.length - 1 ? "text-sm italic" : "text-base"}
                                `}
                            >
                                {p}
                            </p>
                        ))}

                    </div>

                    <div className="flex flex-wrap gap-10 max-md:gap-4 mt-10">
                        {statsAbout.map((s, i) => (
                            <div key={i}>
                                <p className="text-2xl font-extrabold text-[#37484E] dark:text-[#789987]">{s.value}</p>
                                <p className="text-sm text-gray-500">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
