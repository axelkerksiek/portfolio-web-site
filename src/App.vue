<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-light-primary dark:bg-dark-primary">
    <NavigationBar />
    <AboutSection />
    <ProjectsSection />
<!-- 
    <section id="contact" class="px-14 pt-3 pb-3 flex justify-center h-[calc(100vh-70px)] scroll-mt-15">
      <div class="w-full h-full border-4 border-emerald-500 rounded-lg flex justify-center items-center">
        <h1 class="text-gray-700 dark:text-white text-4xl font-bold">Contact</h1>
      </div>
    </section> -->
  </div>

  <Footer />
</template>

<style scoped>
</style>