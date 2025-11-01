import Link from "next/link";
import { ImageCarousel } from "./ImageCarousel";
import { font_paragraph, font_title } from "../../styles/fonts";
import EyeIcon from "@mui/icons-material/RemoveRedEye";
import { ModalProjectProps } from "@/types/ModalProjectProps";

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
                <div className="dark:bg-[#1E1E1E] bg-[#E5E4E4] text-[#2C3E50] dark:text-[#E0E0E0] px-4 py-2 rounded-b-lg">
                    {/* Título y botón */}
                    <div className="flex items-center justify-between mb-2">
                        <h2 className={`${font_title.className} text-xl font-bold`}>
                            {title}
                        </h2>
                        <Link
                            href={path}
                            target="_blank"
                            className="px-3 items-center hover:scale-105 transition-transform"
                        >
                            <EyeIcon className="text-[#37484E] dark:text-[#789987]" />
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
