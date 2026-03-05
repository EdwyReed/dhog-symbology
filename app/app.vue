<template>
  <div class="relative min-h-screen">
    <div class="fixed inset-0 bg-cream pointer-events-none">
      <div class="absolute flex h-screen items-center justify-center left-0 top-0 w-screen paper-texture"></div>
      <div class="absolute inset-0 vignette-effect"></div>
      <FloatingRunes v-if="showRunes" />
    </div>

    <div class="relative z-10">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>

    <!-- Toggle Runes Button -->
    <button
      class="runes-toggle"
      :class="{ 'runes-toggle--active': showRunes }"
      :title="showRunes ? 'Скрыть руны' : 'Показать руны'"
      @click="showRunes = !showRunes"
    >
      ᚱ
    </button>

    <!-- Welcome Fireworks (first visit only) -->
    <WelcomeFireworks />
  </div>
</template>

<script setup lang="ts">
const showRunes = ref(true)

useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Manrope:wght@400;600;800&display=swap'
    }
  ]
})
</script>

<style>
@import url("~/assets/css/main.css");

.paper-texture {
  background-image: url('/images/paper-texture.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  opacity: 0.58;
}

.vignette-effect {
  box-shadow: inset 0 0 clamp(10rem, 20vw, 15.625rem) 0 rgba(192, 160, 111, 0.7);
}

.runes-toggle {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 2px solid var(--color-primary-blue);
  background-color: var(--color-cream);
  color: var(--color-primary-blue);
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s, transform 0.3s, background-color 0.3s;
}

.runes-toggle:hover {
  opacity: 1;
  transform: scale(1.1);
}

.runes-toggle--active {
  background-color: var(--color-primary-blue);
  color: var(--color-cream);
}
</style>
