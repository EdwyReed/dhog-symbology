<template>
  <div class="py-8 lg:py-12">
    <!-- Description -->
    <div class="mx-auto text-center mb-12 lg:mb-16 px-4">
      <p class="font-cormorant font-bold text-xl lg:text-4xl text-[#623c2f] leading-tight">
        Перед вами — блоки лекций по Символогии.<br />
        Пожалуйста, проходите их <span class="underline">строго по порядку</span>, начиная с <span class="italic">Вводного блока</span>.<br />
        Да, теория — зверюга ещё та. Но лучше нагрузить уши и мозг сейчас,<br />
        чем потом рассматривать больничное крыло…<br />
        или, не приведи Мерлин, гроб — изнутри.
      </p>
    </div>

    <!-- Lecture blocks grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto px-4">
      <LectureBlocksIntroBlock title-image="/images/lectures/intro-title.png" />
      <LectureBlocksYear1Block title-image="/images/lectures/year1-title.png" />
      <LectureBlocksYear3Block title-image="/images/lectures/year3-title.png" />
      <LectureBlocksYear5Block title-image="/images/lectures/year5-title.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
