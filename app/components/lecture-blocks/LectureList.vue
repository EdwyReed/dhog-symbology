<template>
  <ol
    class="list-decimal pl-10 text-terracotta space-y-1"
    :start="start"
  >
    <li v-for="(item, index) in items" :key="index">
      <span>{{ item }}</span>
    </li>
  </ol>
</template>

<script setup lang="ts">
interface Props {
  items: string[]
  start?: number
}

withDefaults(defineProps<Props>(), {
  start: 1
})
</script>
