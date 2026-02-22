<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="container mx-auto px-4 md:px-6 lg:px-8 pb-20 flex-grow">
      <slot />
    </main>
    <CabinetFooter />
  </div>
</template>

<script setup lang="ts">
</script>
