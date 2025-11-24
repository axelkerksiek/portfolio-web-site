<script setup lang="ts">
import { personal_info } from '@/data/personal_info'
</script>

<template>
  <section id="about" class="bg-bg-dark scroll-mt-10 pt-24">
    <AppContainer class="flex flex-col lg:flex-row">
      <!-- Image -->
      <div class="flex w-full items-center justify-center lg:w-1/3">
        <img
          src="/images/portraits/axel_portrait_750x750_optimized.jpg"
          alt="Portrait of Axel"
          class="ring-primary h-auto w-full max-w-[16rem] rounded-full object-cover ring-4"
        />
      </div>

      <!-- Content -->
      <div
        class="flex w-full flex-col justify-center gap-6 py-8 text-center lg:w-2/3 lg:py-0 lg:text-left"
      >
        <h1 class="text-text text-4xl font-bold">{{ personal_info.heading }}</h1>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-text-muted text-lg leading-loose" v-html="personal_info.description"></p>
      </div>
    </AppContainer>
  </section>
</template>
