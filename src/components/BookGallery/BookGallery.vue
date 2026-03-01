<template>
  <div class="flex flex-col m-auto max-w-3xl px-7 mt-18 gap-6">
    <div v-for="category in booksByCategory" :key="category.code" class="mb-8">
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
</template>

<script setup lang="ts">
import type { Book } from '@/@types/books'

import { computed } from 'vue'
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
</script>
