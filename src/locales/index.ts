import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend'

import englishTranslation from './english.json'
import hindiTranslation from './hindi.json'

i18n.use(XHR)
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: englishTranslation,
            },
            hi: {
                translations: hindiTranslation,
            },
        },
        fallbackLng: 'en',
        debug: true,
        lng: 'en',

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ',',
        },

        react: {
            wait: true,
        },
    })

export {
    i18n
}
