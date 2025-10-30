import Image from "next/image"
import { ButtonMode } from "../ui/ButtonMode"
import { font_title } from "../ui/fonts"
import Link from "next/link"
import { useTheme } from "@/utils/ThemeProvider"
import { usePathname } from "next/navigation"

const NAVBAR_LINKS = [
    { href: '/', text: 'inicio' },
    { href: '/servicios', text: 'servicios' },
    { href: '/equipo', text: 'equipo' },
    { href: '/contacto', text: 'contacto' }
];

export const Navbar = () => {

    const pathname = usePathname();
    console.log(pathname);

    const { theme } = useTheme();
    return (
        <div className={`${font_title.className} flex rounded-xl mt-10 py-4 px-10 w-7/10 max-xl:w-8/10 max-lg:w-9/10 max-md:w-full max-sm:hidden max-md:rounded-none max-md:mt-0 items-center justify-between bg-[#FDF8F4] dark:bg-[#2A2A2A] fixed`}>
            {theme === 'light' ? (<Image src={'/logo_black.png'} alt="icon" width={50} height={50} />) : (<Image src={'/logo_white.png'} alt="icon" width={50} height={50} />)}
            <div className="flex backdrop-blur-sxl gap-16 max-xl:gap-10 max-lg:gap-6 max-md:gap-4">
                {NAVBAR_LINKS.map((item, index) => (
                    <Link
                        key={index}
                        className={`${pathname === item.href ? "dark:bg-[#789987]! text-white! bg-[#37484E]! " : ""} font-medium text-[#484848] dark:text-[#B0B0B0] hover:text-white dark:hover:bg-[#789987] hover:bg-[#37484E] py-2 px-3 rounded-xl hover:scale-105 uppercase text-sm`}
                        href={item.href}
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
            <ButtonMode />
        </div>
    )
}
