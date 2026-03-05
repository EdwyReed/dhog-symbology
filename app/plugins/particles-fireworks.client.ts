import { tsParticles } from '@tsparticles/engine'
import { loadFireworksPreset } from '@tsparticles/preset-fireworks'

export default defineNuxtPlugin(async () => {
  await loadFireworksPreset(tsParticles)
})
