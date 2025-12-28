import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import './assets/style.css'
import 'flag-icons/css/flag-icons.min.css'

import App from './App.vue'
import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'fr',
  messages: {
    en,
    fr
  }
})

createApp(App).use(i18n).mount('#app')
