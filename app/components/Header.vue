<template>
  <header class="flex flex-wrap items-center justify-center gap-4 lg:justify-between px-header-x py-header-y font-cormorant font-bold text-header-nav text-navy leading-normal">
    <HeaderLink to="/welcome">
      главная
    </HeaderLink>
    <HeaderLink to="/archives" disabled>
      архивы
    </HeaderLink>
    <HeaderLink to="/rules" disabled>
      правила
    </HeaderLink>
    <HeaderLink to="/lectures">лекции</HeaderLink>
    <HeaderLink to="/literature" disabled>
      литература
    </HeaderLink>
    <HeaderLink to="/music" disabled>
      музыка
    </HeaderLink>
  </header>
</template>

<script setup lang="ts">
</script>
