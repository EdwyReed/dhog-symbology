<template>
  <LectureBlocksLectureBlockBase
    title="Вводный блок"
    :title-image="titleImage"
  >
    <LectureBlocksLectureList
      :items="firstSection"
      :start="1"
    />
    <LectureBlocksLectureDivider
      text="КОНТРОЛЬНАЯ РАБОТА №1"
      variant="control"
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
  'Знакомство с Символогией',
  'авщлиоьщшаоли',
  'вапртиаткепыот',
  'ыптиыенпаоь'
]

const secondSection = [
  'феарикеолцнль',
  'епыотыпрнаельоынрглдб',
  'куяфояаыьоыфь',
  'ефрыекяоакяеп',
  'кфытоакьыаапеьто',
  'ыакнльыеапнрьлыепрнль'
]
</script>
