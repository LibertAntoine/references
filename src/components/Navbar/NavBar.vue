<template>
  <div class="bg-slate-50 h-11 w-full flex items-center px-4 shadow-md">
    <div class="flex items-center text-slate-700">
      <BookMarked class="w-6 h-6 mr-1.5" />
      <h1 class="text-lg font-semibold">Book references</h1>
    </div>
    <div class="ml-auto">
      <PageThemeButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BookMarked } from 'lucide-vue-next'

import PageThemeButton from './PageThemeButton.vue'
</script>
