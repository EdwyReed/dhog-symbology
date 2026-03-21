<template>
  <ol
    class="list-decimal text-terracotta space-y-1 font-cormorant font-bold"
    :class="listClass"
    :start="start"
  >
    <li v-for="(item, index) in items" :key="index" class="ml-10">
      <template v-if="typeof item === 'string'">
        <span>{{ item }}</span>
      </template>
      <template v-else>
        <NuxtLink
          v-if="!item.disabled && item.slug"
          :to="`${basePath}${item.slug}`"
          class="hover:text-terracotta-pale transition-colors"
        >
          {{ item.title }}
        </NuxtLink>
        <span v-else class="opacity-50 pointer-events-none">
          {{ item.title }}
        </span>
      </template>
    </li>
  </ol>
</template>

<script setup lang="ts">
import type { Lecture } from '~/data/lectures'

interface Props {
  items: (string | Lecture)[]
  start?: number
  basePath?: string
  listClass?: string
}

withDefaults(defineProps<Props>(), {
  start: 1,
  basePath: '',
  listClass: ''
})
</script>
