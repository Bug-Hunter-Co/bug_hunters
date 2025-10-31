import Image from "next/image";
import Link from "next/link";
import { font_paragraph, font_title } from "./fonts";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface CardProjectProps {
    title: string;
    tecnologies: string[];
    description: string;
    path: string;
    srcs: string[];
    onClick: () => void;
}

export const CardProject = ({
    title,
    tecnologies,
    description,
    path,
    srcs,
    onClick,
}: CardProjectProps) => {
    return (
        <div className={`${font_paragraph.className} flex flex-col justify-between overflow-hidden rounded-xl shadow-xs hover:shadow-lg transition-shadow duration-300 border border-[#65777B]/40 dark:bg-[#1E1E1E] cursor-pointer`} onClick={onClick}>
            {/* Imagen */}
            <Image
                src={srcs[0]}
                alt={title}
                height={5000}
                width={5000}
                className="object-cover w-full h-auto"
            />

            {/* Contenido */}
            <div className="flex flex-col gap-4 p-4 justify-between bg-[#E5E4E4] dark:bg-[#212121] h-40">
                <h3 className={`${font_title.className} text-lg font-semibold text-[#2C3E50] dark:text-[#E0E0E0]`}>
                    {title}
                </h3>

                {/* Descripción con toggle */}
                <p className="text-sm text-[#555] dark:text-[#B0B0B0] line-clamp-3">
                    {description}
                </p>
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex gap-2">
                        {tecnologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs font-medium rounded-xl bg-[#37484E]/80 text-white dark:bg-[#789987]/50 dark:text-white border border-[#519872]/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* Link */}
                    <Link
                        href={path}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <RemoveRedEyeIcon className="text-[#37484E] dark:text-[#789987]" />
                    </Link>
                </div>
            </div>
        </div>
    );
};