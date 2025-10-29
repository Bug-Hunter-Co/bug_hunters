import { CardProject } from "../ui/CardProject"
import { font_geist } from "../ui/fonts"

export const ProjectSection = () => {
    return (
        <section className={`${font_geist.className} flex justify-center py-20 dark:bg-[#212121] bg-[#F0F0EA] text-gray-800`} >
            <div className="flex flex-col gap-16 w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center">
                <h1 className="dark:text-[#E0E0E0]">Proyectos Destacados</h1>
                <p className="dark:text-[#B0B0B0]">Conoce nuestro trabajo y los resultados que hemos logrado.</p>
                <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-6 w-full">
                    <CardProject
                        title="GreenPath"
                        description="Pagina web para ayudar a vender productos, 'Del campo a tu casa'"
                        tecnologies={['Next.js', 'Tailwind', 'MySql']}
                        href="https://google.com"
                        src="/project.webp"
                    />
                </div>
            </div>
        </section>
    )
}
