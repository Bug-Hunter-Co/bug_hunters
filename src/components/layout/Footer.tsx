import Link from "next/link";
import Image from "next/image";
import { font_title } from "@/styles/fonts"
import { useTheme } from "@/utils/ThemeProvider";
import { contactFooter, iconFooter } from "@/lib/constants";
import { logo_dark_complete, logo_light_complete } from "@/lib/images/general_img";


export const Footer = () => {
    const { theme } = useTheme();
    return (
        <footer className={`${font_title.className} text-[#484848]/90 dark:text-[#B0B0B0]/90 flex flex-col justify-center items-center bg-[#E1E1E1] w-full gap-4 dark:bg-[#2A2A2A]`}>
            <div className="w-7/10 max-md:flex-col max-xl:w-8/10 max-lg:w-9/10 flex items-center justify-between gap-6 max-lg:text-center border-b border-[#223843]/50 dark:border-[#B0B0B0]/50 pt-9 max-md:pt-6 pb-5">

                <div className="flex flex-col gap-2">
                    <div className="flex max-md:justify-center">
                        <Image src={
                            theme == 'light' ?
                                logo_light_complete
                                :
                                logo_dark_complete}
                            alt="Bug Hunters logo" width={170} height={170} />
                    </div>
                    <div className="text-start text-sm italic">
                        <p>Transformando visiones en realidades<br />digitales extraordinarias.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div>
                        <h3 className="font-semibold">Enlaces</h3>
                        <nav aria-label="Enlaces del footer">
                            <ul className="flex flex-col gap-1.5 pt-1.5 text-sm">
                                {
                                    contactFooter.map((item, index) => (
                                        <Link href={item.url} key={index} className="cursor-pointer hover:scale-102 transition-colors">{item.text}</Link>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col gap-3 p-6 max-md:p-0">
                    <h2 className="font-semibold">Síguenos</h2>
                    <div className="flex gap-3">
                        {iconFooter.map((item, index) => (
                            <Link target="_blank" key={index} href={item.url} className="p-2 border border-gray-400 dark:border-stone-500 rounded-md hover:border-gray-600 dark:hover:border-stone-300 cursor-pointer transition-all ease-in-out duration-500 hover:scale-102">
                                <item.icon size={24} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>


            <div className="w-7/10 max-xl:w-8/10 max-lg:w-9/10 flex flex-col sm:flex-row justify-between items-center text-xs pb-6 pt-2">
                <p >© 2025 BugHunter. Todos los derechos reservados.</p>
                <p className="mt-1 sm:mt-0">Innovación y confianza en cada línea de código</p>
            </div>
        </footer>
    )
}
