<template>
  <LectureBlocksLectureBlockBase
    class="opacity-50 pointer-events-none"
    title="Для изучения с 3 курса"
    :title-image="titleImage"
  >
    <LectureBlocksLectureList
      :items="firstSection"
      :start="1"
    />
    <LectureBlocksLectureDivider
      text="Практическая работа №2"
      variant="practical"
    />
    <LectureBlocksLectureList
      :items="secondSection"
      :start="5"
    />
  </LectureBlocksLectureBlockBase>
</template>

<script setup lang="ts">
interface Props {
  titleImage: string
}

defineProps<Props>()

const firstSection = [
  'В разработке',
  'В разработке',
  'В разработке',
  'В разработке'
]

const secondSection = [
  'В разработке',
  'В разработке',
  'В разработке',
  'В разработке',
  'В разработке',
  'В разработке'
]
</script>
