"use client";
import { useEffect, useRef } from "react";

export const VideoContact = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Cuando el video entra en pantalla, reproduce
                        videoElement.play().catch(() => { });
                    } else {
                        // Cuando sale de pantalla, pausa
                        videoElement.pause();
                    }
                });
            },
            {
                threshold: 0.5, // al menos 50% visible para activar
            }
        );

        observer.observe(videoElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <video
            ref={videoRef}
            className="rounded-lg w-full object-cover"
            width={500}
            height={500}
            src="/BugHunter_video.mp4"
            loop
            muted
            playsInline
            controls
        />
    );
}
