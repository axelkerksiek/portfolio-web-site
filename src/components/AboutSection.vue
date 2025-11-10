<template>
  <section id="about" class="bg-bg-dark scroll-mt-10 pt-26">
    <Container>
      <div class="flex flex-col lg:flex-row">
        <!-- Image div - centered -->
        <div class="flex w-full items-center justify-center lg:w-1/3">
          <img
            src="/images/axel_portrait.jpg"
            alt="Portrait of Axel"
            class="ring-primary h-auto w-full max-w-[15rem] rounded-full object-cover ring-4"
          />
        </div>

        <!-- Content div - centered on mobile, left aligned on large screens -->
        <div
          class="flex w-full flex-col justify-center space-y-6 py-8 text-center lg:w-2/3 lg:py-0 lg:text-left"
        >
          <h1 class="text-text text-4xl font-bold lg:text-5xl">
            Building thoughtful web experiences
          </h1>
          <p class="text-text-muted text-lg leading-relaxed">
            I'm a front-end developer focused on crafting performant,
            accessible, and delightful interfaces. From design systems to
            data-heavy dashboards, I love translating complex requirements into
            intuitive, human-centered experiences. When I'm not coding, you'll
            find me exploring new coffee spots or tinkering with personal
            projects. Heres another cool sentence to add to the about me
            seciton.
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from './BaseContainer.vue'
</script>
