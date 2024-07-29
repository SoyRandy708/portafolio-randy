import ENGLISH from "@/i18n/en.json"
import SPANISH from "@/i18n/es.json"
import BanderaEspañol from '@/Icons/IconBanderaEs.astro';
import BanderaEnglish from '@/Icons/IconBanderaEn.astro';

export const LANGUAGES = {
  en: {
    code: 'en',
    link: '',
    name: 'English',
    flag: BanderaEnglish,
  },
  es: {
    code: 'es',
    link: 'es',
    name: 'Español',
    flag: BanderaEspañol,
  },
};

export const getI18N = ({ currentLocale }) => {
  if (currentLocale === LANGUAGES.es.code) return SPANISH
  if (currentLocale === LANGUAGES.en.code) return ENGLISH
  return ENGLISH
}
