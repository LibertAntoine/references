<template>
  <section class="font-nunito">
    <div class="mb-3 flex gap-2">
      <div class="h-34 w-25 shrink-0">
        <img
          v-if="book.coverImage"
          class="h-full w-full object-cover rounded-sm shadow-md"
          :src="`/books/${book.coverImage}`"
          :alt="`Cover of the book ${book.title}`"
        />
        <div
          v-else
          class="h-full w-full bg-slate-200 rounded-sm shadow-sm flex items-center justify-center"
        >
          <BookIcon class="text-slate-300 size-8" />
        </div>
      </div>
      <div>
        <div class="ml-1">
          <a
            class="font-semibold underline"
            :href="book.link"
            target="_blank"
            rel="noopener"
          >
            {{ book.title }}
          </a>
          <p class="italic mb-1.5">{{ book.authors }}</p>
        </div>
        <div>
          <Badge
            v-for="concept in book.keyConcepts"
            :key="concept"
            variant="outline"
            class="mr-1.5 mb-1.5"
            >{{ concept }}</Badge
          >
        </div>
      </div>
    </div>
    <p
      class="mb-2 text-justify"
      v-for="paragraph in book.summary"
      :key="paragraph"
    >
      {{ paragraph }}
    </p>
    <ul class="ml-4 mt-3">
      <li v-for="question in book.questions" :key="question">
        <ChevronsRight class="inline-block mb-0.5 mr-1 h-4 w-4" />
        {{ question }}
      </li>
    </ul>
  </section>
  <div
    class="w-full h-px bg-linear-to-r from-slate-100 via-slate-300 to-slate-100"
  />
</template>

<script setup lang="ts">
import type { Book } from '@/@types/books'

import { BookIcon, ChevronsRight } from 'lucide-vue-next'

import Badge from '../@materials/ui/badge/Badge.vue'

const props = defineProps<{
  book: Book
}>()
</script>
