<template>
  <div class="grid max-w-[168px] max-h-[286px]">
  <div class="row-start-1 col-start-1 rounded-md overflow-hidden p-[18px_15px_10px_15px]">
      <img
        :src="titleImage"
        :alt="alt"
        class="w-full h-full object-cover object-center"
      />
    </div>
    <img
      src="/images/lecture-card-overlay.png"
      alt=""
      class="row-start-1 col-start-1 w-full h-full object-cover object-center pointer-events-none place-self-center"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  titleImage: string
  alt?: string
}

withDefaults(defineProps<Props>(), {
  alt: ''
})
</script>
