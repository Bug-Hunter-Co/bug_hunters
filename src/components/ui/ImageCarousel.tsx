import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

export const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative overflow-hidden w-full h-96">
            <div
                className="flex transition-transform duration-500 ease-in-out w-full h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="relative shrink-0 w-full h-full">
                        <Image
                            src={src}
                            alt={`${alt} - ${index + 1}`}
                            width={5000}
                            height={5000}
                            className="object-cover"
                            sizes="100vw"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Botones - solo mostrar si hay más de una imagen */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
};
