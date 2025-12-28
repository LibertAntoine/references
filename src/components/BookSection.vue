<template>
  <section class="font-nunito">
    <h2 class="font-semibold underline">
      The Pragmatic Programmer: your journey to mastery, 20th Anniversary
      Edition
    </h2>
    <p class="italic mb-1.5">Andrew Hunt & David Thomas</p>
    <div>
      <Badge
        v-for="concept in keyConcepts"
        :key="concept"
        variant="outline"
        class="mr-2 mb-2"
        >{{ concept }}</Badge
      >
    </div>
    <p>
      Livre de référence pour appréhender de développement logiciel au XXIème
      siècle. Il permet d’acquérir les bases essentielles au bon développement
      d’un projet : philosophie de programmation pragmatique, création d’un bon
      environnement de développement, design patterns, enjeu de maintenabilité
      du code, gestion de la concurrence, automatisation, tests, etc. Il pose
      les repères de nombreux concepts que l’on peut plus allègrement explorer
      par la suite avec des livres plus spécialisés.
    </p>
    <ul class="list-disc list-inside ml-4 mt-1.5">
      <li class="list-none before:content-['→'] before:mr-2">
        Comment aborder le développement logiciel ?
      </li>
      <li class="list-none before:content-['→'] before:mr-2">
        Comment avoir un environnement de développement efficace ?
      </li>
      <li class="list-none before:content-['→'] before:mr-2">
        Quelles sont les choses auxquelles je dois faire attention pour rendre
        mon logiciel pérenne ?
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import Badge from './@materials/ui/badge/Badge.vue'

const keyConcepts = [
  'ETC',
  'DRY',
  'Couplage',
  'Unit Tests',
  'Concurrency',
  'Continuous Integration'
]
</script>
