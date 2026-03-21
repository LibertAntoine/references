import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import './assets/style.css'
import 'flag-icons/css/flag-icons.min.css'

import App from './App.vue'
import en from './locales/en.ts'
import fr from './locales/fr.ts'

type MessageSchema = typeof en

const SUPPORTED_LOCALES = ['fr', 'en'] as const
type Locale = (typeof SUPPORTED_LOCALES)[number]

function getInitialLocale(): Locale {
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang')
  if (lang === 'en' || lang === 'fr') return lang
  return 'fr'
}

const i18n = createI18n<[MessageSchema], 'en' | 'fr'>({
  locale: getInitialLocale(),
  fallbackLocale: 'fr',
  globalInjection: true,
  messages: {
    en,
    fr
  }
})

createApp(App).use(i18n).mount('#app')
