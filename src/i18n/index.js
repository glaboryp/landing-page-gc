import spanish from './es.json'
import english from './en.json'

const LENGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en'
}

export const getI18n = ({ currentLocale = 'es' }) => {
  if (currentLocale === LENGUAGES.SPANISH) return spanish
  if (currentLocale === LENGUAGES.ENGLISH) return english
  return spanish
}
