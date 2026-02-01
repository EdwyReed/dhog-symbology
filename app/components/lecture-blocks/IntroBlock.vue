<template>
  <LectureBlocksLectureBlockBase
    title="Вводный блок"
    :title-image="titleImage"
  >
    <ol class="list-decimal pl-10 text-terracotta space-y-1 font-cormorant font-bold text-lg lg:text-2xl">
      <li v-for="lecture in introBlockLectures" :key="lecture.slug">
        <NuxtLink
          v-if="!lecture.disabled"
          :to="`/lectures/block-01/${lecture.slug}`"
          class="hover:text-terracotta-pale transition-colors"
        >
          {{ lecture.title }}
        </NuxtLink>
        <span v-else class="opacity-50 cursor-not-allowed">
          {{ lecture.title }}
        </span>
      </li>
    </ol>
  </LectureBlocksLectureBlockBase>
</template>

<script setup lang="ts">
import { introBlockLectures } from '~/data/lectures'

interface Props {
  titleImage: string
}

defineProps<Props>()
</script>
