<template>
  <NuxtLink
    v-if="path"
    :to="path"
    class="block"
  >
    <p
      class="font-cormorant font-bold italic text-lg lg:text-2xl bg-clip-text text-transparent my-2 hover:opacity-80 transition-opacity"
      :class="gradientClass"
    >
      {{ text }}
    </p>
  </NuxtLink>
  <p
    v-else
    class="font-cormorant font-bold italic text-lg lg:text-2xl bg-clip-text text-transparent my-2"
    :class="gradientClass"
  >
    {{ text }}
  </p>
</template>

<script setup lang="ts">
interface Props {
  text: string
  variant?: 'control' | 'practical'
  path?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'control'
})

const gradientClass = computed(() => {
  return props.variant === 'control'
    ? 'bg-gradient-to-r from-terracotta to-[#623c2f]'
    : 'bg-gradient-to-r from-[#623c2f] to-terracotta'
})
</script>
