import ENGLISH from "@/i18n/en.json"
import SPANISH from "@/i18n/es.json"

const LENGUAJES = {
  ENGLISH: 'en',
  SPANISH: 'es',
}

export const getI18N = ({ currentLocale }) => {
  if (currentLocale === LENGUAJES.SPANISH) return SPANISH
  if (currentLocale === LENGUAJES.ENGLISH) return ENGLISH
  return ENGLISH
}
