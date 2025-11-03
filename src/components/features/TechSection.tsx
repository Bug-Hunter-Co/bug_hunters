import dynamic from 'next/dynamic'

const LogoSlider = dynamic(() => import('../ui/LogoSlider'), { ssr: false })

export const TechSection = () => {
    return (
        <section className='relative flex justify-center pb-32 dark:bg-[#1E1E1E] bg-[#FFFFFB]'>
            <LogoSlider />
        </section>
    )
}
