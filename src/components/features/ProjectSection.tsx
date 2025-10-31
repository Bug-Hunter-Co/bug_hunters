import { CardProject } from "../ui/CardProject"
import { font_paragraph, font_title } from "../ui/fonts"

export const ProjectSection = () => {
    return (
        <section id="projects" className={`${font_paragraph.className} flex justify-center py-20 dark:bg-[#212121] bg-[#F0F0EA] text-gray-800`} >
            <div className="flex flex-col gap-8 w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center">
                <h1 className={`${font_title.className} text-3xl font-bold dark:text-[#E0E0E0]`}>Proyectos Destacados</h1>
                <p className="dark:text-[#B0B0B0]">Conoce nuestro trabajo y los resultados que hemos logrado.</p>
                <div className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-6 w-full">
                    <CardProject
                        title="GreenPath"
                        description="Pagina web para ayudar a vender productos, 'Del campo a tu casa' la mejor opcion"
                        tecnologies={['Next.js', 'Tailwind', 'MySql']}
                        path="https://google.com"
                        src="/greenpath/landing.png"
                    />
                    <CardProject
                        title="GreenPath"
                        description="Pagina web para ayudar a vender productos, 'Del campo a tu casa' lorem qwrqw qhwujwh qwhuqw wqut qwhjt qhtjqw th qwkjt qkt qhwk tkqw tkqw thkqw kthq wkthqwkt qhtk wqkt qwkthqwk htq wkthqwkt qhw t"
                        tecnologies={['Next.js', 'Tailwind', 'MySql']}
                        path="https://google.com"
                        src="/greenpath/login.png"
                    />
                    <CardProject
                        title="GreenPath"
                        description="Pagina web para ayudar a vender productos, 'Del campo a tu casa' lorem qwrqw qhwujwh qwhuqw wqut qwhjt qhtjqw th qwkjt qkt qhwk tkqw tkqw thkqw kthq wkthqwkt qhtk wqkt qwkthqwk htq wkthqwkt qhw t"
                        tecnologies={['Next.js', 'Tailwind', 'MySql']}
                        path="https://google.com"
                        src="/project.webp"
                    />
                    <CardProject
                        title="GreenPath"
                        description="Pagina web para ayudar a vender productos, 'Del campo a tu casa' lorem qwrqw qhwujwh qwhuqw wqut qwhjt qhtjqw th qwkjt qkt qhwk tkqw tkqw thkqw kthq wkthqwkt qhtk wqkt qwkthqwk htq wkthqwkt qhw t"
                        tecnologies={['Next.js', 'Tailwind', 'MySql']}
                        path="https://google.com"
                        src="/project.webp"
                    />
                </div>
            </div>
        </section>
    )
}
