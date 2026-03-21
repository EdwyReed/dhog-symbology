<template>
  <LectureBlocksLectureBlockBase
    title="Вводный блок"
    :title-image="titleImage"
  >
    <LectureBlocksLectureList
      :items="primaryLectures"
      :base-path="basePath"
    />
    <LectureBlocksLectureDivider
      v-if="controlWork"
      :text="controlWork.title"
      :path="`${basePath}${controlWork.slug}`"
      variant="control"
      class="uppercase"
    />
  </LectureBlocksLectureBlockBase>
</template>

<script setup lang="ts">
import { introBlockLectures } from '~/data/lectures'

interface Props {
  titleImage: string
}

defineProps<Props>()

const basePath = '/lectures/block-01/'

const primaryLectures = computed(() =>
  introBlockLectures.filter(lecture => lecture.variant === 'primary')
)

const controlWork = computed(() =>
  introBlockLectures.find(lecture => lecture.variant === 'secondary')
)
</script>
