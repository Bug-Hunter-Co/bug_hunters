import React from 'react'
import { font_geist } from '../ui/fonts'
import Image from 'next/image'

export const HeroSection = () => {
    return (
        <section className={`${font_geist.className} flex justify-center  pt-40 pb-20 dark:bg-[#1E1E1E] bg-[#FFFFFB] text-gray-800`} >
            <div className='grid md:grid-cols-2 gap-16 w-8/10 items-center'>
                <div className='text-gray-900 mb-6 dark:text-[#E0E0E0] flex flex-col gap-8'>
                    <h1 className='text-3xl font-extrabold'>Transforma tu vision en realidad digital</h1>
                    <p>XXXXXXXXXXXX</p>
                    <div className='flex gap-8 font-bold'>
                        <button className='cursor-pointer bg-[#37484E] px-8 py-4 rounded-lg text-white dark:bg-[#789987]'>Comienza ahora</button>
                        <button className='cursor-pointer border-2 border-[#37484E] text-[#37484E] rounded-lg px-8 py-4 dark:border-[#789987] dark:text-[#789987]'>Ver proyectos</button>
                    </div>
                </div>
                <div className=" flex justify-center items-center w-full bg-[#f8faf7] p-16 rounded-xl">
                    <Image
                        src={'/icon.png'}
                        alt={'hola'}
                        width={500}
                        height={500}
                        className="object-cover rounded-md py-20"
                    />
                </div>
            </div>
        </section>
    )
}
