<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-[200vh] bg-light-primary dark:bg-dark-primary">
    <NavigationBar />
    <section id="about" class="px-14 pt-22 flex justify-center h-[calc(100vh-22px)]">
      <div class="w-full h-full border-4 border-emerald-500 rounded-lg flex justify-center items-center">
        <h1 class="text-gray-700 dark:text-white text-4xl font-bold">About</h1>
      </div>
    </section>

    <section id="projects" class="px-14 pt-6 pb-3 flex justify-center h-[calc(100vh-70px)] scroll-mt-15">
      <div class="w-full h-full border-4 border-emerald-500 rounded-lg flex justify-center items-center">
        <h1 class="text-gray-700 dark:text-white text-4xl font-bold">Projects</h1>
      </div>
    </section>

    <section id="contact" class="px-14 pt-3 pb-3 flex justify-center h-[calc(100vh-70px)] scroll-mt-15">
      <div class="w-full h-full border-4 border-emerald-500 rounded-lg flex justify-center items-center">
        <h1 class="text-gray-700 dark:text-white text-4xl font-bold">Contact</h1>
      </div>
    </section>
  </div>

  <Footer />
</template>

<style scoped>
</style>