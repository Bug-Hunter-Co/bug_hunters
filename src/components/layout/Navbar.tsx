"use client";
import Link from "next/link";
import Image from "next/image";
import { ButtonMode } from "@ui";
import { useEffect, useState } from "react";
import { font_title } from "@/styles/fonts";
import { useTheme } from "@/utils/ThemeProvider";
import { navbarLink } from "@/lib/constants/index";

export const Navbar = () => {
    const { theme } = useTheme();
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        const handleScroll = () => {
            let current = "";
            const sections = document.querySelectorAll("section[id]");
            const offset = 100; // 👈 compensación por el navbar o margen superior

            sections.forEach((section) => {
                const el = section as HTMLElement;
                const sectionTop = el.offsetTop - offset; // ✅ aplicamos el desplazamiento
                const sectionHeight = el.clientHeight;

                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = el.getAttribute("id") || "";
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // ejecuta al cargar
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div
            className={`${font_title.className} max-sm:h-18 z-50 flex rounded-xl mt-10 py-4 px-10 max-md:px-5 w-7/10 max-xl:w-8/10 max-lg:w-9/10 max-md:w-full max-md:rounded-none max-md:mt-0 items-center justify-between bg-[#FDF8F4] dark:bg-[#2A2A2A] fixed`}
        >
            {theme === "light" ? (
                <Image src={"/logo_black.png"} alt="Bug Hunters logo" width={50} height={50} style={{ width: 'auto', height: 'auto' }} priority />
            ) : (
                <Image src={"/logo_white.png"} alt="Bug Hunters logo" width={50} height={50} style={{ width: 'auto', height: 'auto' }} priority />
            )}
            <nav className="flex max-sm:hidden backdrop-blur-sxl gap-16 max-xl:gap-10 max-lg:gap-4 max-md:gap-3" role="navigation" aria-label="Navegación principal">
                {navbarLink.map((item, index) => {
                    const isActive = activeSection === item.href.replace("#", "");
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`${isActive
                                ? "bg-[#37484E] dark:bg-[#789987] text-white"
                                : "text-[#484848] dark:text-[#B0B0B0]"
                                } font-semibold hover:text-white hover:bg-[#37484E] dark:hover:bg-[#789987] py-2 px-3 rounded-xl hover:scale-105 uppercase text-sm max-lg:text-xs transition-all min-h-[44px] min-w-[44px] flex items-center justify-center`}
                        >
                            {item.text}
                        </Link>
                    );
                })}
            </nav>
            <ButtonMode />
        </div>
    );
};
