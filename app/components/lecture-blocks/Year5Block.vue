<template>
  <LectureBlocksLectureBlockBase
    class="opacity-50 pointer-events-none"
    title="Для изучения с 5 курса"
    :title-image="titleImage"
  >
    <LectureBlocksLectureList
      :items="lectures"
      :start="1"
    />
  </LectureBlocksLectureBlockBase>
</template>

<script setup lang="ts">
interface Props {
  titleImage: string
}

defineProps<Props>()

const lectures = [
  'В разработке',
  'В разработке',
  'В разработке',
  'В разработке'
]
</script>
