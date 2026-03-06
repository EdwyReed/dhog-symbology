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
      value: 20,
      density: {
        enable: true,
      },
    },
    opacity: {
      value: { min: 0.6, max: 0.7 },
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
      value: { min: 10, max: 20 },
    },
    move: {
      enable: true,
      speed: { min: 0.1, max: 0.3 },
      direction: 'random' as const,
      random: true,
      straight: false,
      outModes: {
        default: 'out' as const,
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
      onHover: { enable: true, mode: 'repulse' },
    },
    modes: {
      repulse: {
        distance: 80,
        duration: 0.8,
        speed: 0.5,
      },
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

