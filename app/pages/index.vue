<script setup lang="ts">
definePageMeta({
  layout: 'clean'
})

useHead({
  title: 'Symbology - Войти',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Ruslan+Display&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Neucha&display=swap' }
  ]
})

onBeforeMount(() => navigateTo('/welcome'))
</script>

<template>
  <main v-if="false" class="symbology-welcome">
    <div class="paper-texture" aria-hidden="true"></div>
    <div class="atmosphere-swirls" aria-hidden="true">
      <div class="swirl swirl-left"></div>
      <div class="swirl swirl-right"></div>
    </div>

    <div class="content-wrapper">
      <h1 class="main-title">
        <div class="title-chars">
          <span class="char c1">С</span>
          <span class="char c2">И</span>
          <span class="char c3">М</span>
          <span class="char c4">В</span>
          <span class="char c5">О</span>
          <span class="char c6">Л</span>
          <span class="char c7">О</span>
          <span class="char c8">Г</span>
          <span class="char c9">И</span>
          <span class="char c10">Я</span>
        </div>
        <svg class="title-connections" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <path d="M50 60 Q 100 120 150 70" class="connector" />
          <path d="M150 70 Q 200 20 250 80" class="connector" />
          <path d="M250 80 Q 300 140 350 90" class="connector" />
          <path d="M350 90 Q 400 40 450 100" class="connector" />
          <path d="M450 100 Q 500 150 550 80" class="connector" />
        </svg>
      </h1>

      <nav class="portal-nav">
        <NuxtLink to="/welcome" class="entry-link">
          <div class="image-container">
            <img src="/images/vindi-illustration.png" alt="Спираль символогии" class="portal-image" />
          </div>
          <span class="entry-text">Войти</span>
        </NuxtLink>
      </nav>
    </div>
  </main>
</template>

<style scoped>
.symbology-welcome {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #E8DCC8; /* Fallback */
  color: #2D3E50;
  font-family: 'Neucha', 'Amatic SC', sans-serif;
}

.paper-texture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/paper-texture.png');
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  z-index: 1;
  pointer-events: none;
}

.atmosphere-swirls {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  mix-blend-mode: multiply;
}

.swirl {
  position: absolute;
  width: 60vw;
  height: 60vh;
  background: radial-gradient(ellipse at center, rgba(44, 62, 80, 0.1) 0%, rgba(44, 62, 80, 0) 70%);
  border-radius: 50%;
  filter: blur(40px);
}

.swirl-left {
  top: -20vh;
  left: -20vw;
  transform: rotate(-15deg);
}

.swirl-right {
  bottom: -20vh;
  right: -20vw;
  transform: rotate(15deg);
}

.content-wrapper {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  padding: 2rem;
  gap: 3rem;
}

.main-title {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-chars {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.char {
  font-family: 'Ruslan Display', serif;
  font-size: 3rem;
  color: #2C3E50;
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease;
}

@media (min-width: 768px) {
  .char { font-size: 4.5rem; }
}

.c1 { transform: translateY(-20px) rotate(-10deg); }
.c2 { transform: translateY(10px) rotate(-5deg); }
.c3 { transform: translateY(30px); }
.c4 { transform: translateY(10px) rotate(5deg); }
.c5 { transform: translateY(-15px) rotate(10deg); }
.c6 { transform: translateY(-30px) rotate(5deg); }
.c7 { transform: translateY(-10px); }
.c8 { transform: translateY(15px) rotate(-5deg); }
.c9 { transform: translateY(30px) rotate(-10deg); }
.c10 { transform: translateY(0px) rotate(-5deg); }

.title-connections {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  opacity: 0.6;
}

.connector {
  fill: none;
  stroke: #C5A065;
  stroke-width: 1.5;
  stroke-dasharray: 5, 5;
}
.entry-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  group: normal;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.entry-link:hover {
  transform: scale(1.05);
}

.image-container {
  width: 200px;
  height: auto;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
  transition: filter 0.3s ease;
}

.entry-link:hover .image-container {
  filter: drop-shadow(0 15px 25px rgba(197, 160, 101, 0.3));
}

.portal-image {
  width: 100%;
  height: auto;
  display: block;
}

.entry-text {
  font-family: 'Amatic SC', cursive;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  letter-spacing: 0.1em;
  position: relative;
}

.entry-text::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #C5A065;
  transition: width 0.3s ease, left 0.3s ease;
}

.entry-link:hover .entry-text::after {
  width: 100%;
  left: 0;
}
</style>
