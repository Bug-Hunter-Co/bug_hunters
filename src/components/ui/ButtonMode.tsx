import { useTheme } from '@/utils/ThemeProvider'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

export const ButtonMode = () => {
    const { toggleTheme, theme } = useTheme()
    return (
        <button
            className='cursor-pointer hover:text-black dark:hover:text-white hover:scale-105 transition-all duration-500 text-[#484848] dark:text-[#B0B0B0]'
            onClick={toggleTheme}>
            {theme == 'light' ? <NightlightIcon /> : <LightModeIcon />}
        </button>
    )
}
