import Image from "next/image";
import Link from "next/link";
import Arrow from "@mui/icons-material/ArrowForward";
import { font_geist } from "./fonts";

interface CardProjectProps {
    title: string;
    tecnologies: string[];
    description: string;
    href: string;
    src: string;
}

export const CardProject = ({
    title,
    tecnologies,
    description,
    href,
    src,
}: CardProjectProps) => {
    return (
        <div className="flex flex-col shadow-green-300 overflow-hidden rounded-xl shadow-xs hover:shadow-lg transition-shadow duration-300 border border-[#65777B]/40 dark:bg-[#1E1E1E]">
            {/* Imagen */}
            <div className="relative h-56 w-full">
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                />
            </div>

            {/* Contenido */}
            <div className="flex flex-col gap-4 p-4">
                <h3
                    className={`text-lg font-semibold text-[#2C3E50] dark:text-[#E0E0E0] ${font_geist.className}`}
                >
                    {title}
                </h3>

                <p className="text-sm text-[#555] dark:text-[#B0B0B0] leading-relaxed">
                    {description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                    {tecnologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-[#E8F5E9] text-[#2E7D32] dark:bg-[#519872]/20 dark:text-[#A5D6A7] border border-[#519872]/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Link */}
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#519872] hover:text-[#66BB6A] transition-colors"
                >
                    Visitar el sitio web
                    <Arrow fontSize="small" />
                </Link>
            </div>
        </div>
    );
};
