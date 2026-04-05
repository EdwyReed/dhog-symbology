<template>
  <div class="board-word-container">
    <!-- CTA state -->
    <button v-if="!isRevealed" class="board-cta" :class="{ 'is-ready': isReady }" @click="reveal">
      <span class="board-cta-line" />
      <span class="board-cta-label">Посмотреть на доску</span>
      <span class="board-cta-line" />
    </button>

    <!-- Revealed SVG text -->
    <svg
      v-if="isRevealed && pathData"
      :viewBox="viewBox"
      class="board-word-svg"
      :class="{ 'is-visible': isAnimated }"
      :style="{ '--duration': `${duration}s` }"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath :id="clipId">
          <rect :x="clipRect.x" :y="clipRect.y" :width="clipRect.w" :height="clipRect.h" />
        </clipPath>
      </defs>
      <path :d="pathData" class="board-word-path" :clip-path="`url(#${clipId})`" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import opentype from 'opentype.js'
import fontUrl from '~/assets/fonts/denistina_en.ttf'

const props = withDefaults(defineProps<{
  text: string
  fontSize?: number
  duration?: number
}>(), {
  fontSize: 72,
  duration: 5,
})

const pathData = ref('')
const viewBox = ref('0 0 100 100')
const isReady = ref(false)
const isRevealed = ref(false)
const isAnimated = ref(false)
const clipId = `board-clip-${Math.random().toString(36).slice(2, 8)}`

const bounds = ref({ x: 0, y: 0, w: 0, h: 0 })
const clipRect = computed(() => {
  const b = bounds.value
  return {
    x: b.x,
    y: b.y,
    w: isAnimated.value ? b.w : 0,
    h: b.h,
  }
})

let font: opentype.Font | null = null

async function loadFont() {
  if (font) return font
  const response = await fetch(fontUrl)
  const buffer = await response.arrayBuffer()
  font = opentype.parse(buffer)
  return font
}

function reveal() {
  if (!pathData.value) return
  isRevealed.value = true
  nextTick(() => {
    requestAnimationFrame(() => {
      isAnimated.value = true
    })
  })
}

onMounted(async () => {
  try {
    const f = await loadFont()
    const path = f.getPath(props.text.toLowerCase(), 0, 0, props.fontSize)
    const bb = path.getBoundingBox()

    const pad = 4
    const x = bb.x1 - pad
    const y = bb.y1 - pad
    const w = bb.x2 - bb.x1 + pad * 2
    const h = bb.y2 - bb.y1 + pad * 2

    viewBox.value = `${x} ${y} ${w} ${h}`
    pathData.value = path.toPathData(2)
    bounds.value = { x, y, w, h }
    isReady.value = true
  } catch (e) {
    console.warn('BoardWord: failed to render SVG text', e)
  }
})
</script>

<style scoped>
.board-word-container {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
}

/* CTA button */
.board-cta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.25rem;
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.board-cta.is-ready {
  opacity: 1;
  pointer-events: auto;
}

.board-cta-label {
  font-family: var(--font-cormorant);
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-style: italic;
  color: var(--color-terracotta-pale);
  letter-spacing: 0.03em;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.board-cta:hover .board-cta-label {
  color: var(--color-terracotta);
}

.board-cta-line {
  display: block;
  width: clamp(2rem, 4vw, 4rem);
  height: 1px;
  background: var(--color-terracotta-pale);
  opacity: 0.5;
  transition: width 0.3s ease, opacity 0.3s ease;
}

.board-cta:hover .board-cta-line {
  width: clamp(2rem, 5vw, 4rem);
  opacity: 0.8;
}

/* Revealed SVG */
.board-word-svg {
  height: clamp(3rem, 4vw, 3.25rem);
  width: auto;
  max-width: 100%;
}

.board-word-svg rect {
  transition: width var(--duration, 5s) ease-in-out;
}

.board-word-path {
  fill: var(--color-navy);
}
</style>
