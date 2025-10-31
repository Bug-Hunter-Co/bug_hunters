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

    if (images.length === 1) {
        return (
            <Image
                src={images[0]}
                alt={alt}
                width={5000}
                height={5000}
                className="object-contain rounded-t-lg"
            />
        );
    }

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="shrink-0 w-full">
                        <Image
                            src={src}
                            alt={`${alt} - ${index + 1}`}
                            width={5000}
                            height={5000}
                            className="object-contain rounded-t-lg w-full h-auto"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
            >
                ‹
            </button>
            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
            >
                ›
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
