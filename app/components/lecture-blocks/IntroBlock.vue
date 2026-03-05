<template>
  <LectureBlocksLectureBlockBase
    title="Вводный блок"
    :title-image="titleImage"
  >
    <ol class="list-decimal text-terracotta space-y-1 font-cormorant font-bold text-lg lg:text-2xl">
      <template v-for="lecture in introBlockLectures" :key="lecture.slug">
        <li v-if="lecture?.variant === 'primary'" class="text-terracotta ml-10">
          <NuxtLink
            v-if="!lecture.disabled"
            :to="`/lectures/block-01/${lecture.slug}`"
            class="hover:text-terracotta-pale transition-colors"
          >
            {{ lecture.title }}
          </NuxtLink>
          <span v-else class="opacity-50 pointer-events-none">
            {{ lecture.title }}
          </span>
        </li>
        <NuxtLink 
          v-else 
          :to="`/lectures/block-01/${lecture.slug}`" 
          class="uppercase font-cormorant font-bold italic text-lg lg:text-2xl leading-15! bg-clip-text text-transparent bg-gradient-to-r from-[#623c2f] to-terracotta hover:text-terracotta-pale transition-colors"
        >
          {{ lecture.title }}
        </NuxtLink>
      </template>
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
