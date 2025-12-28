<template>
  <div class="hover:opacity-100 transition-opacity">
    <Select v-model="locale">
      <SelectTrigger class="w-[80px] px-2 gap-0 font-semibold" size="sm">
        <span
          :class="[
            'fi rounded-[3px] flag-icon',
            languages.find(lang => lang.flag === locale)?.iconClass
          ]"
        />
        {{ languages.find(lang => lang.flag === locale)?.code.toUpperCase() }}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="lang in languages"
            :key="lang.code"
            :value="lang.flag"
            class="flex items-center"
          >
            <span :class="['fi rounded-[3px] flag-icon', lang.iconClass]" />
            <p class="font-semibold">{{ lang.code.toUpperCase() }}</p>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from '@/components/@materials/ui/select'

const languages = [
  { code: 'en', iconClass: 'fi-gb', flag: 'en' },
  { code: 'fr', iconClass: 'fi-fr', flag: 'fr' }
]

const { locale } = useI18n()
</script>

<style>
/* .flag-icon {
  filter: saturate(0.6);
  transition: filter 0.2s ease;
}

.flag-icon:hover {
  filter: saturate(1);
} */
</style>
