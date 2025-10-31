import Image from "next/image";
import Link from "next/link";
import { ImageCarousel } from "./ImageCarousel";
import { font_paragraph, font_title } from "./fonts";

interface ModalProjectProps {
    title: string;
    tecnologies: string[];
    description: string;
    path: string;
    srcs: string[];
    onClose: () => void;
}

export const ModalProject = ({
    title,
    description,
    path,
    srcs,
    onClose,
}: ModalProjectProps) => {
    return (
        <div
            className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full mx-4 max-h-[90vh] bg-white dark:bg-[#1E1E1E] rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Carrusel de Imágenes */}
                <div className="rounded-t-lg overflow-hidden">
                    <ImageCarousel images={srcs} alt={title} />
                </div>

                {/* Overlay con la info del proyecto */}
                <div className="dark:bg-[#1E1E1E] bg-[#E5E4E4] text-[#2C3E50] dark:text-[#E0E0E0] p-4 rounded-b-lg">
                    {/* Título y botón */}
                    <div className="flex justify-between mb-4">
                        <h2 className={`${font_title.className} text-xl font-bold mb-2`}>
                            {title}
                        </h2>
                        <Link
                            href={path}
                            target="_blank"
                            className="px-3 h-fit py-1 bg-[#2C3E50] dark:bg-[#789987]/50 text-white rounded hover:scale-105 transition-transform text-sm"
                        >
                            Sitio web
                        </Link>
                    </div>

                    {/* Descripción */}
                    <p
                        className={`${font_paragraph.className} text-sm mb-3 leading-relaxed`}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
