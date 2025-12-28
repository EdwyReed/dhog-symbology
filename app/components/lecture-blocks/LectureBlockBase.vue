<template>
  <div class="flex gap-6 lg:gap-10 h-fit">
    <div class="shrink-0">
      <LectureCard :title-image="titleImage" :alt="title" />
    </div>
    <div class="flex flex-col">
      <h2 class="font-cormorant font-bold text-2xl lg:text-4xl text-navy mb-4">
        {{ title }}
      </h2>
      <div class="font-cormorant font-bold text-lg lg:text-2xl">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  titleImage: string
}

defineProps<Props>()
</script>
