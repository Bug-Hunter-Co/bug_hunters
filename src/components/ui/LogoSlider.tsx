import { useEffect, useRef, useState } from "react";
import { techLogos } from "@/lib/techLogo";

const LogoSlider = () => {
    const [offset, setOffset] = useState(0);
    const paused = useRef(false);
    const reqRef = useRef<number | null>(null);

    const speed = 0.5;

    const animate = () => {
        if (!paused.current) {
            setOffset((prev) => prev - speed);
        }
        reqRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        reqRef.current = requestAnimationFrame(animate);
        return () => {
            if (reqRef.current) cancelAnimationFrame(reqRef.current);
        };
    }, []);

    return (
        <div
            className="absolute w-7/10 max-xl:w-8/10 max-lg:w-9/10 overflow-hidden text-white"
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
        >
            <div
                className="flex gap-40 max-md:gap-20 max-sm:gap-15"
                style={{
                    transform: `translateX(${offset}px)`,
                    transition: "none",
                }}
            >
                {[...techLogos, ...techLogos].map(({ icon: Icon, title }, index) => (
                    <div
                        key={`${title}-${index}`}
                        className="flex items-center justify-center shrink-0 dark:text-gray-50 text-gray-800"
                        title={title}
                    >
                        <Icon size={40} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;
