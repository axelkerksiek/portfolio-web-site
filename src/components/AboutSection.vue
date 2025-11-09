<template>
  <section id="about" class="pt-26 bg-bg-dark scroll-mt-10">
    <Container>
      <div class="flex flex-col lg:flex-row">
        <!-- Image div - centered -->
        <div class="w-full lg:w-1/3 flex items-center justify-center">
          <img
            src="/images/axel_portrait.jpg"
            alt="Portrait of Axel"
            class="w-full h-auto max-w-[15rem] object-cover rounded-full ring-4 ring-primary"
          />
        </div>
    
        <!-- Content div - centered on mobile, left aligned on large screens -->
        <div class="w-full lg:w-2/3 flex flex-col justify-center space-y-6 py-8 lg:py-0 text-center lg:text-left">
          <h1 class="text-4xl lg:text-5xl font-bold text-text">
            Building thoughtful web experiences
          </h1>
          <p class="text-lg leading-relaxed text-text-muted">
            I'm a front-end developer focused on crafting performant, accessible,
            and delightful interfaces. From design systems to data-heavy dashboards,
            I love translating complex requirements into intuitive, human-centered
            experiences. When I'm not coding, you'll find me exploring new coffee
            spots or tinkering with personal projects. Heres another cool sentence
            to add to the about me seciton.
          </p>
        </div>
      </div> 
    </Container>
  </section>
</template>

<script setup lang="ts">
  import Container from './Container.vue'
</script>