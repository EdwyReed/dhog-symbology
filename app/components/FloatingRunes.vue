<template>
  <Nuxt4Particles
    id="floating-runes"
    class="absolute inset-0"
    :options="particlesOptions"
    @load="onParticlesLoaded"
  />
</template>

<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

const particlesOptions = {
  fullScreen: {
    enable: false,
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
      },
    },
    opacity: {
      value: { min: 0.8, max: 0.9 },
      animation: {
        enable: true,
        speed: 0.3,
        minimumValue: 0,
        sync: false,
        startValue: 'random' as const,
        destroy: 'none' as const,
      },
    },
    size: {
      value: { min: 20, max: 30 },
    },
    move: {
      enable: true,
      speed: { min: 0.3, max: 0.8 },
      direction: 'none' as const,
      random: true,
      straight: false,
      outModes: {
        default: 'bounce' as const,
      },
    },
    rotate: {
      value: { min: 0, max: 360 },
      direction: 'random' as const,
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
    },
    shape: {
      type: 'image',
      options: {
        image: [
          { src: '/images/runes/rune1.png', width: 80, height: 80 },
          { src: '/images/runes/rune2.png', width: 80, height: 80 },
          { src: '/images/runes/rune3.png', width: 80, height: 80 },
          { src: '/images/runes/rune4.png', width: 80, height: 80 },
          { src: '/images/runes/rune5.png', width: 80, height: 80 },
        ],
      },
    },
  },
  detectRetina: true,
  interactivity: {
    events: {
      onClick: { enable: true, mode: 'repulse' },
      onHover: { enable: true, mode: 'bounce' },
    },
  },
}

function onParticlesLoaded(container: Container) {
  console.log('Particles loaded:', container)
}
</script>

<style scoped>
#floating-runes {
  pointer-events: none;
}
</style>
