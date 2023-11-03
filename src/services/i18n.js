import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import translationEN from '../locales/en/translation.json';
import translationRU from '../locales/ru/translation.json';


// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {

  en: {

    translation: translationEN

  },

  ru: {

    translation: translationRU

  },

};

i18next

  .use(initReactI18next)

  .init({

    resources,

    lng: "en",

    interpolation: {

      escapeValue: false,

    },
		debug: false

  });

export default i18next;