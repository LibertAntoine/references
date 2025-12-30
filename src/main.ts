import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import './assets/style.css'
import 'flag-icons/css/flag-icons.min.css'

import App from './App.vue'
import en from './locales/en.ts'
import fr from './locales/fr.ts'

type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'fr'>({
  locale: 'en',
  fallbackLocale: 'fr',
  globalInjection: true,
  messages: {
    en,
    fr
  }
})

createApp(App).use(i18n).mount('#app')
