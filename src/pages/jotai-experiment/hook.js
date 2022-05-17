import {useAtom} from 'jotai'
import {countAtom, currentThemeAtom, doubleCountAtom, themeManagerAtom} from './atoms'

export const useJotaiExperiment = () => {
    const [count, setCount] = useAtom(countAtom)
    const [isLighTheme, setIsLighTheme] = useAtom(currentThemeAtom)
    const [doubleCount] = useAtom(doubleCountAtom)
    const [theme] = useAtom(themeManagerAtom)

    return {count, setCount, doubleCount, theme, isLighTheme, setIsLighTheme}
}