import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const SUPPORTED_LOCALES = ['fr', 'en'] as const
type Locale = (typeof SUPPORTED_LOCALES)[number]

function isSupportedLocale(lang: string): lang is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(lang)
}

function getQueryLang(): Locale | null {
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang')
  return lang && isSupportedLocale(lang) ? lang : null
}

function setQueryLang(lang: Locale) {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', lang)
  window.history.replaceState(null, '', url.toString())
}

export function useLang() {
  const { locale } = useI18n({ useScope: 'global' })

  function setLang(lang: Locale) {
    locale.value = lang
    setQueryLang(lang)
  }

  // Sync locale → URL if ?lang= is missing
  function syncToUrl() {
    const queryLang = getQueryLang()
    if (queryLang) {
      locale.value = queryLang
    } else {
      setQueryLang(locale.value as Locale)
    }
  }

  // React to browser back/forward navigation
  function onPopState() {
    const lang = getQueryLang()
    if (lang && lang !== locale.value) {
      locale.value = lang
    }
  }

  watch(locale, (newLocale) => {
    setQueryLang(newLocale as Locale)
  })

  return { locale, setLang, syncToUrl, onPopState }
}
