import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    ru: {
        translation: ruTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // язык по умолчанию
        fallbackLng: 'en', // язык, на который переключится при отсутствии перевода
        debug: true, // включить отладку
        interpolation: {
            escapeValue: false, // не экранировать HTML-символы
        },
    });

export default i18n;