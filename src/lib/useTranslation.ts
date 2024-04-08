import en from '../locale/en'
import es from '../locale/es'

export const useTranslation = () => {
    return (text: string) => {

        const defaultLang = 'en';
        const translations = {
            en,
            es
        }

    
        return translations[defaultLang as keyof typeof translations][text as keyof typeof translations[typeof defaultLang]];
    }
}