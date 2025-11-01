import { CardsSection } from '../ui/CardTeam'
import { font_paragraph, font_title } from '../../styles/fonts'

export const TeamSection = () => {
    return (
        <section id='teamSection' className={`${font_paragraph.className} flex justify-center py-16 dark:bg-[#1E1E1E] bg-[#FFFFFB] text-gray-800`}>
            <div className='flex flex-col w-7/10 max-xl:w-8/10 max-lg:w-9/10 items-center'>
                <h2 className={`${font_title.className} text-3xl font-extrabold text-gray-900 mb-6 dark:text-[#E0E0E0]`}>Nuestro equipo</h2>
                <p className='dark:text-[#E0E0E0]'>talentos dedicados a crear soluciones web innovadoras y de clase mundial</p>
                <CardsSection />
            </div>
        </section>
    )
}
