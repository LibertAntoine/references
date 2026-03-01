<template>
  <div class="flex flex-row m-auto max-w-5xl px-7 mt-18 gap-10">
    <div class="flex-1 flex flex-col gap-6">
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
    <aside class="hidden md:block w-58 sticky top-20 self-start">
      <nav>
        <ul class="flex flex-col gap-0.5">
          <li v-for="category in booksByCategory" :key="category.code">
            <a
              :href="`#category-${category.code}`"
              :class="[
                'block px-3 py-2 rounded transition-colors text-sm',
                activeCategory === category.code
                  ? ' font-semibold text-slate-800'
                  : 'hover:bg-slate-100 text-slate-600'
              ]"
              @click.prevent="scrollToCategory(category.code)"
            >
              {{ category.name }}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import type { Book } from '@/@types/books'

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

function setCategoryRef(code: string, el: HTMLElement | null) {
  categoryRefs.value[code] = el
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
  setTimeout(() => {
    for (const category of booksByCategory.value) {
      const el = categoryRefs.value[category.code]
      if (el) {
        el.setAttribute('data-category-code', category.code)
        observer.observe(el)
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
