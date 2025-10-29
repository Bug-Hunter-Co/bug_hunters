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
        <div className={`${font_geist.className} flex rounded-2xl mt-10 py-4 px-10 w-7/10 max-xl:w-8/10 max-lg:w-9/10 max-md:w-full max-sm:hidden max-md:rounded-none max-md:mt-0 items-center justify-between bg-[#FDF8F4] dark:bg-[#2A2A2A] fixed`}>
            {theme === 'light' ? (<Image src={'/logo_black.png'} alt="icon" width={50} height={50} />) : (<Image src={'/logo_white.png'} alt="icon" width={50} height={50} />)}
            <div className="flex backdrop-blur-3xl gap-16 max-xl:gap-10 max-lg:gap-6 max-md:gap-4">
                {NAVBAR_LINKS.map((item, index) => (
                    <Link key={index} className="text-[#484848] dark:text-[#B0B0B0] hover:text-white dark:hover:bg-[#789987] hover:bg-[#37484E] py-2 px-3 rounded-xl hover:scale-105 uppercase font-semibold max-lg:text-sm" href={item.href}>{item.text}</Link>
                ))}
            </div>
            <ButtonMode />
        </div>
    )
}
