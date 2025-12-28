<template>
  <LectureBlocksLectureBlockBase
    title="Для изучения с 1 курса"
    :title-image="titleImage"
  >
    <LectureBlocksLectureList
      :items="firstSection"
      :start="1"
    />
    <LectureBlocksLectureDivider
      text="ПРАКТИЧЕСКАЯ РАБОТА №1"
      variant="practical"
    />
    <LectureBlocksLectureList
      :items="secondSection"
      :start="5"
    />
    <LectureBlocksLectureDivider
      text="КОНТРОЛЬНАЯ РАБОТА №2"
      variant="control"
    />
  </LectureBlocksLectureBlockBase>
</template>

<script setup lang="ts">
interface Props {
  titleImage: string
}

defineProps<Props>()

const firstSection = [
  'еотпнроылнерль',
  'етирыпанеьтонрель',
  'кавеытоныеот',
  'яепкотныльонельо'
]

const secondSection = [
  'щшзвлаопьмизщшрапое',
  'щкполшмзщшдшо'
]
</script>
