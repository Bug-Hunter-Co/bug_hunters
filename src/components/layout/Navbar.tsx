"use client";

import Image from "next/image";
import { ButtonMode } from "../ui/ButtonMode";
import { font_title } from "../../styles/fonts";
import Link from "next/link";
import { useTheme } from "@/utils/ThemeProvider";
import { useEffect, useState } from "react";

const NAVBAR_LINKS = [
    { href: "#inicio", text: "inicio" },
    { href: "#aboutMe", text: "nosotros" },
    { href: "#teamSection", text: "equipo" },
    { href: "#projects", text: "proyectos" },
    { href: "#contact", text: "contacto" },
];

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
                <Image src={"/logo_black.png"} alt="icon" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
            ) : (
                <Image src={"/logo_white.png"} alt="icon" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
            )}
            <div className="flex max-sm:hidden backdrop-blur-sxl gap-16 max-xl:gap-10 max-lg:gap-4 max-md:gap-3">
                {NAVBAR_LINKS.map((item, index) => {
                    const isActive = activeSection === item.href.replace("#", "");
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`${isActive
                                ? "bg-[#37484E] dark:bg-[#789987] text-white"
                                : "text-[#484848] dark:text-[#B0B0B0]"
                                } font-semibold hover:text-white hover:bg-[#37484E] dark:hover:bg-[#789987] py-2 px-3 rounded-xl hover:scale-105 uppercase text-sm max-lg:text-xs transition-all`}
                        >
                            {item.text}
                        </Link>
                    );
                })}
            </div>
            <ButtonMode />
        </div>
    );
};
