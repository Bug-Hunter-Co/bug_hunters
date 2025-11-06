import Link from 'next/link'
import Image from 'next/image'
import { img_hero } from '@/lib/images/general_img'
import { font_paragraph, font_title } from '@/styles/fonts'

export const HeroSection = () => {
    return (
        <section id='inicio' className={`${font_paragraph.className} flex justify-center pt-40 max-md:pt-26 pb-20 max-md:pb-10 dark:bg-[#1E1E1E] bg-[#FFFFFB] text-gray-800`} >
            <div className='flex max-md:flex-col gap-16 max-md:gap-0 w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center'>
                <div className='text-gray-900 mb-6 w-full dark:text-[#E0E0E0] flex flex-col gap-8 max-md:items-center'>
                    <h1 className={`${font_title.className} text-4xl font-extrabold max-md:text-center`}>Transforma tu vision en realidad digital</h1>
                    <p className='max-md:text-justify'>Únete a nosotros y forma parte de un equipo dinámico, donde la innovación, la creatividad y el trabajo en equipo son la clave para alcanzar el éxito. ¡Si tienes una idea, nosotros la hacemos realidad!</p>
                    <div className='flex gap-8 font-bold max-lg:text-sm max-xl:gap-6'>
                        <Link href="#contact" aria-label="Ir a la sección de contacto para comenzar un proyecto">
                            <button className='cursor-pointer bg-[#37484E] px-8 py-4 rounded-lg text-white dark:bg-[#789987] max-xl:px-6 hover:scale-105 transition-transform min-h-[44px] min-w-[44px]'>Comienza ahora</button>
                        </Link>
                        <Link href="#projects" aria-label="Ver nuestros proyectos realizados">
                            <button className='cursor-pointer border-2 border-[#37484E] text-[#37484E] rounded-lg px-8 max-xl:px-6 py-4 dark:border-[#789987] dark:text-[#789987] hover:scale-105 transition-transform min-h-[44px] min-w-[44px]'>Ver proyectos</button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full rounded-xl">
                    <Image
                        src={img_hero}
                        alt={'Transforma tu visión en realidad digital con Bug Hunters'}
                        width={500}
                        height={500}
                        className="object-cover max-h-120 rounded-lg w-full"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                    />
                </div>
            </div>
        </section>
    )
}
