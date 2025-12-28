<template>
  <LectureBlocksLectureBlockBase
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
  'Знакомство с Символогией',
  'авщлиоьщшаоли',
  'вапртиаткепыот',
  'ыптиыенпаоь'
]
</script>
