import Link from 'next/link'
import Image from 'next/image'
import { font_paragraph, font_title } from '../../styles/fonts'

export const HeroSection = () => {
    return (
        <section id='inicio' className={`${font_paragraph.className} flex justify-center pt-40 max-md:pt-30 pb-20 dark:bg-[#1E1E1E] bg-[#FFFFFB] text-gray-800`} >
            <div className='flex max-md:flex-col gap-16 w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center'>
                <div className='text-gray-900 mb-6 w-full dark:text-[#E0E0E0] flex flex-col gap-8 max-lg:text-center max-md:items-center'>
                    <h1 className={`${font_title.className} text-4xl font-extrabold`}>Transforma tu vision en realidad digital</h1>
                    <p>Únete a nosotros y forma parte de un equipo dinámico, donde la innovación, la creatividad y el trabajo en equipo son la clave para alcanzar el éxito. ¡Si tienes una idea, nosotros la hacemos realidad!</p>
                    <div className='flex gap-8 font-bold max-lg:text-sm max-xl:gap-6'>
                        <Link href="#contact">
                            <button className='cursor-pointer bg-[#37484E] px-8 py-4 rounded-lg text-white dark:bg-[#789987] max-xl:px-6 hover:scale-103'>Comienza ahora</button>
                        </Link>
                        <Link href="#projects">
                            <button className='cursor-pointer border-2 border-[#37484E] text-[#37484E] rounded-lg px-8 max-xl:px-6 py-4 dark:border-[#789987] dark:text-[#789987] hover:scale-103'>Ver proyectos</button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full rounded-xl">
                    <Image
                        src={'/greenpath/landin.png'}
                        alt={'hola'}
                        width={500}
                        height={500}
                        className="object-cover rounded-lg w-full"
                    />
                </div>
            </div>
        </section>
    )
}
