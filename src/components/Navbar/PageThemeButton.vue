<template>
  <button
    class="group rounded-full p-0.75 transition-colors hover:bg-accent"
    :title="isDark ? 'Light Mode' : 'Dark Mode'"
    @click="() => toggleDark()"
  >
    <Sun
      v-if="isDark"
      class="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground"
    />
    <Moon
      v-else
      class="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground"
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
