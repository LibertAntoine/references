<template>
  <div class="hover:opacity-100 transition-opacity">
    <Select :model-value="locale" @update:model-value="val => setLang(val as 'fr' | 'en')">
      <SelectTrigger
        class="w-20 px-2 gap-0 font-semibold cursor-pointer"
        size="sm"
      >
        <span
          :class="[
            'fi rounded-[3px] flag-icon',
            languages.find(lang => lang.flag === locale)?.iconClass
          ]"
        />
        {{ languages.find(lang => lang.flag === locale)?.code.toUpperCase() }}
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectItem
            v-for="lang in languages"
            :key="lang.code"
            :value="lang.flag"
            class="flex items-center gap-2 cursor-pointer"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from '@/components/@materials/ui/select'
import { useLang } from '@/composables/useLang'

const languages = [
  { code: 'en', iconClass: 'fi-gb', flag: 'en' },
  { code: 'fr', iconClass: 'fi-fr', flag: 'fr' }
]

const { locale, setLang } = useLang()
</script>
