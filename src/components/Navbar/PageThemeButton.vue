<template>
  <button
    class="group rounded-full p-0.75 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
    :title="isDark ? 'Light Mode' : 'Dark Mode'"
    @click="() => toggleDark()"
  >
    <Sun
      v-if="isDark"
      class="h-5 w-5 text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-200 dark:group-hover:text-slate-100"
    />
    <Moon
      v-else
      class="h-5 w-5 text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-200 dark:group-hover:text-slate-100"
    />
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Sun } from 'lucide-vue-next'

import Moon from './MoonIcon.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
