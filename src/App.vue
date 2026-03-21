<template>
  <div class="h-screen">
    <NavBar />
    <BookGallery />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

import BookGallery from './components/BookGallery/BookGallery.vue'
import NavBar from './components/Navbar/NavBar.vue'
import { useLang } from './composables/useLang'

const { syncToUrl, onPopState } = useLang()

onMounted(() => {
  syncToUrl()
  window.addEventListener('popstate', onPopState)
})

onBeforeUnmount(() => {
  window.removeEventListener('popstate', onPopState)
})
</script>
