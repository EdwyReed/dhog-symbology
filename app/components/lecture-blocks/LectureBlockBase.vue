<template>
  <div class="flex gap-2 lg:gap-6 xl:gap-10 h-fit relative">
    <div class="shrink-0 absolute -top-10 right-10 opacity-20 sm:static sm:opacity-100">
      <LectureCard :title-image="titleImage" :alt="title" />
    </div>
    <div class="flex flex-col z-10">
      <h2 class="font-cormorant font-bold text-2xl xl:text-4xl text-navy mb-4">
        {{ title }}
      </h2>
      <div class="font-cormorant font-bold text-lg xl:text-2xl">
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
