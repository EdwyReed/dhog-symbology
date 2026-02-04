<template>
  <div class="relative min-h-screen">
    <div class="fixed inset-0 bg-cream pointer-events-none">
      <div class="absolute flex h-screen items-center justify-center left-0 top-0 w-screen paper-texture"></div>
      <div class="absolute inset-0 vignette-effect"></div>
    </div>

    <div class="relative z-10">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</style>
