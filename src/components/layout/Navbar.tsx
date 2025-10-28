import Image from "next/image"
import { ButtonMode } from "../ui/ButtonMode"
import { font_geist } from "../ui/fonts"
import Link from "next/link"
import { useTheme } from "@/utils/ThemeProvider"

const NAVBAR_LINKS = [
    { href: '', text: 'inicio' },
    { href: '', text: 'servicios' },
    { href: '', text: 'equipo' },
    { href: '', text: 'contacto' }
]

export const Navbar = () => {
    const { theme } = useTheme()
    return (
        <div className={`${font_geist.className} flex rounded-2xl mt-10 py-6 px-10 w-8/10 items-center justify-between bg-[#FDF8F4] dark:bg-[#2A2A2A] fixed`}>
            {theme === 'light' ? (<Image src={'/logo_black.png'} alt="icon" width={50} height={50} />) : (<Image src={'/logo_white.png'} alt="icon" width={50} height={50} />)}
            <div className="flex gap-16">
                {NAVBAR_LINKS.map((item, index) => (
                    <Link key={index} className="text-[#484848] dark:text-[#B0B0B0] hover:text-black dark:hover:text-white hover:scale-105 transition-all duration-500 uppercase font-semibold" href={item.href}>{item.text}</Link>
                ))}
            </div>
            <ButtonMode />
        </div>
    )
}
