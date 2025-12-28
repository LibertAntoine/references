<template>
  <NavBar />
  <div class="flex flex-col m-auto max-w-3xl px-4 mt-6 gap-6">
    <BookSection />
  </div>
</template>

<script setup lang="ts">
import BookSection from './components/BookSection.vue'
import NavBar from './components/Navbar/NavBar.vue'
</script>
