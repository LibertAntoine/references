<template>
  <div
    class="bg-slate-50 h-11 w-full flex items-center px-4 shadow-md fixed top-0"
  >
    <div class="flex items-center text-slate-700">
      <BookMarked class="w-6 h-6 mr-1.5" />
      <h1 class="text-lg font-semibold">{{ $t('title') }}</h1>
    </div>
    <div class="ml-auto flex items-center gap-3">
      <PageThemeButton />
      <LangSelect />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BookMarked } from 'lucide-vue-next'

import LangSelect from './LangSelect.vue'
import PageThemeButton from './PageThemeButton.vue'
</script>
