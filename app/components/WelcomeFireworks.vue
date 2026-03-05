<template>
  <Teleport to="body">
    <Transition name="fireworks-fade">
      <div v-if="showFireworks" class="fireworks-overlay">
        <Nuxt4Particles
          id="welcome-fireworks"
          :options="fireworksOptions"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const STORAGE_KEY = 'dhog-welcomed'
const showFireworks = ref(false)

const FIREWORK_COUNT = 20
const FIREWORK_DELAY = 0.3
const PARTICLE_FADE_TIME = 3500
const TOTAL_DURATION = FIREWORK_COUNT * FIREWORK_DELAY * 1000 + PARTICLE_FADE_TIME + 1000

const fireworksOptions = {
  preset: 'fireworks',
  fullScreen: { enable: false },
  background: {
    color: 'transparent',
    image: 'none',
    opacity: 0,
  },
  particles: {
    move: {
      trail: {
        enable: false,
      },
    },
  },
  sounds: {
    enable: true,
    volume: 50,
  },
  emitters: {
    direction: 'top' as const,
    position: {
      x: 50,
      y: 100,
    },
    size: {
      width: 100,
      height: 0,
    },
    rate: {
      quantity: {min: 1, max: 10},
      delay: FIREWORK_DELAY,
    },
    life: {
      count: FIREWORK_COUNT,
      duration: 0.1,
      delay: FIREWORK_DELAY,
    },
  },
}

onMounted(() => {
  const hasVisited = localStorage.getItem(STORAGE_KEY)

  if (!hasVisited) {
    showFireworks.value = true

    setTimeout(() => {
      showFireworks.value = false
      localStorage.setItem(STORAGE_KEY, 'true')
    }, TOTAL_DURATION)
  }
})
</script>

<style scoped>
.fireworks-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
}

#welcome-fireworks {
  width: 100%;
  height: 100%;
}

:deep(canvas) {
  background: transparent !important;
}

/* Fade transition */
.fireworks-fade-enter-active {
  transition: opacity 0.5s ease-out;
}

.fireworks-fade-leave-active {
  transition: opacity 1s ease-in;
}

.fireworks-fade-enter-from,
.fireworks-fade-leave-to {
  opacity: 0;
}
</style>
