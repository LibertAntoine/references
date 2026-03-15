<template>
  <div class="relative flex flex-row-reverse justify-center px-7 pt-24 w-full">
    <aside
      class="w-58 z-10 max-w-xs hidden sm:block ml-5 sticky top-24 h-fit border-l border-border pl-1"
    >
      <nav>
        <ul class="flex flex-col gap-0.5">
          <li v-for="category in booksByCategory" :key="category.code">
            <a
              :href="`#category-${category.code}`"
              :class="[
                'block px-3 py-2 rounded transition-colors text-sm',
                activeCategory === category.code
                  ? 'font-semibold text-foreground'
                  : 'hover:bg-accent text-muted-foreground'
              ]"
              @click.prevent="scrollToCategory(category.code)"
            >
              {{ category.name }}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="flex flex-col gap-6 max-w-3xl w-full mx-auto">
      <div
        v-for="category in booksByCategory"
        :key="category.code"
        :id="`category-${category.code}`"
        class="mb-8 scroll-mt-28"
        :ref="el => setCategoryRef(category.code, el)"
        :data-category-code="category.code"
      >
        <h2 class="text-2xl font-semibold mb-4">{{ category.name }}</h2>
        <div class="flex flex-col gap-4">
          <BookSection
            v-for="book in category.books"
            :key="book.title"
            :book="book"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from '@/@types/books'

import type { ComponentPublicInstance } from 'vue'

import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import BookSection from './BookSection.vue'

const { tm } = useI18n()

const booksByCategory = computed(() => {
  const categories = tm('categories') as Array<{ name: string; code: string }>
  const books = tm('books') as Array<Book>
  return categories.map(category => ({
    ...category,
    books: books.filter(book => book.category === category.code)
  }))
})

const activeCategory = ref<string>('')
const categoryRefs = ref<Record<string, HTMLElement | null>>({})
let observer: IntersectionObserver | null = null

function setCategoryRef(code: string, el: Element | ComponentPublicInstance | null) {
  categoryRefs.value[code] = el instanceof HTMLElement ? el : null
}

function scrollToCategory(code: string) {
  const el = categoryRefs.value[code]
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeCategory.value = code
  }
}

function setupObserver() {
  if (observer) observer.disconnect()
  const options = {
    root: null,
    rootMargin: '-150px 0px 0px 0px',
    threshold: 0.1
  }
  observer = new window.IntersectionObserver(entries => {
    let maxRatio = 0
    let current: string | null = null
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio
        current = entry.target.getAttribute('data-category-code')
      }
    }
    if (current) activeCategory.value = current
  }, options)
  const obs = observer
  setTimeout(() => {
    for (const category of booksByCategory.value) {
      const el = categoryRefs.value[category.code]
      if (el) {
        el.setAttribute('data-category-code', category.code)
        obs.observe(el)
      }
    }
  }, 0)
}

onMounted(() => {
  setupObserver()
})
onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

watch(booksByCategory, () => {
  setupObserver()
})
</script>
