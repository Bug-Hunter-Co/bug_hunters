import { useTheme } from '@/utils/ThemeProvider'

export const ButtonMode = () => {
    const { toggleTheme, theme } = useTheme()
    return (
        <button
            className='dark:text-white'
            onClick={toggleTheme}>
            {theme == 'light' ? 'light' : 'dark'}
        </button>
    )
}
