<template>
  <NuxtLink
    class="relative no-underline text-navy shrink-0 transition-colors"
    :class="isActive ? 'active' : 'hover:text-terracotta-pale'"
    :to="to"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
      class="absolute z-20 w-full h-full mt-1 bg-terracotta blur-lg transition-opacity rounded-[100%]"
      :class="{
        'opacity-0 size-0': !isActive,
        'opacity-50 size-1': isActive
      }"
    />
    <div class="relative z-10">
      <slot />
    </div>
    <video
      v-if="isHovered && !isActive"
      class="hidden lg:block opacity-90 absolute top-2 ml-[-100px] min-w-[calc(100%+170px)] h-full object-fill pointer-events-none"
      src="/images/header-link-hover-bg.webm"
      muted
      autoplay
      playsinline
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute()
const props = defineProps<{
  to: string
}>()

const isHovered = ref(false)
const isActive = computed(() => route.path.includes(props.to))
</script>

<style scoped>
.active {
  text-shadow: 2px 2px 5px theme('colors.terracotta');
}
</style>