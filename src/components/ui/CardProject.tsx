"use client";
import Image from "next/image";
import Link from "next/link";
import { font_paragraph, font_title } from "../../styles/fonts";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import styles from "@/styles/scroll.module.css";
import { CardProjectProps } from "@/types/CardProject";

export const CardProject = ({
    title,
    tecnologies,
    description,
    path,
    srcs,
    onClick,
    index = 0,
    visible = false,
}: CardProjectProps) => {
    return (
        <div
            className={`
        ${styles.cardReveal}
        ${visible ? styles.visible : ""}
        ${font_paragraph.className}
        bg-[#E5E4E4] flex flex-col justify-between overflow-hidden rounded-xl
        shadow-xs hover:shadow-lg dark:shadow-black/50 transition-all duration-500
        border border-[#65777B]/40 dark:bg-[#1E1E1E] cursor-pointer`}
            style={{
                transitionDelay: `${index * 0.2}s` // retraso escalonado
            }}
            onClick={onClick}
        >
            <Image
                src={srcs[0]}
                alt={title}
                height={5000}
                width={5000}
                className="object-cover w-full h-auto"
            />
            <div className="flex flex-col gap-4 p-4 justify-between h-40">
                <h3 className={`${font_title.className} text-lg font-semibold text-[#2C3E50] dark:text-[#E0E0E0]`}>
                    {title}
                </h3>
                <p className="text-sm text-[#555] dark:text-[#B0B0B0] line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex gap-2">
                        {tecnologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-xs font-medium rounded-xl bg-[#37484E]/80 text-white dark:bg-[#789987]/50 dark:text-white border border-[#519872]/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <Link href={path} target="_blank" rel="noopener noreferrer">
                        <RemoveRedEyeIcon className="text-[#37484E] dark:text-[#789987]" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
